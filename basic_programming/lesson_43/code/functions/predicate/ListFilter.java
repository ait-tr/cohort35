package functions.predicate;

import java.util.function.Predicate;

/**
 * 11/3/2023
 * lesson_43
 *
 * @author Marsel Sidikov (AIT TR)
 */
public class ListFilter {

    // принимает на вход список объектов типа T
    // возвращает "отфильтрованный" список объектов типа T
    // по какому-либо условию
    public <T> MyArrayList<T> filter(MyArrayList<T> list, Predicate<T> predicate) {
        // список целых чисел "отфильтрованный"
        MyArrayList<T> result = new MyArrayList<>();

        for (int i = 0; i < list.size(); i++) { // пробегаем исходный список
            if (predicate.test(list.get(i))) {
                result.add(list.get(i));
            }
        }

        return result;
    }

}
