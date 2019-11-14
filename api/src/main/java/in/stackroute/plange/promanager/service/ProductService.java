package in.stackroute.plange.promanager.service;

import in.stackroute.plange.promanager.model.Program;
import in.stackroute.plange.promanager.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import in.stackroute.plange.promanager.model.Product;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;

        public List<Product> findAllProduct() {
            return productRepository.findAll();
        }

        public Optional<Product> findById(String id){
            return productRepository.findById(id);
        }

        public Product saveProduct(Product product) {

            return productRepository.save(product);
         }

        public boolean deleteByProductId(String id)
        {

        productRepository.deleteById(id);
        return true;
        }

        public Product updateById(String id, Product product){

        Product product1=productRepository.findById(id).get();
        product1.setDurationDays(product1.getDurationDays());
        product1.setDurationHours(product1.getDurationHours());
        product1.setDurationWeek(product1.getDurationWeek());
        product1.setAssignee(product1.getAssignee());
        product1.setProductName(product1.getProductName());
        product1.setAgenda(product1.getAgenda());
        return productRepository.save(product1);
        }
    public void saveProgram(String id , Program program) {
        Product product = productRepository.findById(id).orElse(null);

        List<Program> program1= product.getPrograms();

        if(program1==null)
        {
            program1=new ArrayList<>();
        }
        program1.add(program);
        product.setPrograms(program1);
        productRepository.save(product);

    }
    public void deleteProgram(String productId,String programId) {
        Product product = productRepository.findById(productId).orElse(null);

        List<Program> programsList = product.getPrograms();
        int counter=0;
        for(Program program :programsList ){
            if((program.getId().toString()).equals(programId)){

                break;
            }
            counter++;
        }
        programsList.remove(counter);
        product.setPrograms(programsList);
        productRepository.save(product);
    }
    public void updateProgram(String productId,String programId,Program program) {

        Product product = productRepository.findById(productId).orElse(null);
        List<Program> programsList = product.getPrograms();
        int counter=0;
        for(Program program1 :programsList ){
            if((program1.getId().toString()).equals(programId)){
                break;
            }
            counter++;
        }
        programsList.remove(counter);
        programsList.add(program);
        product.setPrograms(programsList);
        productRepository.save(product);
    }


}
