import {Connection} from "mysql2";
import database from '../database/query';
import {promtpDepartments} from '../inquirer/prompts/promptDepartments';

export const handleUtilizedBudget = async (connection:Connection) => {

    //fetch departments in database
    const departmentData = await promtpDepartments(connection);

    // if no departments added to database log
    if(departmentData == null) return console.log("No Departments to Show Utilization");

    const departmentName = departmentData.departmentName;
    const employeesByDept: any[] = await database.getEmployeesByDepartment(connection, departmentName); 

    // if no employees added to department X log something
    if(employeesByDept.length == 0) return console.log(`No Employees Added to the ${departmentName} Department`);

    var budgetUtilization: number = 0;
    
    employeesByDept.forEach((item: any) => {
        const employeeSalary: number = parseInt(item.salary);
        budgetUtilization += employeeSalary;
    });
    
    console.log(`${departmentName} has a total of ${budgetUtilization} in budget utilization`);
    
}