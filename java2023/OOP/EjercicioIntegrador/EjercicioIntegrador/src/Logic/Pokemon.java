package Logic;

public abstract class Pokemon {
  
  protected int numPokedex;
  protected String name;
  protected double weight;
  protected String genre;
  protected int seasson;

  protected abstract void atackShielding() ;
  protected abstract void scratch();
  protected abstract void bite();

  // que hace = interfaces
  // que es = clases abstractas

}
