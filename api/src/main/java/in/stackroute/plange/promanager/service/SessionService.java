package in.stackroute.plange.promanager.service;

import in.stackroute.plange.promanager.model.Session;
import in.stackroute.plange.promanager.repository.SessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SessionService {

    @Autowired
    SessionRepository sessionRepository;

    //Listing All Tasks
    public List<Session> findAllTasks() {
        return sessionRepository.findAll();
    }


    public Optional<Session> findTaskById(String id) {
        return sessionRepository.findById(id);
    }

    // Saving the tasks of person
    public Session savetask(Session session) {

        return sessionRepository.save(session);
    }

    // Deleting Tasks of Person
    public boolean deleteByTaskId(String id) {
        sessionRepository.deleteById(id);
        return true;
    }

    //Updating the Tasks
    public Session updateTaskById(Session session) {

        Session person1 = (Session) sessionRepository.findById(session.getId()).get();
        person1.setText(session.getText());
        person1.setStartDate(session.getStartDate());
        person1.setEndDate(session.getStartDate());
        return (Session) sessionRepository.save(person1);

    }
}

