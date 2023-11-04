package functions.convert;

/**
 * 11/3/2023
 * lesson_43
 *
 * @author Marsel Sidikov (AIT TR)
 */
public class EnglishConvertImpl implements Convert {
    @Override
    public String from(int x, int y, int z) {
        return "Point at coordinates (" + x + ", " + y + ", " + z + ")";
    }
}
