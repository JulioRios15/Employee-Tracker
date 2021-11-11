import {Connection} from 'mysql2'
import database, {IJoinedEmployee} from '../database';
import inquirerPrompts from '../inquirer/prompts';

export const handleUpdateEmployee = async (connection: Connection)  => {
 
    const employeesPromptsData: IJoinedEmployee = await inquirerPrompts.promptAllEmployees(connection);

    
    
    
} 
