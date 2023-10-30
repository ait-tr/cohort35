package repository;
/*
@date 30.10.2023
@author Sergey Bugaienko
*/

import lib.MyArrayList;
import lib.MyList;
import model.Car;

import java.util.function.Predicate;

public class RepositoryCars {
    private final MyList<Car> cars;

    public RepositoryCars() {
        this.cars = new MyArrayList<>();
        init();
    }

    private void init() {
        cars.addAll(
                new Car("BMW", 2020, 40000),
                new Car("VW", 2021, 39000),
                new Car("Audi", 2022, 52000),
                new Car("Porsche", 2023, 100000)
        );
    }

    public MyList<Car> getCarsByPredicate(Predicate<Car> predicate) {
        MyList<Car> result = new MyArrayList<>();
        for (Car car : cars) {
            if (predicate.test(car)) {
                result.add(car);
            }
        }
        return result;
    }

    public void save(Car car) {
        cars.add(car);
    }

    public MyList<Car> getAllCars() {
        return cars;
    }


}
