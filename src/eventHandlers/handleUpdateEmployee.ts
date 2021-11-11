import {Connection} from 'mysql2'
import database, {IJoinedEmployee, IEmployeeRole} from '../database';
import inquirerPrompts from '../inquirer/prompts';

export const handleUpdateEmployee = async (connection: Connection)  => {
 
    const employeeData: IJoinedEmployee = await inquirerPrompts.promptAllEmployees(connection);
    const employeeRoleData: IEmployeeRole = await inquirerPrompts.promptAllEmployeeRoles(connection);

    console.log(employeeData);
    console.log(employeeRoleData);
    

    
    await database.update.updateEmployee(
        connection, 
        employeeData.id, 
        employeeData.first_name, 
        employeeData.last_name,
        employeeRoleData.id,
        employeeData.manager_id
    );
    
} 
