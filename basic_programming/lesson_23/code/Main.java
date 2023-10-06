import java.util.Arrays;

/**
 * 10/6/2023
 * lesson_23
 *
 * @author Marsel Sidikov (AIT TR)
 */
public class Main {

    // сортировка выбором
    // находим минимумы и ставим их в начало
    public static void selectionSort(int[] array) {
        for (int i = 0; i < array.length; i++) {
            int min = array[i];
            int minIndex = i;

            for (int j = i + 1; j < array.length; j++) {
                if (min > array[j]) {
                    min = array[j];
                    minIndex = j;
                }
            }

            int temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }

    // пузырьковая сортировка
    public static void bubbleSort(int[] array) {
        //
    }

    public static void swapMinMax(int[] array) {
        // предполагаем, что самый минимальный элемент - это первый
        int min = array[0];
        // запоминаем его индекс
        int minIndex = 0;

        // аналогично для максимума
        int max = array[0];
        int maxIndex = 0;


        // пробегаем массив
        for (int i = 1; i < array.length; i++) {
            // если текущий элемент оказался меньше минимального
            if (min > array[i]) {
                // запоминаем его
                min = array[i];
                // запоминаем его индекс
                minIndex = i;
            }

            // если максимум меньше текущего элемента - то запоминаем новый максимум
            if (max < array[i]) {
                max = array[i];
                maxIndex = i;
            }
        }
        // по итогу имеем индексы минимального и максимального, можем спокойно поменять их местами
        int temp = array[minIndex];
        array[minIndex] = array[maxIndex];
        array[maxIndex] = temp;
    }

    public static void main(String[] args) {
        int[] a = {4, 10, -4, 1, 5, 8, 100, 11, 4};

        swapMinMax(a);
        selectionSort(a);

        System.out.println(Arrays.toString(a));
    }
}
