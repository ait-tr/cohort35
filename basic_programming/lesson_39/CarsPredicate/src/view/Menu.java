package view;
/*
@date 30.10.2023
@author Sergey Bugaienko
*/

import service.ServiceCars;

public class Menu {
    private final ServiceCars serviceCars;

    public Menu() {
        this.serviceCars = new ServiceCars();
    }

    public void run() {
        System.out.println("Start");

        while (true){
            showMenu();
        }
    }

    private void showMenu() {
        System.out.println("1. Список всех книг");
        System.out.println("0. Выход");
    }
}
