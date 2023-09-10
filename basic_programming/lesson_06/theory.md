## Тип boolean
**Логическое высказывание** – это повествовательное предложение, относительно которого можно однозначно сказать, истинно оно или ложно

**Условные выражения** представляют собой некоторое условие и возвращают значение типа boolean, то есть значение **true** (если условие истинно), или значение **false** (если условие ложно). 
К условным выражениям относятся операции сравнения и логические операции

**Операции сравнения**
В операциях сравнения сравниваются два операнда, и возвращается значение **типа boolean** - true, если выражение верно, и false, если выражение неверно.

```
== сравнивает два операнда на равенство
!= сравнивает два операнда на неравенство
< меньше чем
> больше чем
<= меньше или равно
>= больше или равно
```

## Boolean Type
A **boolean statement** is a declarative sentence about which one can unambiguously say whether it is true or false.

**Conditional expressions** represent a certain condition and return a value of type boolean, which is either **true** (if the condition is true) or **false** (if the condition is false). Conditional expressions include comparison operations and logical operations.

**Comparison Operations**
Comparison operations involve comparing two operands and return a **boolean** value - true if the expression is true and false if the expression is false.

- `==` compares two operands for equality.
- `!=` compares two operands for inequality.
- `<` less than
- `>` greater than
- `<=` less than or equal to
- `>=` greater than or equal to


**Логические операции**
Также в Java есть логические операции, которые также представляют условие и возвращают **true** или **false** и, как правило, объединяют несколько операций сравнения.

- `!` Логическое НЕ (отрицания, NOT) - !x означает “не x”. Меняет значение на противоположное 
- `&` Логическое И (AND) - Возвращает true если оба операнда равны true. 
- `|` Логическое ИЛИ (OR) - Возвращает true если хотя бы один из операндов равен true. 
- `^`  Логическое исключающее ИЛИ (XOR) - По сути, возвращает true, если операнды — разные. 
- `&&` Условное И (сокращенное логическое И) - По возвращаемому результату же самое, что &, но, есть нюансы 
- `||` Условное ИЛИ (сокращенное логическое ИЛИ) - По возвращаемому результату же самое, что и |, но, есть нюансы

**Приоритет логических операций**
Как и в математике, в программировании у операторов есть определённый порядок выполнения, если они встречаются в одном выражении

1. `!`
2. `&`
3. `^`
4. `|`
5. `&&`
6. `||`

Если одинаковые операции стоят по соседству, то раньше выполняется та, что левее.

**Logical Operations**
Java also includes logical operations, which represent conditions and return **true** or **false**, typically combining multiple comparison operations.

- `!` Logical NOT (negation) - `!x` means "not x". Inverts the value to its opposite.
- `&` Logical AND - Returns true if both operands are true.
- `|` Logical OR - Returns true if at least one of the operands is true.
- `^` Logical XOR (exclusive OR) - Essentially returns true if the operands are different.
- `&&` Conditional AND (short-circuit logical AND) - Same result as `&`, but with nuances.
- `||` Conditional OR (short-circuit logical OR) - Same result as `|`, but with nuances.


**Priority of Logical Operations**
Just like in mathematics, in programming, operators have a specific order of execution when they appear in a single expression.

1. `!` (Logical NOT)
2. `&` (Logical AND)
3. `^` (Logical XOR)
4. `|` (Logical OR)
5. `&&` (Conditional AND)
6. `||` (Conditional OR)


If identical operations are adjacent, the one on the left is executed first.