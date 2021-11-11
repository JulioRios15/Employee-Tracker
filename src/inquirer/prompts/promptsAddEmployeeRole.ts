import { Connection } from "mysql2";
import database from '../../database';
import inquirer, {QuestionCollection, ListQuestion, Answers, Question} from "inquirer";
import validate from '../config/validation';

/**
 * @Returns inquirer object or null if no employee roles added to database
 */
export const promptAddEmployeeRole = async (connection: Connection) => {
    // Get the employee Roles from our sql database
    const employeeRoles: [] = await database.query.getALlEmployeeRoles(connection);

    //Return null if no employee roles added to the database
    if(employeeRoles.length == 0) return null;

    // Create an Array to Store all roles added in our database
    let rolesArr: string[] = [];

    // Store all roles in rolesArr
    employeeRoles.forEach((item: any) => rolesArr.push(item.title));


    const roleTitleQuestion: Question = {
        type: "input",
        name: "roleTitle",
        message: "Enter Role Title",
        validate: validate.validateNotEmpty
    }
    const salaryQuestion: Question = {
        type: "input",
        name: "salary",
        message: "Enter Role Salary",
        validate: validate.validateNumber
    }

    // Define out prompt questions
    const questions: QuestionCollection<Answers> = [
        roleTitleQuestion,
        salaryQuestion
    ]

    
    return await inquirer.prompt(questions)
    .then((data) => data)
    .catch(() => null);
}