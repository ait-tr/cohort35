package enums;

import java.util.Arrays;

/**
 * 11/3/2023
 * lesson_43
 *
 * @author Marsel Sidikov (AIT TR)
 */
public class Main {
    public static void main(String[] args) {
        User user = new User();
        user.setRole(UserRole.ADMIN);
        user.setRole(UserRole.CLIENT);
        user.setRole(UserRole.MANAGER);
        user.setRole(UserRole.CLIENT);

        // что можно делать с enum

        // можно сделать переменную и положить туда значение
        UserRole role = UserRole.MANAGER;
        // можно получить строковое представление
        String roleAsString = role.toString();
        System.out.println(roleAsString);
        // можно получить числовое представление
        int ordinal = role.ordinal();
        System.out.println(ordinal);

        // можно получить массив всех значений
        UserRole[] roles = UserRole.values(); // например, нужно предоставить все возможные варинты ролей, которые у вас

//        for (UserRole currentRole : roles) {
//            System.out.println(currentRole);
//        }

        System.out.println(Arrays.toString(roles));

        Size size = Size.S;

        System.out.println(size.getEurope());

        // enum-ы можно сравнивать

        System.out.println(UserRole.ADMIN.equals(UserRole.CLIENT));

    }
}
