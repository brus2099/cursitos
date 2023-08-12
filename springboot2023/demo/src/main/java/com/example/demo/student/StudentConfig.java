package com.example.demo.student;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class StudentConfig {
  
  @Bean
  CommandLineRunner commandLineRunner(StudentRepository studentRepository) {
    return args -> {
      Student bruno = new Student(
        "Bruno", 
        "brunocruzgranados@outlook.com", 
        LocalDate.of(1998, Month.DECEMBER, 17)
      );

      Student brandon = new Student(
        "Brandon", 
        "brandonavendanovillegas@gmail.com",
        LocalDate.of(2000, Month.DECEMBER, 30)
      );

      Student jorge = new Student(
        "Jorge", 
        "jorgejoshuatrejo@hotmail.com",
        LocalDate.of(1999, Month.JULY, 20)
      );

      studentRepository.saveAll(
        List.of(bruno, brandon, jorge)
      );
    };
  }

}
