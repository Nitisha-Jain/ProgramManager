package in.stackroute.plange.promanager.repository;

import in.stackroute.plange.promanager.model.Assignee;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AssigneeRepository extends MongoRepository<Assignee, String> {
}
