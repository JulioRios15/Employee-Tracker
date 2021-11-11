import { Connection } from "mysql2";
import database from '../../database';
import inquirer, {QuestionCollection, ListQuestion, Answers} from "inquirer";


/**
 * @INFO prompts a inquirer type list with all departments in database
 * @Return inquirer answer object with name property "departmentName" or 
 * null if no departments fetch
 */
export const promtpDepartments = async (connection: Connection) => {

    const departments: [] = await database.query.getAllDepartments(database.getConnection());

    if(departments.length == 0) return null; 

    let departmetsArray: string[] = [];

    departments.forEach((item: any) => {
        departmetsArray.push(item.department_name);      
    });

   if (departmetsArray.length == 0){
        console.log("No departments to show");
        return null;

   } 
    const departmentQuestion: ListQuestion = {
        type: 'list',
        name: 'departmentName',
        message: "Select Department",
        choices: departmetsArray
    } 

    return await inquirer.prompt(departmentQuestion)
    .then((data) => data)
    .catch(() => null);
}