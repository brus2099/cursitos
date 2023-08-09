package com.example.demo.student;

import java.time.LocalDate;

public class Student {
  private Long id;
  private String name;
  private String email;
  private LocalDate dob;
  private int age;

  public Student() {}

  public Student(Long id, String name, String email, LocalDate dob, int age) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.dob = dob;
    this.age = age;
  }

  public Student(String name, String email, LocalDate dob, int age) {
    this.name = name;
    this.email = email;
    this.dob = dob;
    this.age = age;
  }

  public Long getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public int getAge() {
    return age;
  }

  public LocalDate getDob() {
    return dob;
  }

  public String getEmail() {
    return email;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setAge(int age) {
    this.age = age;
  }

  public void setDob(LocalDate dob) {
    this.dob = dob;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  @Override
  public String toString() {
    return "Student [id=" + id + ", name=" + name + ", age=" + age + ", dob=" + dob + ", email=" + email + "]";
  }
}
