<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>на Русском</b></summary>

**Кодекс участия в проекте**

1. **Коллективность:** Участие в проекте возможно исключительно в рамках командной работы. Работы, выполненные индивидуально, не будут приниматься.

2. **Объединенные усилия:** Основной акцент проекта делается на совместной разработке, координации действий и совместном планировании.

3. **Слоистая архитектура:** Проект должен быть структурирован на разные слои, включая:
    - **Модель:** Отражает основные сущности и объекты вашего проекта.
    - **Сервис:** Отвечает за бизнес-логику и обработку данных.
    - **Репозиторий:** Управляет хранением и доступом к данным.
    - **Презентационный слой:** Отвечает за интерфейс пользователя и взаимодействие с ним.

   Такое разделение помогает упростить процесс разработки, облегчает тестирование и поддержку проекта, а также делает его более гибким к изменениям.

4. **Практическое применение навыков:** В ходе проекта вы будете иметь возможность применить и закрепить на практике знания, полученные на данном этапе курса, включая:
    - Работу с циклами и условиями
    - Применение типизации данных
    - Реализацию коллекций и структур данных
    - Работу с классами и объектами
    - Применение паттернов проектирования

5. **Цель обучения:** Одной из ведущих целей нашего проекта является обучение навыкам взаимодействия в команде, что является ключевым моментом в современной разработке.

6. **Ценность навыков:** Помимо технической стороны, проект акцентирует внимание на развитии межличностных навыков, таких как коммуникация, планирование и координация действий внутри команды. Эти навыки на вес золота в современной профессиональной среде.


Я призываю каждого придерживаться этих принципов, так как именно они помогут вам быть успешными в вашей будущей карьере.

---
### О слоях
Приложение, как минимум, должно иметь следующие слои:

1. **Слой моделей (Model Layer)**:
    - Определение основных сущностей: `Книга`, `Читатель`, `Пользователь`, `Роль` и т.д.
    - Определение атрибутов каждой сущности и методов доступа.

2. **Слой репозитория (Repository Layer)**:
    - Отвечает за прямую работу с данными (в вашем случае это структуры данных, такие как `MyArrayList` или `MyLinkedList`).
    - Методы для добавления, удаления, обновления и извлечения данных.

3. **Сервисный слой (Service Layer)**:
    - Содержит бизнес-логику приложения.
    - Методы, такие как `взятьКнигу`, `вернутьКнигу`, `зарегистрироватьПользователя` и т.д.
    - Взаимодействует со слоем репозитория для доступа к данным.

4. **Презентационный слой (Presentation Layer)**:
    - В вашем случае это консольное меню.
    - Отвечает за взаимодействие с пользователем, отображение информации и обработку пользовательского ввода.

---
### JUnit тесты

**Требования к сервисному слою проекта**

Для обеспечения надежности и качества вашего программного продукта, важно, чтобы код был хорошо протестирован. Сервисный слой, являясь сердцем нашего приложения, играет ключевую роль в обеспечении его функциональности и производительности.

1. **Покрытие JUnit тестами:** Сервисный слой проекта должен быть покрыт JUnit тестами как минимум на 80%. Это обеспечит высокую степень уверенности в корректности работы кода.

2. **Комплексное тестирование:** Тесты должны не только проверять очевидные и прямые сценарии использования, но и потенциальные краевые случаи и ситуации, которые могут возникнуть при реальной эксплуатации.

3. **Регулярное обновление тестов:** По мере развития и изменения проекта, тесты должны регулярно обновляться, чтобы отражать текущее состояние программы.

Следуя этим требованиям, мы обеспечиваем высокое качество нашего продукта и уверенность в его надежности для пользователей.


## Predicate

`Predicate` в Java - это функциональный интерфейс, который представляет собой условие или предикат, принимающий один аргумент и возвращающий значение типа `boolean`. Он определен в пакете `java.util.function` и содержит один метод `test`, который оценивает условие на заданном аргументе.

Напомню, функциональные интерфейсы – это интерфейсы, которые содержат ровно один абстрактный метод.


Под "предикатом" понимается функция, которая принимает один аргумент и возвращает значение типа `boolean`. То есть это функция, которая выполняет какое-то условие и возвращает `true`, если условие выполняется, и `false` в противном случае.

Функциональный интерфейс `Predicate<T>` предоставляет метод `test(T t)`, который выполняет тестирование объекта типа `T` и возвращает `true` или `false`.

Примеры использования предиката:

- Проверка, является ли число положительным;
- Проверка, является ли строка пустой;
- Проверка, является ли значение в поле `age` объекта типа `Person` меньше 21;

Если обобщить предикат используется для **Проверки, соответствует ли объект заданным критериям**.


Прототип метода `test` выглядит следующим образом:

```
boolean test(T t);
```

Где `T` - тип входного аргумента.

Пример использования `Predicate`:

```
Predicate<String> isNotEmpty = s -> !s.isEmpty();
System.out.println(isNotEmpty.test("Hello"));  // Выводит true
System.out.println(isNotEmpty.test(""));       // Выводит false
```

```

public class PredicateExample {
    public static void main(String[] args) {
        Predicate<String> isLongerThan3 = new Predicate<String>() {
            @Override
            public boolean test(String s) {
                return s.length() > 3;
            }
        };
        
        System.out.println(isLongerThan3.test("foo"));  // Выведет: false
        System.out.println(isLongerThan3.test("foobar"));  // Выведет: true
        
       
    }
}
```

### Использование лямбда-выражения
```
Predicate<Integer> isPositive = x -> x > 0;
System.out.println(isPositive.test(-10));  // Выведет: false
System.out.println(isPositive.test(10));  // Выведет: true
```


</details>

<details style="margin-top: 16px">
  <summary style="cursor: pointer; color: green;"><b>English</b></summary>

**Project Participation Code of Conduct**

1. **Teamwork:** Participation in the project is exclusively within the context of team collaboration. Individually executed work will not be accepted.

2. **Unified Efforts:** The project's primary emphasis is on collective development, coordination of actions, and joint planning.

3. **Layered Architecture:** The project should be structured into different layers, including:
    - **Model:** Reflects the primary entities and objects of your project.
    - **Service:** Manages business logic and data processing.
    - **Repository:** Oversees storage and data access.
    - **Presentation Layer:** Handles user interface and user interaction.

   This separation simplifies the development process, eases testing and maintenance, and makes the project more adaptable to changes.

4. **Practical Skill Application:** Throughout the project, you'll have the opportunity to apply and solidify the knowledge acquired during this stage of the course, encompassing:
    - Working with loops and conditions
    - Implementing data typing
    - Realizing collections and data structures
    - Working with classes and objects
    - Utilizing design patterns

5. **Educational Objective:** One of the paramount goals of our project is to teach teamwork skills, crucial in modern development.

6. **Value of Skills:** Beyond the technical aspects, the project emphasizes the development of interpersonal skills like communication, planning, and action coordination within a team. These skills are invaluable in today's professional environment.

I urge everyone to adhere to these principles, as they will be instrumental in ensuring success in your future careers.

---
### About Layers
The application should, at the very least, have the following layers:

1. **Model Layer**:
    - Define primary entities: `Book`, `Reader`, `User`, `Role`, etc.
    - Define attributes for each entity and access methods.

2. **Repository Layer**:
    - Responsible for direct data work (in your case, data structures such as `MyArrayList` or `MyLinkedList`).
    - Methods for adding, deleting, updating, and retrieving data.

3. **Service Layer**:
    - Contains the application's business logic.
    - Methods like `borrowBook`, `returnBook`, `registerUser`, etc.
    - Interacts with the repository layer for data access.

4. **Presentation Layer**:
    - In your case, this would be a console menu.
    - Manages user interaction, information display, and user input handling.

---

### JUnit Tests

**Service Layer Project Requirements**

To ensure the reliability and quality of your software product, it's essential that the code is thoroughly tested. The service layer, being the heart of our application, plays a pivotal role in ensuring its functionality and performance.

1. **JUnit Test Coverage:** The project's service layer must be covered by JUnit tests at a minimum of 80%. This ensures a high degree of confidence in the code's proper operation.

2. **Comprehensive Testing:** Tests should not only check apparent and direct use-case scenarios but also potential edge cases and situations that might arise in real-world usage.

3. **Regular Test Updates:** As the project evolves and undergoes changes, tests need to be regularly updated to reflect the program's current state.

By adhering to these requirements, we guarantee the high quality of our product and instill confidence in its reliability for users.

</details>