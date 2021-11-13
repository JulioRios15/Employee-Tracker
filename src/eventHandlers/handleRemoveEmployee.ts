import {Connection} from 'mysql2';
import inquirerPrompts from '../inquirer/prompts';
import database, {IEmployee} from '../database';
import {promptConfirm, IConfirmAnswer} from '../inquirer/prompts/promptConfirm';

export const handleRemoveEmployee = async (connection: Connection)  => {
    
    let removeMoreEmployees: IConfirmAnswer = {"confirm": true};

    while (removeMoreEmployees.confirm) {

        //Prompts a list of all employees
        const employeeData:IEmployee = await inquirerPrompts.promptAllEmployees(connection);
    
        // return if no employees to show
        if(!employeeData) return console.log("---------No employees to show---------");
        
        //Remove employee and log employee removed
        await database.remove.removeEmployee(connection, employeeData.id);
        console.log(`${employeeData.first_name} ${employeeData.last_name} has been removed`);

        //Ask the user to remove another employee
        removeMoreEmployees = await promptConfirm("Do you want to remove another employee?")  
    }

}