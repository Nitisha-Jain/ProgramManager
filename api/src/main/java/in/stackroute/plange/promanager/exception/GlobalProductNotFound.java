package in.stackroute.plange.promanager.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

    @ControllerAdvice
    public class GlobalProductNotFound extends ResponseEntityExceptionHandler {

        @ExceptionHandler(ProductNotFound.class)
        public void springHandleNotFound(HttpServletResponse response) throws IOException {
            response.sendError(HttpStatus.NOT_FOUND.value());
        }

    }
