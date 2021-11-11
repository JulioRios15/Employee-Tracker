import { Connection } from "mysql2";
import database, {IEmployeeRole} from '../../database';
import inquirer, {QuestionCollection, ListQuestion, Answers, ChoiceCollection} from "inquirer";

/**
 * 
 * @param connection database connection
 * @INFO prompts a list of all employees roles added in database 
 * @returns IEmployeeRole Interface , or null if error or no employee roles
 * to show
 */
export const promptAllEmployeeRoles = async (connection: Connection) => {
    const employeeRoles: IEmployeeRole[] = await database.query.getALlEmployeeRoles(connection);

    if(employeeRoles.length == 0) return null;

    const rolesTitles: string[] = [];

    employeeRoles.forEach((item: IEmployeeRole) => {
        rolesTitles.push(item.title);
    });

    const rolesQuestion: ListQuestion = {
        type: "list",
        name: "roleTitle",
        message: "Employee Roles",
        choices: rolesTitles, 
    };

    return inquirer.prompt(rolesQuestion)
    .then((data)=> {
        const index = rolesTitles.indexOf(data.roleTitle);
        const selectedRole: IEmployeeRole = employeeRoles[index];
        return selectedRole;
    })
    .catch(() => null);


}