import cTable from 'console.table';
import {Connection} from 'mysql2'
import database from '../database';

export const handleViewAllEmployees = async (connection: Connection)  => {
    const employees = await database.query.getALlEmployeesJoined(connection);
    const employeeTable = cTable.getTable(employees)              
    console.log(employeeTable);   
} 
