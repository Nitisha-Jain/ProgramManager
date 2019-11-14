package in.stackroute.plange.promanager.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Getter
@ToString
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document
public class Assignee {
    private String  text;
    @Id
    private  String id;
    private  String color;
    private  String avatar;
    private int age;
    private  String  discipline;
}
