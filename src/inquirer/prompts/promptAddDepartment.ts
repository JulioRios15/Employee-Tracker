import { Connection } from "mysql2";
import database from '../../database/query';
import inquirer, {QuestionCollection, Answers, Question} from "inquirer";
import validate from '../config/validation';


/**
 * @INFO prompts a inquirer type input 
 * @Return inquirer answer object with name property "departmentName" 
 */
export const promptAddDepartment = async () => {


    const departmentNameQuestion: Question = {
        type: "input",
        name: "departmentName",
        message: "Enter Department Name",
        validate: validate.validateDepartmentExist
    } 


    const questions: QuestionCollection<Answers> = [
        departmentNameQuestion
    ];


    return await inquirer.prompt(questions)
    .then((data) => data)
    .catch(() => null);
    
}