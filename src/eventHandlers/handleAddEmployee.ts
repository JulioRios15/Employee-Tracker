import cTable from 'console.table';
import {Connection, RowDataPacket} from 'mysql2'
import database from '../database';
import {AddEmployee} from '../database/insert/addEmployee'
import {promptAddEmployee} from '../inquirer/prompts/promptAddEmployee';

export const handleAddEmployee = async (connection: Connection)  => {

    const addEmployeePromptData = await promptAddEmployee(connection);

    if(addEmployeePromptData == null) {
        return console.log("No Roles Added to database");     
    }
    
    const firstName = addEmployeePromptData.firstName;
    const lastName = addEmployeePromptData.lastName;
    const employeeRole = addEmployeePromptData.employeeRole;

    const roleId: number = await database.query.getRoleIdByRoleTile(connection, employeeRole);

    await AddEmployee(connection,firstName, lastName, roleId);    
}