package Relations;

public class Car {
  
  private Long id;
  private String brand;
  private String model;
  // un auto tiene un propietario
  // private Owner owner;

  // un auto puede tener varios propietarios
  // private List<Owner> owners;

  public Car() {}

  public Car(Long id, String brand, String model) {
    this.id = id;
    this.brand = brand;
    this.model = model;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getBrand() {
    return brand;
  }

  public void setBrand(String brand) {
    this.brand = brand;
  }

  public String getModel() {
    return model;
  }

  public void setModel(String model) {
    this.model = model;
  }

  @Override
  public String toString() {
    return "Car [id=" + id + ", brand=" + brand + ", model=" + model + "]";
  }
}
