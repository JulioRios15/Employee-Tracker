import {Connection} from 'mysql2'
import database from '../database';
import inquirerPrompts from '../inquirer/prompts';

export const handleUpdateEmployee = async (connection: Connection)  => {
 
    const employeesPromptsData = await inquirerPrompts.promptAllEmployees(connection);
    console.log("employeesPromptsData", employeesPromptsData);
    
} 
