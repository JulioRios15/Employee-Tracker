import { Connection } from "mysql2";
import inquirerPrompts from '../inquirer/prompts';
import {promptConfirm, IConfirmAnswer} from '../inquirer/prompts/promptConfirm';
import database from '../database';



export const handleAddDepartment = async (connection: Connection) => {
    
    let addMoreDepartments: IConfirmAnswer = {"confirm": true};

    while (addMoreDepartments.confirm) {
        const departmentData = await inquirerPrompts.promptAddDepartment();
        const departmentName = departmentData.departmentName;
    
        await database.insert.addDepartment(connection, departmentName);

        addMoreDepartments = await promptConfirm("Do you want to add another department?")
    }
 
}