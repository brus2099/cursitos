import java.util.ArrayList;
import java.util.List;

public class App {
    public static void main(String[] args) throws Exception {
        
        List<VideoGame> videogames = new ArrayList<VideoGame>();
        
        VideoGame game1 = new VideoGame(123, "Halo Infinite", "Xbox", 24, "Shooter");
        VideoGame game2 = new VideoGame(456, "God of War", "Playstation", 1, "Action");
        VideoGame game3 = new VideoGame(789, "Super Smash Bros", "Nintendo", 4, "Fighting");
        VideoGame game4 = new VideoGame(101, "Mario Kart", "Nintendo", 4, "Racing");
        VideoGame game5 = new VideoGame(112, "Call of Duty", "Xbox", 24, "Shooter");

        videogames.addAll(List.of(game1, game2, game3, game4, game5));

        for (VideoGame game : videogames) {
            System.out.println("Title: " + game.getTitle());
            System.out.println("Console: " + game.getConsole());
            System.out.println("Number of players: " + game.getPlayers());
        }

        game3.setTitle("Forza Horizon");
        game3.setPlayers(1);
        game3.setCategory("Racing");
        game3.setConsole("Xbox");

    }
}
