import {Connection} from 'mysql2';
import {promtpDepartments} from '../inquirer/prompts/promptDepartments'
import database from '../database/query';
import cTable from "console.table";



export const handleGetEmployeesByDepartment = async (connection: Connection) => {

    //fetch departments in database
    const departmentData = await promtpDepartments(connection);

    // if no departments added to database log
    if(departmentData == null) return console.log("No Departments to Show");

    const departmentName = departmentData.departmentName;
    const employeesByDept: [] = await database.getEmployeesByDepartment(connection, departmentName); 

    // if no employees added to department X log something
    if(employeesByDept.length == 0) return console.log(`No Employees Added to the ${departmentName} Department`);
  
    // Log table from the fetched employees by department X 
    const employeeTable = cTable.getTable(employeesByDept)              
    console.log(employeeTable);   
       
}