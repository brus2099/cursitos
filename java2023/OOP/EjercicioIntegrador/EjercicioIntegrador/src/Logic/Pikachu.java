package Logic;

public class Pikachu extends Pokemon implements IElectric {

  public Pikachu () {}

  @Override
  protected void atackShielding() {
    System.out.println("Pikachu: Ataque de escudo");
  }

  @Override
  protected void scratch() {
    System.out.println("Pikachu: Ataque de aranazo");
  }

  @Override
  protected void bite() {
    System.out.println("Pikachu: Ataque de mordida");
  }

  @Override
  public void atackImpacthundred() {
    System.out.println("Pikachu: Ataque de impactrueno");
  }

  @Override
  public void fistThunder() {
    System.out.println("Pikachu: Ataque de puño trueno");
  }
  
}
