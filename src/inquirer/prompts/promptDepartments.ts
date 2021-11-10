import { Connection } from "mysql2";
import database from '../../database/query';
import inquirer, {QuestionCollection, ListQuestion, Answers} from "inquirer";

export const promtpDepartments = async (connection: Connection) => {

    const departments: [] = await database.getAllDepartments(connection);

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