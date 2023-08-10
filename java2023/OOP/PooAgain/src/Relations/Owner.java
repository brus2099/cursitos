package Relations;

public class Owner {
  
  private Long id;
  private String name;
  private String surname;
  
  public Owner() {}

  public Owner(Long id, String name, String surname) {
    this.id = id;
    this.name = name;
    this.surname = surname;
  }

  public Long getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public String getSurname() {
    return surname;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setSurname(String surname) {
    this.surname = surname;
  }

  @Override
  public String toString() {
    return "Owner [id=" + id + ", name=" + name + ", surname=" + surname + "]";
  }
}
