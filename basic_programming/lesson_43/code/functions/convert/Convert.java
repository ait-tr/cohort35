package functions.convert;

/**
 * 11/3/2023
 * lesson_43
 *
 * @author Marsel Sidikov (AIT TR)
 */
public interface Convert {
    // 4, 5, 8 -> "Ваша точка имеет координаты (4, 5, 8)"
    // 1, 2, 3 -> "Point at (4, 5, 8)
    // 3, 1, 5 -> "X = 3, Y = 1, Z = 5"
    String from(int a, int b, int c);
}
