package Lists;

public class Person {
  
  private int num;
  private String name;
  private int age;

  public Person () {}

  public Person (int num, String name, int age) {
    this.num = num;
    this.name = name;
    this.age = age;
  }

  public int getNum () {
    return this.num;
  }

  public void setNum (int num) {
    this.num = num;
  }

  public String getName () {
    return this.name;
  }

  public void setName (String name) {
    this.name = name;
  }

  public int getAge () {
    return this.age;
  }

  public void setAge (int age) {
    this.age = age;
  }

  

}
