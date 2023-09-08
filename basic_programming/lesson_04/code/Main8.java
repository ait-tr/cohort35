import java.util.Scanner;

/**
 * 9/8/2023
 * InputOutput
 *
 * @author Marsel Sidikov (AIT TR)
 */
public class Main8 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Введите начальную остановку:");
        String start = scanner.nextLine();
        System.out.println("Введите конечную остановку:");
        String finish = scanner.nextLine();

        System.out.println("Введите количество минут, которое вы хотите затратить:");
        int minutes = scanner.nextInt();

        System.out.println("Введите расстояние в метрах:");
        double distance = scanner.nextDouble();

        String message = "Вам нужно от " + start + " до " + finish + " проехать "
                + distance + " метров за " + minutes + " минут";

        System.out.println(message);
    }
}
