package in.stackroute.plange.promanager.controller;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import in.stackroute.plange.promanager.model.Product;
import in.stackroute.plange.promanager.service.AssigneeService;
import in.stackroute.plange.promanager.service.PersonService;
import in.stackroute.plange.promanager.service.ProductService;
import in.stackroute.plange.promanager.service.SessionService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;

import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
@WebMvcTest(ProductController.class)
public class ProductControllerTest {

        @MockBean
        private SessionService sessionService;
        @MockBean
        private ProductService productService;
        @MockBean
        private PersonService personService;
        @MockBean
        private AssigneeService assigneeService;

        private MockMvc mockMvc;

        private Product product;

        @InjectMocks
        private ProductController productController;

        private List<Product> productList;

        @Before
        public void setUp() throws Exception {
            productList = new ArrayList<>();
            MockitoAnnotations.initMocks(this);
            mockMvc = MockMvcBuilders.standaloneSetup(productController).build();
            product = new Product("Id", "NJ", new Date(), 2, 3, 4, 3, Collections.singletonList("uhui"));
            productList.add(product);
        }

        // Get All Products Passed Case
        @Test
        public void getAllProducts() throws Exception{
            when(productService.findAllProduct()).thenReturn(productList);
            mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/products")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(jsonToString(product)))
                    .andExpect(status().isOk())
                    .andDo(print());
        }

    // Get a Particular Product Passed Case
        @Test
        public void getProduct() throws Exception{
            when(productService.findById("Id")).thenReturn(java.util.Optional.ofNullable(product));
            mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/products/Id")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(jsonToString(product)))
                    .andExpect(status().isOk())
                    .andDo(print());
        }

    // Get a Particular Product Fail Case
        @Test
        public void getProducFailt() throws Exception{
            when(productService.findById("Id")).thenReturn(java.util.Optional.ofNullable(product));
            mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/products/ID")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(jsonToString(product)))
                    .andExpect(status().isNotFound())
                    .andDo(print());
        }

    // Post Test Case Passes
        @Test
        public void testSaveProduct() throws Exception {
            when(productService.findById("Id")).thenReturn(java.util.Optional.of(product));
            mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/products")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(jsonToString(product)))
                    .andExpect(status().isOk());

        }

    // passed Delete Test Case
        @Test
        public void testDeleteProduct() throws Exception {
            when(productService.findById("Id")).thenReturn(java.util.Optional.of(product));
            mockMvc.perform(MockMvcRequestBuilders.delete("/api/v1/products/Id")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(jsonToString(product)))
                    .andExpect(status().isOk());

        }
    // passed  Delete Test Case -Fail
    @Test
    public void testDeleteProductFail() throws Exception {
        when(productService.findById("")).thenReturn(java.util.Optional.of(product));
        mockMvc.perform(MockMvcRequestBuilders.delete("/api/v1/products/ID")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonToString(product)))
                .andExpect(status().isOk());

    }
// passed Update Test Case
        @Test
        public void testUpdateProduct() throws Exception {
            when(productService.findById("Id")).thenReturn(java.util.Optional.of(product));
            mockMvc.perform(MockMvcRequestBuilders.put("/api/v1/products/Id")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(jsonToString(product)))
                    .andExpect(status().isOk());

        }

    // passed Update Test Case -Fail
    @Test
    public void testUpdateProductFail() throws Exception {
        when(productService.findById("Id")).thenReturn(java.util.Optional.of(product));
        mockMvc.perform(MockMvcRequestBuilders.put("/api/v1/products/ID")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonToString(product)))
                .andExpect(status().isNotFound());

    }



    private static String jsonToString(final Object ob) throws JsonProcessingException {
            String result;

            try {
                ObjectMapper mapper = new ObjectMapper();
                String jsonContent = mapper.writeValueAsString(ob);
                result = jsonContent;
            } catch(JsonProcessingException e) {
                result = "JSON processing error";
            }

            return result;
        }
    }
