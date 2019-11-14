package in.stackroute.plange.promanager.service;

import in.stackroute.plange.promanager.model.Person;
import in.stackroute.plange.promanager.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PersonService {

    @Autowired
    PersonRepository personRepository;

    //Listing All Tasks
    public List<Person> findAllTasks() {
        return personRepository.findAll();
    }


    public Optional<Person> findTaskById(String id){
        return personRepository.findById(id);
    }

    // Saving the tasks of person
    public Person savetask(Person person) {

        return personRepository.save(person);
    }

    // Deleting Tasks of Person
    public boolean deleteByTaskId(String id)
    {
        personRepository.deleteById(id);
        return  true;
    }

    //Updating the Tasks
    public Person updateTaskById( Person person){

        Person person1= (Person) personRepository.findById(person.getId()).get();
        person1.setText(person.getText());
        person1.setStartDate(person.getStartDate());
        person1.setEndDate(person.getStartDate());
        return (Person) personRepository.save(person1);

    }

}
