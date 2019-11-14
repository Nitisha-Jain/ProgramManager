package in.stackroute.plange.promanager.repository;

import in.stackroute.plange.promanager.model.Session;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SessionRepository extends MongoRepository<Session,String> {
}
