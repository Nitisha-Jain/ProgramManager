package in.stackroute.plange.promanager.service;

import in.stackroute.plange.promanager.model.Assignee;
import in.stackroute.plange.promanager.repository.AssigneeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AssigneeService {
    @Autowired
    AssigneeRepository assigneeRepository;
    public List<Assignee> getAllAssignee()
    {
        return assigneeRepository.findAll();
    }
    public Assignee saveAssignee(Assignee assignee)
    {
        return assigneeRepository.save(assignee);
    }
}

