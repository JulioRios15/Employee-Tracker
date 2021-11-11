import { Connection } from "mysql2";
import database from '../../database';
import inquirer, {QuestionCollection, ListQuestion, Answers} from "inquirer";


export const promptAllEmployees = async (connection: Connection) => {

    const employees: [] = await database.query.getALlEmployeesJoined(connection);

    console.log("all emp",employees);
    

    if(employees.length == 0) return null; 

    let employeeNamesArr: string[] = [];

    employees.forEach((item: any) => {
        const firstName = item.first_name;
        const lastName = item.last_name;
        const title = item.title;
        const choiceString = `${firstName} ${lastName} - ${title}`;

        employeeNamesArr.push(choiceString);      
    });

   if (employeeNamesArr.length == 0){
        console.log("No employees to show");
        return null;

   } 
    const employeesQuestion: ListQuestion = {
        type: 'list',
        name: 'employeeName',
        message: "Employees",
        choices: employeeNamesArr,
    } 

    return await inquirer.prompt(employeesQuestion)
    .then((data: Answers) => data)
    .catch(() => null);
}