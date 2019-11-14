package in.stackroute.plange.promanager.exception;

public class ProductNotFound extends RuntimeException {
        public ProductNotFound(String id) {
            super("Product found : " + id);
        }
    }

