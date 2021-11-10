import { Connection } from "mysql2";
import database from '../../database/query';
import inquirer, {QuestionCollection, ListQuestion, Answers, Question} from "inquirer";

/**
 * @Returns inquirer object of all employees roles
 */
export const promptAddEmployee = async (connection: Connection) => {
    // Get the employee Roles from our sql database
    const employeeRoles = await database.getALlEmployeeRoles(connection);

    // Create an Array to Store all roles added in our database
    let rolesArr: string[] = [];

    // Store all roles in rolesArr
    employeeRoles.forEach((item: any) => rolesArr.push(item.title));


    const firstNameQuestion: Question = {
        type: "input",
        name: "firstName",
        message: "Enter Employee First Name"
    }
    const lastNameQuestion: Question = {
        type: "input",
        name: "lastName",
        message: "Enter Employee Last Name"
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