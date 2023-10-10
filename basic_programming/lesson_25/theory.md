
Наследование описывает связь «является» (или по-английски «IS A»).
Собака является Животным. Такое отношение легко выразить с помощью наследования, где Animal будет родительским классом, а Dog — потомком.

Однако далеко не все связи можно описать таким образом.
К примеру, принтер определенно как-то связана с компьютером, но она не является компьютером. Ноги как-то связаны с человеком, но они не являются человеком.

В этих случаях в основе связи лежит другой тип отношения: «является частью» («HAS A») или «имеет». Рука не является человеком, но является частью человека. Принтер не является компьютером, но компьютер имеет принтер.

Отношения **HAS-A** можно описать в коде, используя механизмы **композиции** и **агрегирования**.
Разница между ними заключается в «строгости» этих связей.

Агрегация и композиция частными случаями **ассоциации**. Это более конкретизированные отношения между объектами.

**Агрегация** — отношение когда один объект является частью другого. Например, Студент входит в Группу любителей физики, у Автобуса есть Водитель.

**Композиция** — более «жесткое отношение, когда объект не только является частью другого объекта, но и вообще не может принадлежать еще кому-то. Это когда двигатель не существует отдельно от автомобиля. Двигатель создается при создании автомобиля и полностью управляется автомобилем. В типичном примере, экземпляр двигателя будет создаваться в конструкторе автомобиля.
В отличие от студента, который может входить и в другие группы тоже. 



Inheritance describes an "IS A" relationship. For example, a Dog IS A Animal. Such a relationship can be easily expressed using inheritance, where Animal would be the parent class, and Dog would be the child class.

However, not all relationships can be described in this way. For instance, a printer is definitely related to a computer, but it is not a computer. Legs are somehow related to a person, but they are not a person.

In these cases, the basis of the relationship is a different type: "HAS A" or "IS PART OF." A hand is not a person but is a part of a person. A computer does not consist of a printer, but a computer has a printer.

Relationships of HAS A can be described in code using the mechanisms of composition and aggregation. The difference between them lies in the "strictness" of these relationships.

Aggregation and composition are specific cases of association, which are more specific relationships between objects.

**Aggregation** is a relationship when one object is part of another. For example, a Student is part of a Physics Enthusiast Group, or a Bus has a Driver.

**Composition** is a more "rigid" relationship where an object not only is a part of another object but also cannot belong to anyone else. This is when the engine doesn't exist separately from the car. The engine is created when the car is created and is entirely controlled by the car. In a typical example, an instance of the engine will be created in the car's constructor. Unlike a student, who can belong to other groups as well.
