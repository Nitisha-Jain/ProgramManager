package in.stackroute.plange.promanager.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import in.stackroute.plange.promanager.model.Person;
import in.stackroute.plange.promanager.model.Session;
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

import java.util.*;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@RunWith(SpringRunner.class)
@WebMvcTest(PersonController.class)
public class PersonController {

        @MockBean
        private SessionService sessionService;
        @MockBean
        private ProductService productService;
        @MockBean
        private PersonService personService;
        @MockBean
        private AssigneeService assigneeService;

        private MockMvc mockMvc;

        private Person person;

        @InjectMocks
        private PersonController personController;

        private List<Person> personList;

        @Before
        public void setUp() throws Exception {
            personList = new ArrayList<>();
            MockitoAnnotations.initMocks(this);
            mockMvc = MockMvcBuilders.standaloneSetup(personController).build();
            person = new Person("Id", "NJ", new Date(),new Date());
            personList.add(person);
        }

//

        // Post Test Case Fail
        @Test
        public void testSaveProduct() throws Exception {
            mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/persondetails")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(jsonToString(person)))
                    .andExpect(status().isNotFound());

        }

        // passed  Delete Test Case -Fail
        @Test
        public void testDeleteProductFail() throws Exception {
            mockMvc.perform(MockMvcRequestBuilders.delete("/api/v1/persondetails/Id")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(jsonToString(person)))
                    .andExpect(status().isNotFound());

        }
//

        private static String jsonToString(final Object ob) throws JsonProcessingException {
            String result;

            try {
                ObjectMapper mapper = new ObjectMapper();
                String jsonContent = mapper.writeValueAsString(ob);
                result = jsonContent;
            } catch (JsonProcessingException e) {
                result = "JSON processing error";
            }

            return result;
        }
    }
