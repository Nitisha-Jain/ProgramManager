//package in.stackroute.plange.promanager;
//
//import com.fasterxml.jackson.databind.ObjectMapper;
//import in.stackroute.plange.promanager.model.Product;
//import in.stackroute.plange.promanager.repository.ProductRepository;
//import in.stackroute.plange.promanager.service.ProductService;
//import org.junit.Assert;
//import org.junit.Before;
//import org.junit.runner.RunWith;
//import org.mockito.Mockito;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.MediaType;
//import org.springframework.http.ResponseEntity;
//import org.springframework.mock.web.MockHttpServletResponse;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.junit.Test;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.MvcResult;
//import org.springframework.test.web.servlet.RequestBuilder;
//import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
//import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
//import org.springframework.web.client.RestTemplate;
//
//import static org.junit.Assert.assertEquals;
//import static org.mockito.Mockito.*;
//
//import java.net.URI;
//import java.net.URISyntaxException;
//import java.util.Collections;
//import java.util.Date;
//import java.util.stream.Collectors;
//import java.util.stream.Stream;
//
//
//@RunWith(SpringRunner.class)
//@SpringBootTest
//public class SpringBootTestApplication {
//
//    @Autowired
//    private ProductService productService;
//
//    @MockBean
//    private ProductRepository productRepository;
//
//    @Before
//    public void setUp() throws Exception {
//
//    }
//    @Test
//    public void getProductListTest()
//    {
//        when(productService.findAllProduct())
//                .thenReturn(Stream.of(new Product("Id","NJ",new Date(),2,3,4,3, Collections.singletonList("uhui")))
//                        .collect(Collectors.toList()));
//        assertEquals(1,productService.findAllProduct().size());
//    }
//    @Test
//    public void saveProductTest(){
//        Product product =new Product("Id","NJ",new Date(),2,3,4,3, Collections.singletonList("uhui"));
//        when(productRepository.save(product)).thenReturn(product);
//        assertEquals(product,productService.saveProduct(product));
//    }
//
//    @Test
//    public void deleteProductTest(){
//        Product product =new Product("Id","NJ",new Date(),2,3,4,3, Collections.singletonList("uhui"));
//        productRepository.delete(product);
//        verify(productRepository,times(1)).delete(product);
//    }
//
//    @Test
//    public void testProductList() throws URISyntaxException
//    {
//        RestTemplate restTemplate = new RestTemplate();
//
//        final String baseUrl = "http://localhost:" + 8080 + "/api/v1/products";
//        URI uri = new URI(baseUrl);
//
//        ResponseEntity<String> result = restTemplate.getForEntity(uri, String.class);
//
//        //Verify request succeed
//        Assert.assertEquals(200, result.getStatusCodeValue());
//    }
//}
//
