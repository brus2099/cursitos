package Logic;

public class Bulbasaur extends Pokemon implements IPlant {

  public Bulbasaur () {}

  @Override
  protected void atackShielding() {
    System.out.println("Bulbasaur: Attaque de escudo");
  }

  @Override
  protected void scratch() {
    System.out.println("Bulbasaur: Ataque de aranazo");
  }

  @Override
  protected void bite() {
    System.out.println("Bulbasaur: Ataque de mordida");
  }

  @Override
  public void attackRazorLeaf() {
    System.out.println("Bulbasaur: Ataque de hoja navaja");
  }

  @Override
  public void attackVineWhip() {
    System.out.println("Bulbasaur: Ataque de latigo cepa");
  }

  @Override
  public void attackSeedBomb() {
    System.out.println("Bulbasaur: Ataque de bomba de semillas");
  }
  
}
