package functions.convert;

/**
 * 11/3/2023
 * lesson_43
 *
 * @author Marsel Sidikov (AIT TR)
 */
public class RussianConverterImpl implements Convert {
    @Override
    public String from(int x, int y, int z) {
        return "Точка в координатах (" + x + ", " + y + ", " + z + ")";
    }
}
