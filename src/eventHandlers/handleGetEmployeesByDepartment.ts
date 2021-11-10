import {Connection} from 'mysql2';
import {promtpDepartments} from '../inquirer/prompts/promptDepartments'
import database from '../database/query';
import cTable from "console.table";



export const handleGetEmployeesByDepartment = async (connection: Connection) => {

    const departmentData = await promtpDepartments(connection)
    .then((data)=> data)
    .catch((err) => err);

    const departmentName = departmentData.departmentName;
    const employeesByDept: [] = await database.getEmployeesByDepartment(connection, departmentName); 
    const employeeTable = cTable.getTable(employeesByDept)              
    console.log(employeeTable);   
       
}