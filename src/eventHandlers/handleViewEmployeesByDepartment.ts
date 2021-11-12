import {Connection} from 'mysql2';
import {promtpDepartments} from '../inquirer/prompts/promptDepartments'
import database, {IDepartment} from '../database';
import cTable from "console.table";



export const handleViewEmployeesByDepartment = async (connection: Connection) => {

    //fetch departments in database
    const departmentData:IDepartment = await promtpDepartments(connection);

    // if no departments added to database log
    if(departmentData == null) return console.log("---------No departments to show---------");

    const departmentName = departmentData.department_name;
    const employeesByDept: [] = await database.query.getEmployeesByDepartment(connection, departmentName); 

    // if no employees added to department X log something
    if(employeesByDept.length == 0) return console.log(`---------No employees added to the ${departmentData.department_name} department---------`);
  
    // Log table from the fetched employees by department X 
    const employeeTable = cTable.getTable(employeesByDept)              
    console.log(employeeTable);   
       
}