import java.util.Scanner;

/**
 * 9/8/2023
 * InputOutput
 *
 * @author Marsel Sidikov (AIT TR)
 */
public class Main9 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String text = scanner.nextLine();
        int number = scanner.nextInt();
        double value = scanner.nextDouble();

        String message = text + " " + number + " " + value;

        System.out.println(message);
    }
}
