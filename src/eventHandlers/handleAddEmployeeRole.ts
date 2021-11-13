import { Connection } from "mysql2";
import inquirerPrompts from '../inquirer/prompts';
import {promptConfirm, IConfirmAnswer} from '../inquirer/prompts/promptConfirm';
import database from '../database';



export const handleAddEmployeeRole = async (connection: Connection) => {

    let addMoreEmployeeRoles: IConfirmAnswer = {"confirm": true};

    while (addMoreEmployeeRoles.confirm) {

        //Prompt departments or log if no departments added
        const departmentsData = await inquirerPrompts.promtpDepartments(connection, "To which department your want to add new role")
        if(departmentsData == null) return console.log("--------No Departments to add roles---------");
        
        //Prompt add new roles questions
        const rolesData = await inquirerPrompts.promptAddEmployeeRole(connection);  
        if(rolesData == null) return console.log("---------unable to add role---------");
        
        //extract role data from iquirer questions
        const roleTitle = rolesData.roleTitle;
        const salary = rolesData.salary;
        const departmentId = departmentsData.id;
        
        // add new employee role to database and log the new role
        await database.insert.addEmployeeRole(connection, roleTitle, salary, departmentId); 
        const message = `${roleTitle} added to ${departmentsData.department_name} department`;
        console.log(message);
     
        // Ask the user to add more roles
        addMoreEmployeeRoles = await promptConfirm("Do you want to add another employee Role");
    }


    
}