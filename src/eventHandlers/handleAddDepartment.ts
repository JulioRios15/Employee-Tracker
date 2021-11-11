import { Connection } from "mysql2";
import inquirerPrompts from '../inquirer/prompts';
import database from '../database';



export const handleAddDepartment = async (connection: Connection) => {
    
    const departmentData = await inquirerPrompts.promptAddDepartment();
    const departmentName = departmentData.departmentName;

    await database.insert.addDepartment(connection, departmentName);   
}