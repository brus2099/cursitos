package Logic;

public class Squirtle extends Pokemon implements IWater {

  public Squirtle () {}

  @Override
  protected void atackShielding() {
    System.out.println("Squirtle: Ataque de escudo");
  }

  @Override
  protected void scratch() {
    System.out.println("Squirtle: Ataque de aranazo");
  }

  @Override
  protected void bite() {
    System.out.println("Squirtle: Ataque de mordida");
  }

  @Override
  public void attackHydroPump() {
    System.out.println("Squirtle: Ataque de hidrobomba");
  }

  @Override
  public void attackBubble() {
    System.out.println("Squirtle: Ataque de burbuja");
  }

  @Override
  public void attackWaterGun() {
    System.out.println("Squirtle: Ataque de pistola de agua");
  }
  
}
