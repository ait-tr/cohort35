package layers.services;

import layers.models.User;
import layers.repositories.UsersRepository;

/**
 * 10/27/2023
 * lesson_38_1
 *
 * @author Marsel Sidikov (AIT TR)
 */
public class UsersService { // сервис для работы с пользователями

    private UsersRepository usersRepository; // ссылка на репозиторий

    public UsersService(UsersRepository usersRepository) { // конструктор, чтобы положить конкретный репозиторий
        this.usersRepository = usersRepository;
    }

    public void register(String firstName, String lastName, String email, String password) {

        // давайте проверим, а нет ли пользователя с таким email-ом?
        if (usersRepository.isExistsByEmail(email)) {
            System.err.println("Пользователь с таким email уже есть");
            return; // останавливаем работу метода
        }

        // создаем пользователя
        User user = new User(firstName, lastName, email, password);

        usersRepository.save(user);
    }

    public User[] getAllUsers() {
        return usersRepository.findAll();
    }

}
