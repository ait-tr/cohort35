/*
@date 27.09.2023
@author Sergey Bugaienko
*/

public class MainDog {
    public static void main(String[] args) {

        Dog20 dog = new Dog20("Bim", 5);
        System.out.println(dog.whoAmI());

        dog.run();
        dog.run();
        dog.run();
        dog.run();
        dog.run();
        dog.run();

        System.out.println(dog.whoAmI());
    }
}
