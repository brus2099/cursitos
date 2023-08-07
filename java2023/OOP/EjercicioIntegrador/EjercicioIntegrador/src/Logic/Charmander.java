package Logic;

public class Charmander extends Pokemon implements IFire {

  public Charmander () {}

  @Override
  protected void atackShielding() {
    System.out.println("Charmander: Ataque de escudo");
  }

  @Override
  protected void scratch() {
    System.out.println("Charmander: Ataque de aranazo");
  }

  @Override
  protected void bite() {
    System.out.println("Charmander: Ataque de mordida");
  }

  @Override
  public void attackFistFire() {
    System.out.println("Charmander: Ataque de puño de fuego");
  }

  @Override
  public void attackFlameThrower() {
    System.out.println("Charmander: Ataque de lanzallamas");
  }

  @Override
  public void attackFireBall() {
    System.out.println("Charmander: Ataque de bola de fuego");
  }
  
}
