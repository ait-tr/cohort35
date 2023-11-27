package homework55;
/*
@date 26.11.2023
@author Sergey Bugaienko
*/

/*
Дан список сотрудников (Employee) с полями name, department, salary.
Используя Stream API, сгруппируйте сотрудников по отделам
 */

import streamsExample.Employee;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class Task1 {
    public static void main(String[] args) {
        List<Employee> employees = new ArrayList<>();

        Map<String, List<Employee>> employeeByDepartments = employees.stream()
                .collect(Collectors.groupingBy(Employee::getDepartment));
    }
}
