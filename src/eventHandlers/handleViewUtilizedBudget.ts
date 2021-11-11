import {Connection} from "mysql2";
import cTable from "console.table";
import database from '../database';
import {promtpDepartments} from '../inquirer/prompts/promptDepartments';

export const handleViewUtilizedBudget = async (connection:Connection) => {

    //fetch departments in database
    const departmentData = await promtpDepartments(connection);

    // if no departments added to database log
    if(departmentData == null) return console.log("No Departments to Show Utilization");

    const departmentName = departmentData.departmentName;
    const employeesByDept: any[] = await database.query.getEmployeesByDepartment(connection, departmentName); 

    // if no employees added to department X log something
    if(employeesByDept.length == 0) return console.log(`No Employees Added to the ${departmentName} Department`);

    // variable to store department budget utilization
    var budgetUtilization: number = 0;
    
    // for each employee add salary to budgetUtilization
    employeesByDept.forEach((item: any) => {
        const employeeSalary: number = parseInt(item.salary);
        budgetUtilization += employeeSalary;
    });

    //Create the final utilization table
    const utilizationTable = cTable.getTable(...[employeesByDept], ...[{"Department Budget Utilization": budgetUtilization}]);   
    console.log(utilizationTable);   
}