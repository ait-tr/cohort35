package interfaces;
/*
@date 30.10.2023
@author Sergey Bugaienko
*/

import model.Car;

public interface InterfaceServiceCars<T extends Car> {

    /*
    добавить новый автомобиль
    */

    T addCar(String model, int year, double price);

}
