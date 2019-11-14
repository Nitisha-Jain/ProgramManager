package in.stackroute.plange.promanager.controller;

import in.stackroute.plange.promanager.model.Session;
import in.stackroute.plange.promanager.service.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class SessionController {

    @Autowired
    SessionService sessionService;

    @GetMapping("/sessions")
    public ResponseEntity<List<Session>> getAllTasks() {
        System.out.println("vhvkh");
        return ResponseEntity.ok(sessionService.findAllTasks());
    }

    @PostMapping("/sessions")
    public ResponseEntity<Session> createTasks(@RequestBody Session session) {
        System.out.println("vhgyugkh");
        return ResponseEntity.ok(sessionService.savetask(session));
    }

    @DeleteMapping("/sessions/{id}")
    public ResponseEntity<?> deleteTask(@PathVariable String id) {
        System.out.println(id);
        return ResponseEntity.ok(sessionService.deleteByTaskId(id));
    }


    @PutMapping("/sessions")
    public ResponseEntity<Session> updateTask(@RequestBody Session session) {
        System.out.println("vhvkh");
        return ResponseEntity.ok(sessionService.updateTaskById(session));
    }
}

