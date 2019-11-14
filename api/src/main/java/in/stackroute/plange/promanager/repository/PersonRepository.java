package in.stackroute.plange.promanager.repository;

import in.stackroute.plange.promanager.model.Person;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PersonRepository extends MongoRepository<Person, String> {
}
