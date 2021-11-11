import { Connection } from "mysql2";
import database, {IDepartment} from '../../database';
import inquirer, {QuestionCollection, ListQuestion, Answers} from "inquirer";


/**
 * @INFO prompts a inquirer type list with all departments in database
 * @Return inquirer answer object with name property "departmentName" or 
 * null if no departments fetch
 */
export const promtpDepartments = async (connection: Connection, message: string = "Select Department") => {

    const departments:IDepartment [] = await database.query.getAllDepartments(connection);
    

    if(departments.length == 0) return null; 

    let departmetsNamesArray: string[] = [];

    departments.forEach((item: any) => {
        departmetsNamesArray.push(item.department_name);      
    });

   if (departmetsNamesArray.length == 0){
        console.log("No departments to show");
        return null;

   } 
    const departmentQuestion: ListQuestion = {
        type: 'list',
        name: 'departmentName',
        message: message,
        choices: departmetsNamesArray
    } 

    return await inquirer.prompt(departmentQuestion)
    .then((data: Answers): IDepartment => {
        const index = departmetsNamesArray.indexOf(data.departmentName);
        const selectedDepartment:IDepartment = departments[index];     
        
        return selectedDepartment
    })
    .catch((): undefined => null);
}