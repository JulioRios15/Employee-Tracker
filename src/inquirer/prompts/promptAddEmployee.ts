import { Connection } from "mysql2";
import database from '../../database/query';
import inquirer, {QuestionCollection, ListQuestion, Answers, Question} from "inquirer";
import validate from '../config/validation';

/**
 * @Returns inquirer object or null if no employee roles added to database
 */
export const promptAddEmployee = async (connection: Connection) => {
    // Get the employee Roles from our sql database
    const employeeRoles: [] = await database.getALlEmployeeRoles(connection);

    //Return null if no employee roles added to the database
    if(employeeRoles.length == 0) return null;

    // Create an Array to Store all roles added in our database
    let rolesArr: string[] = [];

    // Store all roles in rolesArr
    employeeRoles.forEach((item: any) => rolesArr.push(item.title));


    const firstNameQuestion: Question = {
        type: "input",
        name: "firstName",
        message: "Enter Employee First Name",
        validate: validate.validateNotEmpty
    }
    const lastNameQuestion: Question = {
        type: "input",
        name: "lastName",
        message: "Enter Employee Last Name",
        validate: validate.validateNotEmpty
    }

    const employeeRolesQuestion: ListQuestion = {
        type: "list",
        name: "employeeRole",
        message: "Select Employee Role",
        choices: rolesArr
        
    }

    // Define out prompt questions
    const questions: QuestionCollection<Answers> = [
        firstNameQuestion,
        lastNameQuestion,
        employeeRolesQuestion
    ]

    
    return await inquirer.prompt(questions)
    .then((data) => data)
    .catch(() => null);
}