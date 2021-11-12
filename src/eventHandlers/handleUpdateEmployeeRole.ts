import {Connection} from 'mysql2';
import cTable from "console.table";
import database, {IJoinedEmployee, IEmployeeRole} from '../database';
import inquirerPrompts from '../inquirer/prompts';

export const handleUpdateEmployeeRole = async (connection: Connection)  => {
 
    const employeeData: IJoinedEmployee = await inquirerPrompts.promptAllEmployees(connection);
    if(employeeData == null) return console.log("---------No employees to show---------");
    
    const employeeRoleData: IEmployeeRole = await inquirerPrompts.promptAllEmployeeRoles(connection, "New employee new role");
    if(employeeRoleData == null) return console.log("---------No Roles Added---------");
    
    
    await database.update.updateEmployee(
        connection, 
        employeeData.id, 
        employeeData.first_name, 
        employeeData.last_name,
        employeeRoleData.id,
        employeeData.manager_id
    );

    const updatedEmployee = await database.query.getEmployeeById(connection, employeeData.id);
    const newEmployeeTable = cTable.getTable(updatedEmployee);

    console.log(`${employeeData.first_name} ${employeeData.last_name} has been updated`); 
    console.log(newEmployeeTable); 
} 