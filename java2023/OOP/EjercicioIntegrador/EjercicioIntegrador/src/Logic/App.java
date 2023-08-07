package Logic;

public class App {
    public static void main(String[] args) throws Exception {
        
        Squirtle squirtle = new Squirtle();
        Charmander charmander = new Charmander();
        Bulbasaur bulbasaur = new Bulbasaur();
        Pikachu pikachu = new Pikachu();

        squirtle.atackShielding();
        squirtle.attackHydroPump();
        charmander.atackShielding();
        charmander.attackFistFire();
        bulbasaur.atackShielding();
        bulbasaur.attackRazorLeaf();
        pikachu.atackShielding();
        pikachu.atackImpacthundred();
        
        
    }
}
