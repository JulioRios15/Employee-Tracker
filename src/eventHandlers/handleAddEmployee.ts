import cTable from 'console.table';
import {Connection, RowDataPacket} from 'mysql2'
import database from '../database/query';
import {AddEmployee} from '../database/insert/addEmployee'
import {promptAddEmployee} from '../inquirer/prompts/promptAddEmployee';

export const handleAddEmployee = async (connection: Connection)  => {
    

    const addEmployeePromptData = await promptAddEmployee(connection);
    
    const firstName = addEmployeePromptData.firstName;
    const lastName = addEmployeePromptData.lastName;
    const employeeRole = addEmployeePromptData.employeeRole;

    const roleId: number = await database.getRoleIdByRoleTile(connection, employeeRole);

    const newEmployee = await AddEmployee(connection,firstName, lastName, roleId);

    console.log("new Employee Added",newEmployee.affectedRows);
    


    
      
}