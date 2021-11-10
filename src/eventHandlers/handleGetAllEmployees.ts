import cTable from 'console.table';
import {Connection} from 'mysql2'
import {getALlEmployees} from '../database/query/getAllEmployees';

export const handleGetAllEmployees = async (connection: Connection)  => {
    const employees = await getALlEmployees(connection);
    const employeeTable = cTable.getTable(employees)              
    console.log(employeeTable);   
} 
