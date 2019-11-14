package in.stackroute.plange.promanager.controller;

import in.stackroute.plange.promanager.model.Assignee;
import in.stackroute.plange.promanager.model.Product;
import in.stackroute.plange.promanager.model.Program;
import in.stackroute.plange.promanager.service.AssigneeService;
import in.stackroute.plange.promanager.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1")

public class ProductController {

    @Autowired
    ProductService productService;

    @Autowired
    AssigneeService assigneeService;

    @GetMapping("/products")
    public ResponseEntity<List<Product>> getAllProduct() {
        return ResponseEntity.ok(productService.findAllProduct());
    }

    @PostMapping("/products")
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        return ResponseEntity.ok(productService.saveProduct(product));
    }

    @GetMapping(value="/products/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable("id") String id) {
        return productService.findById(id)
                .map(product -> ResponseEntity.ok().body(product))
                .orElse(ResponseEntity.notFound().build());
    }


    @PutMapping(value="/products/{id}")
    public ResponseEntity<Product> updateById(@PathVariable("id") String id,@RequestBody Product product) {
        return productService.findById(id)
                .map(productData -> {
                    productData.setCreatedAt(new Date());
                    productData.setDurationDays(product.getDurationDays());
                    productData.setDurationHours(product.getDurationHours());
                    productData.setDurationWeek(product.getDurationWeek());
                    productData.setAssignee(product.getAssignee());
                    productData.setProductName(product.getProductName());
                    productData.setAgenda(product.getAgenda());
                    productData.setPrograms(productData.getPrograms());
                    Product updatedProduct = productService.saveProduct(productData);
                    return ResponseEntity.ok().body(updatedProduct);
                }).orElse(ResponseEntity    .notFound().build());

    }

    @DeleteMapping("/products/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable String id) {
        return ResponseEntity.ok(productService.deleteByProductId(id));
    }

    @PutMapping(value="/products/{id}/programs")
    public ResponseEntity<Product> saveProgram(@PathVariable("id") String id,@RequestBody Program program) {
        productService.saveProgram(id, program);
        return productService.findById(id)
                .map(product1 -> ResponseEntity.ok().body(product1))
                .orElse(ResponseEntity.notFound().build());
    }
    @DeleteMapping(value="/products/{productId}/programs/{programId}")
    public ResponseEntity<Product> deleteProgram(@PathVariable("productId") String productId,@PathVariable("programId") String programId) {

        productService.deleteProgram(productId,programId);

        return productService.findById(productId)
                .map(product1 -> ResponseEntity.ok().body(product1))
                .orElse(ResponseEntity.notFound().build());
    }
    @PutMapping(value="/products/{productId}/programs/{programId}")
    public ResponseEntity<Product> updateProgram(@PathVariable("productId") String productId,@PathVariable("programId") String programId,@RequestBody Program program) {

        productService.updateProgram(productId, programId, program);

        return productService.findById(productId)
                .map(product1 -> ResponseEntity.ok().body(product1))
                .orElse(ResponseEntity.notFound().build());
    }
    @GetMapping("/assignee")
    public List<Assignee> getAllAssignee() {
        return assigneeService.getAllAssignee();
    }
    @PostMapping("/assignee")
    public Assignee saveAssignee(@RequestBody Assignee assignee) {
        return assigneeService.saveAssignee(assignee);
    }

}
