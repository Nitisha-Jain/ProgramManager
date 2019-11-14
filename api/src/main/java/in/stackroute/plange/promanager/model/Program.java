package in.stackroute.plange.promanager.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode
public class Program {
    @Id
    private UUID id= UUID.randomUUID() ;
    private String text;
    private Date  startDate;
    private Date endDate;
    private List<String> assignee;
}
