package in.stackroute.plange.promanager.controller;

import in.stackroute.plange.promanager.model.Person;
import in.stackroute.plange.promanager.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class PersonController {

    @Autowired
    PersonService personService;

    @GetMapping("/persondetails")
    public ResponseEntity<List<Person>> getAllTasks() {
        System.out.println("vhvkh");
        return ResponseEntity.ok(personService.findAllTasks());
    }

    @PostMapping("/persondetails")
    public ResponseEntity<Person> createTasks(@RequestBody Person person) {
        System.out.println("vhgyugkh");
        return ResponseEntity.ok(personService.savetask(person));
    }

    @DeleteMapping("/persondetails/{id}")
    public ResponseEntity<?> deleteTask(@PathVariable String id) {
        System.out.println(id);
        return ResponseEntity.ok(personService.deleteByTaskId(id));
    }


    @PutMapping("/persondetails")
    public ResponseEntity<Person> updateTask(@RequestBody Person person) {
        System.out.println("vhvkh");
        return ResponseEntity.ok(personService.updateTaskById(person));
    }
}

