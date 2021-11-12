import cTable from 'console.table';
import {Connection} from 'mysql2'
import database, {IJoinedEmployee} from '../database';

export const handleViewAllEmployees = async (connection: Connection)  => {
    const employees: IJoinedEmployee[] = await database.query.getALlEmployeesJoined(connection);

    if(employees.length == 0) return console.log("no employees to show");
    
    const employeeTable = cTable.getTable(employees)              
    console.log(employeeTable);   
} 
