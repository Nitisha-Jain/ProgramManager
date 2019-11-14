package in.stackroute.plange.promanager.repository;

import in.stackroute.plange.promanager.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository extends MongoRepository<Product,String> {

}
