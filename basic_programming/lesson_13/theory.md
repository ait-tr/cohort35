## Методы
**Методы** в Java — это законченная последовательность действий (инструкций), направленных на решение отдельной задачи

```
[модификаторы] типВозвращаемогоЗначения   названиеМетода ([параметры]){
    // тело метода
}
```
_Модификаторы и параметры необязательны_

## Methods
**Методы** в Java — это законченная последовательность действий (инструкций), направленных на решение отдельной задачи

**Methods** in Java are a complete sequence of actions (instructions) aimed at solving a specific task.

```
[modifiers] returnType methodName ([parameters]) {
    // method body
}
```
_Modifiers and parameters are optional_

- Каждый java-метод должен быть внутри класса 
- Статические методы принадлежат классу, а не статические методы принадлежат объектам, экземплярам класса 
- В пределах одного класса может быть два и более метода с одинаковыми именами, но разным набором параметров (**перегрузка метода**)


- Every Java method must be inside a class.
- Static methods belong to the class, while non-static methods belong to objects, instances of the class.
- Within the same class, there can be two or more methods with the same name but a different set of parameters (**method overloading**).



**Сигнатура** метода - совокупность имени метода с набором параметров. Причем возвращаемое значение не входит в сигнатуру, а порядок следования параметров - входит

The **signature** of a method is the combination of its name and the set of parameters. The return value is not part of the signature, but the order of parameters is included.

```
    void myMethod(){
        System.out.println("I am a simple method");
    }
```
Пример метода без модификаторов (вернее сказать с модификаторами по умолчанию) и без параметров.\
Here's an example of a method without modifiers (or rather, with default modifiers) and without parameters.


