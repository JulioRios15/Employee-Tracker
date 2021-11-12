import {Connection} from 'mysql2';
import inquirerPrompts from '../inquirer/prompts';
import database, {IEmployee} from '../database';

export const handleRemoveEmployee = async (connection: Connection)  => {

    const employeeData:IEmployee = await inquirerPrompts.promptAllEmployees(connection);
    
    // return if no employees to show
    if(!employeeData) return console.log("No employees to show");
    
    await database.remove.removeEmployee(connection, employeeData.id);
    console.log(`${employeeData.first_name} ${employeeData.last_name} has been removed`);
}