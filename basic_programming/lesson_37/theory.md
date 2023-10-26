<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>на Русском</b></summary>

## Java Time API
В Java 8 была добавлена новая библиотека для работы с датой и временем, которая находится в пакете `java.time`.
Эта библиотека решает многие проблемы, которые были с предыдущими версиями API для работы с датами и временем, и предлагает более интуитивно понятный и гибкий функционал.

**Java Time API** (`java.time`) это часть стандартной библиотеки Java, предоставляющая классы для работы с датами и временем. Эта библиотека была введена в Java 8 и заменила старые классы из пакета `java.util.Date`

### Основные классы Java Time API:

- `LocalDate` - представляет дату (год, месяц, день) без времени и часового пояса.
- `LocalTime` - представляет время (часы, минуты, секунды и наносекунды) без даты и часового пояса.
- `LocalDateTime` - представляет дату и время без часового пояса.
- `ZonedDateTime` - представляет дату и время с часовым поясом.
- `Duration` - представляет продолжительность в секундах и наносекундах.
- `Period` - представляет период времени в годах, месяцах и днях.

### Рассмотрим подробнее основные классы Java Time API.

### LocalDate
`LocalDate` - представляет дату (год, месяц, день) без времени и часового пояса. Основные методы:

    - `now()` - возвращает текущую дату.
    - `of(int year, int month, int dayOfMonth)` - создает экземпляр `LocalDate` с указанными годом, месяцем и днем.
    - `parse(CharSequence text)` - создает экземпляр `LocalDate` из строки в формате ISO-8601 (например, "2000-01-01").
    - `plusDays(long days)` - добавляет указанное количество дней к дате.
    - `minusDays(long days)` - вычитает указанное количество дней из даты.
    - `getYear()`, `getMonth()`, `getDayOfMonth()` - возвращают год, месяц и день соответственно.
#### Создание объекта:
  ```
  LocalDate date = LocalDate.now();  // Текущая дата
  LocalDate specificDate = LocalDate.of(2023, Month.MAY, 15);  // Определенная дата
  ```

### LocalTime
`LocalTime` - представляет время (часы, минуты, секунды и наносекунды) без даты и часового пояса. Основные методы:

    - `now()` - возвращает текущее время.
    - `of(int hour, int minute, int second, int nanoOfSecond)` - создает экземпляр `LocalTime` с указанными часами, минутами, секундами и наносекундами.
    - `parse(CharSequence text)` - создает экземпляр `LocalTime` из строки в формате ISO-8601 (например, "12:00:00").
    - `plusHours(long hours)`, `plusMinutes(long minutes)`, `plusSeconds(long seconds)` - добавляют указанное количество часов, минут или секунд к времени.
    - `minusHours(long hours)`, `minusMinutes(long minutes)`, `minusSeconds(long seconds)` - вычитают указанное количество часов, минут или секунд из времени.
    - `getHour()`, `getMinute()`, `getSecond()`, `getNano()` - возвращают часы, минуты, секунды и наносекунды соответственно.

#### Операции с датами:
```
LocalTime timeNow = LocalTime.now();
LocalTime timeTomorrow = timeNow.plusHours(24);
LocalTime timeYesterday = timeNow.minusHours(24);
LocalTime timeYesterday2 = timeNow.minus(24, ChronoUnit.HOURS);
```

### LocalDateTime
`LocalDateTime` - представляет дату и время без часового пояса. Основные методы:

    - `now()` - возвращает текущую дату и время.
    - `of(int year, int month, int dayOfMonth, int hour, int minute, int second, int nanoOfSecond)` - создает экземпляр `LocalDateTime` с указанными годом, месяцем, днем, часами, минутами, секундами и наносекундами.
    - `parse(CharSequence text)` - создает экземпляр `LocalDateTime` из строки в формате ISO-8601 (например, "2000-01-01T12:00:00").
    - `plusDays(long days)`, `plusHours(long hours)` и т. д. - добавляют указанное количество дней, часов и т. д. к дате и времени.
    - `minusDays(long days)`, `minusHours(long hours)` и т. д. - вычитают указанное количество дней, часов и т. д. из даты и времени.
    - `getYear()`, `getMonth()`, `getDayOfMonth()`, `getHour()`, `getMinute()`, `getSecond()`, `getNano()` - возвращают соответствующие компоненты даты и времени.

### ZonedDateTime
`ZonedDateTime` - представляет дату и время с часовым поясом. Основные методы:

    - `now()` - возвращает текущую дату и время в часовом поясе по умолчанию.
    - `of(LocalDateTime localDateTime, ZoneId zone)` - создает экземпляр `ZonedDateTime` с указанными датой, временем и часовым поясом.
    - `parse(CharSequence text)` - создает экземпляр `ZonedDateTime` из строки в формате ISO-8601 (например, "2000-01-01T12:00:00+01:00").
    - `plusDays(long days)`, `plusHours(long hours)` и т. д. - добавляют указанное количество дней, часов и т. д. к дате и времени с учетом часового пояса.
    - `minusDays(long days)`, `minusHours(long hours)` и т. д. - вычитают указанное количество дней, часов и т. д. из даты и времени с учетом часового пояса.
    - `getZone()` - возвращает часовой пояс.

### isAfter, isBefore и until
`isAfter`, `isBefore` и `until` — это методы, которые используются для сравнения и измерения времени в Java Time API.

#### isAfter
Метод `isAfter` проверяет, что текущий объект даты/времени идет после указанного объекта.

##### Пример использования `isAfter`:

```

public class Main {
    public static void main(String[] args) {
        LocalDate date1 = LocalDate.of(2023, 10, 25);
        LocalDate date2 = LocalDate.of(2023, 10, 24);
        boolean isAfter = date1.isAfter(date2);
        System.out.println(isAfter); // Выведет true, так как date1 после date2
    }
}
```

#### isBefore
Метод `isBefore` проверяет, что текущий объект даты/времени идет до указанного объекта.

##### Пример использования `isBefore`:

```
public class Main {
    public static void main(String[] args) {
        LocalDate date1 = LocalDate.of(2023, 10, 24);
        LocalDate date2 = LocalDate.of(2023, 10, 25);
        boolean isBefore = date1.isBefore(date2);
        System.out.println(isBefore); // Выведет true, так как date1 до date2
    }
}
```

#### until
Метод `until` измеряет время между текущим объектом даты/времени и указанным объектом. Результат измерения может быть представлен в различных единицах времени.

##### Пример использования `until`:

```
public class Main {
    public static void main(String[] args) {
        LocalDate date1 = LocalDate.of(2023, 10, 24);
        LocalDate date2 = LocalDate.of(2023, 10, 25);
        long daysBetween = date1.until(date2, ChronoUnit.DAYS);
        System.out.println(daysBetween); // Выведет 1, так как между date1 и date2 один день
    }
}
```

### ChronoUnit
`ChronoUnit` — это перечисление, которое представляет единицы времени, такие как секунды, минуты, часы, дни, недели, месяцы и года. Оно реализует интерфейс `TemporalUnit`, что позволяет использовать его в качестве аргумента для методов, принимающих `TemporalUnit`, например, для метода `until` в классах `LocalDate`, `LocalTime`, `LocalDateTime` и `ZonedDateTime`.

##### Вот примеры основных констант, которые определены в `ChronoUnit`:

- `NANOS` — наносекунды
- `MICROS` — микросекунды
- `MILLIS` — миллисекунды
- `SECONDS` — секунды
- `MINUTES` — минуты
- `HOURS` — часы
- `HALF_DAYS` — полудни (12 часов)
- `DAYS` — дни
- `WEEKS` — недели
- `MONTHS` — месяцы
- `YEARS` — года
- `DECADES` — десятилетия
- `CENTURIES` — столетия
- `MILLENNIA` — тысячелетия
- `ERAS` — эры


```
long monthsBetween = ChronoUnit.MONTHS.between(startDate, endDate);       
```



### Duration
`Duration` - представляет продолжительность в секундах и наносекундах.
Чаще всего используется для измерения коротких промежутков времени
#### Основные методы:

    - `ofDays(long days)`, `ofHours(long hours)` и т. д. - создают экземпляр `Duration` с указанным количеством дней, часов и т. д.
    - `plus(Duration duration)`, `minus(Duration duration)` - добавляют или вычитают указанную продолжительность.
    - `toDays()`, `toHours()`, `toMinutes()`, `toMillis()`, `toNanos()` - возвращают продолжительность в соответствующих единицах измерения.

#### Пример использования:
```
Instant start = Instant.now();
// Здесь может быть какой-то код...
Instant end = Instant.now();
Duration timeElapsed = Duration.between(start, end);
long millis = timeElapsed.toMillis();
long seconds = timeElapsed.toSeconds();
```

### Instant
`Instant` — это класс в Java, который представляет момент времени в эпохе Unix (количество времени в миллисекундах с начала эпохи Unix: 1 января 1970 года, 00:00:00 UTC). Класс `Instant` является частью пакета `java.time` и предоставляет методы для работы с временем в формате Unix timestamp.

### Пример использования `Instant`:

```
import java.time.Instant;

public class Main {
    public static void main(String[] args) {
        Instant now = Instant.now();
        System.out.println(now); // Выведет текущий момент времени в формате Unix timestamp
    }
}
```

В нашем примере `Instant.now()` возвращает текущий момент времени, а `Duration.between(start, end)` вычисляет продолжительность между двумя моментами времени. `toMillis()` конвертирует продолжительность в миллисекунды.
Это позволяет замерить время выполнения кода, который находится между двумя моментами времени `start` и `end`.

### Period
`Period` - представляет период времени в годах, месяцах и днях. Основные методы:

    - `of(int years, int months, int days)` - создают экземпляр `Period` с указанным количеством лет, месяцев и дней.
    - `plus(Period period)`, `minus(Period period)` - добавляют или вычитают указанный период времени.
    - `getYears()`, `getMonths()`, `getDays()` - возвращают количество

```
LocalDate startDate = LocalDate.of(2022, Month.JANUARY, 1);
LocalDate endDate = LocalDate.of(2023, Month.DECEMBER, 31);
Period period = Period.between(startDate, endDate);
System.out.println(period.getYears() + " years " + period.getMonths() + " months " + period.getDays() + " days");
```

### DateTimeFormatter - Форматирование даты и времени
Для **форматирования** и **парсинга** дат используется класс `DateTimeFormatter`. Он позволяет создавать форматированные строки из дат и времени, а также обратно парсить строки в объекты дат и времени.
`Парсинг` - Анализ (разбор) строки, содержащей дату или время

В Java, для форматирования и парсинга дат используется класс `DateTimeFormatter`. Он позволяет создавать форматированные строки из дат и времени, а также обратно парсить строки в объекты дат и времени.

#### Пример форматирования даты:

```
public class Main {
    public static void main(String[] args) {
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy HH:mm:ss");
        String formattedDate = now.format(formatter);
        System.out.println(formattedDate); // Выведет текущую дату и время в формате "день.месяц.год часы:минуты:секунды"
    }
}
```

#### Пример парсинга строки в дату и время

```
public class Main {
    public static void main(String[] args) {
        String date = "25.10.2023 15:30:00";
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy HH:mm:ss");
        LocalDateTime dateTime = LocalDateTime.parse(date, formatter);
        System.out.println(dateTime); // Выведет "2023-10-25T15:30"
    }
}
```

### Обработка исключений при парсинге
Когда мы парсим строку в дату, стоит быть готовым к тому, что строка может быть некорректной и вызвать исключение.
Следует обрабатывать такие ситуации (как? Научимся позже)

#### Шаблоны для DateTimeFormatter
Метод `DateTimeFormatter.ofPattern(String pattern)` создает `DateTimeFormatter` с заданным шаблоном. Шаблон определяет, как дата и время будут форматироваться в строку, и наоборот, как строка будет разобрана в дату и время.

Примеры шаблонов:

- `"dd.MM.yyyy"` - день, месяц, год. Пример: "25.10.2023".
- `"HH:mm:ss"` - часы, минуты, секунды. Пример: "15:30:00".
- `"dd.MM.yyyy HH:mm:ss"` - день, месяц, год, часы, минуты, секунды. Пример: "25.10.2023 15:30:00".
- `"yyyy-MM-dd'T'HH:mm:ss"` - стандартный ISO 8601. Пример: "2023-10-25T15:30:00".

В шаблоне используются следующие символы:

- `y` - год.
- `M` - месяц.
- `d` - день.
- `H` - час в формате от 0 до 23.
- `m` - минута.
- `s` - секунда.

Количество повторений символа определяет формат:

- `"yy"` - двухзначный год, например "23".
- `"yyyy"` - четырехзначный год, например "2023".
- `"M"` - однозначный или двухзначный месяц, например "2" или "12".
- `"MM"` - двухзначный месяц, например "02" или "12".
- `"d"` - однозначный или двухзначный день, например "3" или "25".
- `"dd"` - двухзначный день, например "03" или "25".

Пример создания `DateTimeFormatter`:

```
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy HH:mm:ss");
```

Этот форматтер можно использовать для форматирования даты и времени в строку или наоборот:

```
LocalDateTime dateTime = LocalDateTime.now();
String formattedDate = dateTime.format(formatter);
LocalDateTime parsedDateTime = LocalDateTime.parse("25.10.2023 15:30:00", formatter);
```

</details>

<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>English</b></summary>


## Java Time API
In Java 8, a new library for working with dates and times was added, which is located in the `java.time` package.
This library solves many problems that existed with previous versions of the API for working with dates and times, and offers more intuitive and flexible functionality.

**Java Time API** (`java.time`) is part of the standard Java library, providing classes for working with dates and times. This library was introduced in Java 8 and replaced the old classes from the `java.util.Date` package

### Main classes of Java Time API:

- `LocalDate` - represents a date (year, month, day) without time and time zone.
- `LocalTime` - represents time (hours, minutes, seconds, and nanoseconds) without date and time zone.
- `LocalDateTime` - represents date and time without time zone.
- `ZonedDateTime` - represents date and time with time zone.
- `Duration` - represents duration in seconds and nanoseconds.
- `Period` - represents a period of time in years, months, and days.

### Let's take a closer look at the main classes of Java Time API.

### LocalDate
`LocalDate` - represents a date (year, month, day) without time and time zone. Main methods:

    - `now()` - returns the current date.
    - `of(int year, int month, int dayOfMonth)` - creates an instance of `LocalDate` with the specified year, month, and day.
    - `parse(CharSequence text)` - creates an instance of `LocalDate` from a string in ISO-8601 format (for example, "2000-01-01").
    - `plusDays(long days)` - adds the specified number of days to the date.
    - `minusDays(long days)` - subtracts the specified number of days from the date.
    - `getYear()`, `getMonth()`, `getDayOfMonth()` - return the year, month, and day, respectively.
#### Creating an object:
  ```
  LocalDate date = LocalDate.now();  // Current date
  LocalDate specificDate = LocalDate.of(2023, Month.MAY, 15);  // Specific date
  ```

### LocalTime
`LocalTime` - represents time (hours, minutes, seconds, and nanoseconds) without date and time zone. Main methods:

    - `now()` - returns the current time.
    - `of(int hour, int minute, int second, int nanoOfSecond)` - creates an instance of `LocalTime` with the specified hours, minutes, seconds, and nanoseconds.
    - `parse(CharSequence text)` - creates an instance of `LocalTime` from a string in ISO-8601 format (for example, "12:00:00").
    - `plusHours(long hours)`, `plusMinutes(long minutes)`, `plusSeconds(long seconds)` - add the specified number of hours, minutes, or seconds to the time.
    - `minusHours(long hours)`, `minusMinutes(long minutes)`, `minusSeconds(long seconds)` - subtract the specified number of hours, minutes, or seconds from the time.
    - `getHour()`, `getMinute()`, `getSecond()`, `getNano()` - return the hours, minutes, seconds, and nanoseconds, respectively.

#### Operations with dates:
```
LocalTime timeNow = LocalTime.now();
LocalTime timeTomorrow = timeNow.plusHours(24);
LocalTime timeYesterday = timeNow.minusHours(24);
LocalTime timeYesterday2 = timeNow.minus(24, ChronoUnit.HOURS);
```

### LocalDateTime
`LocalDateTime` - represents date and time without time zone. Main methods:

    - `now()` - returns the current date and time.
    - `of(int year, int month, int dayOfMonth, int hour, int minute, int second, int nanoOfSecond)` - creates an instance of `LocalDateTime` with the specified year, month, day, hours, minutes, seconds, and nanoseconds.
    - `parse(CharSequence text)` - creates an instance of `LocalDateTime` from a string in ISO-8601 format (for example, "2000-01-01T12:00:00").
    - `plusDays(long days)`, `plusHours(long hours)` and so on - add the specified number of days, hours, and so on to the date and time.
    - `minusDays(long days)`, `minusHours(long hours)` and so on - subtract the specified number of days, hours, and so on from the date and time.
    - `getYear()`, `getMonth()`, `getDayOfMonth()`, `getHour()`, `getMinute()`, `getSecond()`, `getNano()` - return the corresponding components of the date and time.

### ZonedDateTime
`ZonedDateTime` - represents date and time with time zone. Main methods:

    - `now()` - returns the current date and time in the default time zone.
    - `of(LocalDateTime localDateTime, ZoneId zone)` - creates an instance of `ZonedDateTime` with the specified date, time, and time zone.
    - `parse(CharSequence text)` - creates an instance of `ZonedDateTime` from a string in ISO-8601 format (for example, "2000-01-01T12:00:00+01:00").
    - `plusDays(long days)`, `plusHours(long hours)` and so on - add the specified number of days, hours, and so on to the date and time, taking into account the time zone.
    - `minusDays(long days)`, `minusHours(long hours)` and so on - subtract the specified number of days, hours, and so on from the date and time, taking into account the time zone.
    - `getZone()` - returns the time zone."
### isAfter, isBefore, and until
`isAfter`, `isBefore`, and `until` are methods used for comparing and measuring time in the Java Time API.

#### isAfter
The `isAfter` method checks if the current date/time object comes after the specified object.

##### Example of using `isAfter`:

```
public class Main {
    public static void main(String[] args) {
        LocalDate date1 = LocalDate.of(2023, 10, 25);
        LocalDate date2 = LocalDate.of(2023, 10, 24);
        boolean isAfter = date1.isAfter(date2);
        System.out.println(isAfter); // Will print true, as date1 is after date2
    }
}
```

#### isBefore
The `isBefore` method checks if the current date/time object comes before the specified object.

##### Example of using `isBefore`:

```
public class Main {
    public static void main(String[] args) {
        LocalDate date1 = LocalDate.of(2023, 10, 24);
        LocalDate date2 = LocalDate.of(2023, 10, 25);
        boolean isBefore = date1.isBefore(date2);
        System.out.println(isBefore); // Will print true, as date1 is before date2
    }
}
```

#### until
The `until` method measures the time between the current date/time object and the specified object. The measurement result can be represented in various time units.

##### Example of using `until`:

```
public class Main {
    public static void main(String[] args) {
        LocalDate date1 = LocalDate.of(2023, 10, 24);
        LocalDate date2 = LocalDate.of(2023, 10, 25);
        long daysBetween = date1.until(date2, ChronoUnit.DAYS);
        System.out.println(daysBetween); // Will print 1, as there is one day between date1 and date2
    }
}
```

### ChronoUnit
`ChronoUnit` is an enumeration that represents units of time, such as seconds, minutes, hours, days, weeks, months, and years. It implements the `TemporalUnit` interface, which allows it to be used as an argument for methods that accept `TemporalUnit`, for example, the `until` method in `LocalDate`, `LocalTime`, `LocalDateTime`, and `ZonedDateTime` classes.

##### Here are examples of the main constants defined in `ChronoUnit`:

- `NANOS` — nanoseconds
- `MICROS` — microseconds
- `MILLIS` — milliseconds
- `SECONDS` — seconds
- `MINUTES` — minutes
- `HOURS` — hours
- `HALF_DAYS` — half-days (12 hours)
- `DAYS` — days
- `WEEKS` — weeks
- `MONTHS` — months
- `YEARS` — years
- `DECADES` — decades
- `CENTURIES` — centuries
- `MILLENNIA` — millennia
- `ERAS` — eras


```
long monthsBetween = ChronoUnit.MONTHS.between(startDate, endDate);       
```

### Duration
`Duration` represents duration in seconds and nanoseconds. It is most commonly used to measure short periods of time.
#### Main methods:

    - `ofDays(long days)`, `ofHours(long hours)`, etc. - create an instance of `Duration` with the specified number of days, hours, etc.
    - `plus(Duration duration)`, `minus(Duration duration)` - add or subtract the specified duration.
    - `toDays()`, `toHours()`, `toMinutes()`, `toMillis()`, `toNanos()` - return the duration in the corresponding units of measurement.

#### Example of use:
```
Instant start = Instant.now();
// Some code can be here...
Instant end = Instant.now();
Duration timeElapsed = Duration.between(start, end);
long millis = timeElapsed.toMillis();
long seconds = timeElapsed.toSeconds();
```

### Instant
`Instant` is a class in Java that represents a moment in time in the Unix epoch (the amount of time in milliseconds since the start of the Unix epoch: January 1, 1970, 00:00:00 UTC). The `Instant` class is part of the `java.time` package and provides methods for working with time in Unix timestamp format.

### Example of using `Instant`:

```
import java.time.Instant;

public class Main {
    public static void main(String[] args) {
        Instant now = Instant.now();
        System.out.println(now); // Will print the current moment in time in Unix timestamp format
    }
}
```

In our example, `Instant.now()` returns the current moment in time, and `Duration.between(start, end)` calculates the duration between two moments in time. `toMillis()` converts the duration to milliseconds.
This allows us to measure the execution time of the code that is between the two moments of time `start` and `end`.

### Period
`Period` represents a period of time in years, months, and days. Main methods:

    - `of(int years, int months, int days)` - creates an instance of `Period` with the specified number of years, months, and days.
    - `plus(Period period)`, `minus(Period period)` - adds or subtracts the specified period of time.
    - `getYears()`, `getMonths()`, `getDays()` - return the number of

```
LocalDate startDate = LocalDate.of(2022, Month.JANUARY, 1);
LocalDate endDate = LocalDate.of(2023, Month.DECEMBER, 31);
Period period = Period.between(startDate, endDate);
System.out.println(period.getYears() + " years " + period.getMonths() + " months " + period.getDays() + " days");
```

### DateTimeFormatter - Formatting dates and times
For **formatting** and **parsing** dates, the class `DateTimeFormatter` is used. It allows you to create formatted strings from dates and times, and vice versa, parse strings into date and time objects.
`Parsing` is the analysis (breakdown) of a string containing a date or time.

In Java, the `DateTimeFormatter` class is used for formatting and parsing dates. It allows you to create formatted strings from dates and times, and vice versa, parse strings into date and time objects.

#### Example of date formatting:

```
public class Main {
    public static void main(String[] args) {
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy HH:mm:ss");
        String formattedDate = now.format(formatter);
        System.out.println(formattedDate); // Will print the current date and time in the format "day.month.year hours:minutes:seconds"
    }
}
```

#### Example of parsing a string into date and time

```
public class Main {
    public static void main(String[] args) {
        String date = "25.10.2023 15:30:00";
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy HH:mm:ss");
        LocalDateTime dateTime = LocalDateTime.parse(date, formatter);
        System.out.println(dateTime); // Will print "2023-10-25T15:30"
    }
}
```

### Handling exceptions when parsing
When we parse a string into a date, we should be prepared for the possibility that the string may be incorrect and cause an exception.
We should handle such situations (how? We'll learn later)

#### Patterns for DateTimeFormatter
The method `DateTimeFormatter.ofPattern(String pattern)` creates a `DateTimeFormatter` with a given pattern. The pattern defines how the date and time will be formatted into a string, and vice versa, how the string will be broken down into a date and time.

Examples of patterns:

- `"dd.MM.yyyy"` - day, month, year. Example: "25.10.2023".
- `"HH:mm:ss"` - hours, minutes, seconds. Example: "15:30:00".
- `"dd.MM.yyyy HH:mm:ss"` - day, month, year, hours, minutes, seconds. Example: "25.10.2023 15:30:00".
- `"yyyy-MM-dd'T'HH:mm:ss"` - standard ISO 8601. Example: "2023-10-25T15:30:00".

The pattern uses the following symbols:

- `y` - year.
- `M` - month.
- `d` - day.
- `H` - hour in the format from 0 to 23.
- `m` - minute.
- `s` - second.

The number of repetitions of a symbol determines the format:

- `"yy"` - two-digit year, for example "23".
- `"yyyy"` - four-digit year, for example "2023".
- `"M"` - one or two-digit month, for example "2" or "12".
- `"MM"` - two-digit month, for example "02" or "12".
- `"d"` - one or two-digit day, for example "3" or "25".
- `"dd"` - two-digit day, for example "03" or "25".

Example of creating `DateTimeFormatter`:

```
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy HH:mm:ss");
```

This formatter can be used for formatting a date and time into a string or vice versa:

```
LocalDateTime dateTime = LocalDateTime.now();
String formattedDate = dateTime.format(formatter);
LocalDateTime parsedDateTime = LocalDateTime.parse("25.10.2023 15:30:00", formatter);
```

</details>