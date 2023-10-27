package layers;

import layers.repositories.UsersRepository;
import layers.services.UsersService;
import layers.view.Menu;

/**
 * 10/27/2023
 * lesson_38_1
 *
 * @author Marsel Sidikov (AIT TR)
 */
public class Main {
    public static void main(String[] args) {
        UsersRepository usersRepository  = new UsersRepository();
        UsersService usersService = new UsersService(usersRepository);
        Menu menu = new Menu(usersService);

        menu.run();
    }
}
