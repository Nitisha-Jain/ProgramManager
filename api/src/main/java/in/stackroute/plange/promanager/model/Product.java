package in.stackroute.plange.promanager.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Document
public class Product {
    @Id
    private String id;
    private String productName;
    private Date createdAt;
    private int durationWeek;
    private int durationDays;
    private List<Program> programs;
    private int durationHours;
    private int assignee;
    private List<String> agenda;

    public Product(String id, String productName, Date createdAt, int durationWeek, int durationDays, int durationHours, int assignee, List<String> agenda) {
        this.id = id;
        this.productName = productName;
        this.createdAt = createdAt;
        this.durationWeek = durationWeek;
        this.durationDays = durationDays;
        this.durationHours = durationHours;
        this.assignee = assignee;
        this.agenda = agenda;
    }
}