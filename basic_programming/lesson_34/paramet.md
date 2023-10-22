
Допустим, у нас есть метод, который возводит число в квадрат, и мы хотим написать параметризованный тест для проверки этого метода.

1. Во-первых, определим простой метод `square`:

```
public class MathUtils {
    public static int square(int num) {
        return num * num;
    }
}
```

2. Теперь создадим параметризованный тест с использованием `@MethodSource`:

```
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.stream.Stream;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;

public class MathUtilsTest {

    @ParameterizedTest
    @MethodSource("squareTestData")
    public void testSquare(int input, int expected, boolean isEqual) {
        int result = MathUtils.square(input);
        assertEquals(expected, result);
        assertEquals(isEqual, expected == result);
    }

    static Stream<Arguments> squareTestData() {
        return Stream.of(
            Arguments.of(2, 4, true),  // 2^2 = 4, и 4 действительно равно 4
            Arguments.of(3, 9, true),  // 3^2 = 9, и 9 действительно равно 9
            Arguments.of(4, 15, false) // 4^2 = 16, но мы предоставили неверное ожидаемое значение 15 для демонстрации
        );
    }
}
```

В этом примере `squareTestData` предоставляет набор данных для теста `testSquare`. Каждый набор данных содержит входное значение (`input`), ожидаемое значение (`expected`) и флаг, указывающий, равно ли ожидаемое значение реальному результату (`isEqual`).

Таким образом, мы можем легко расширять наш набор тестовых данных, добавляя новые аргументы в `squareTestData`.