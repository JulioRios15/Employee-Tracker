import { Connection } from "mysql2";
import database, {IJoinedEmployee} from '../../database';
import inquirer, {QuestionCollection, ListQuestion, Answers, ChoiceCollection} from "inquirer";

/**
 * 
 * @param connection database connection 
 * @returns IEmployee Interface of selected employee, or null if error or no employees
 * to show
 */
export const promptAllEmployees = async (connection: Connection) => {

    const employees: IJoinedEmployee[] = await database.query.getALlEmployees(connection);
    
    // if no employees found in db
    if(employees.length == 0) return null; 

    let employeeNamesArr: string[] = [];

    employees.forEach((item: IJoinedEmployee) => {
    
        const firstName = item.first_name;
        const lastName = item.last_name;
        const title = item.title;
        const choiceString = `${firstName} ${lastName} - ${title}`;

        employeeNamesArr.push(choiceString);      
    });


    const employeesQuestion: ListQuestion = {
        type: 'list',
        name: 'employeeName',
        message: "Employees",
        choices: employeeNamesArr,
    } 

    return await inquirer.prompt(employeesQuestion)
    .then((data: Answers): IJoinedEmployee => {
        const index = employeeNamesArr.indexOf(data.employeeName);
        const selectedEmployee: IJoinedEmployee = employees[index];

        return selectedEmployee;
        
    }) 
    .catch(() => null);
}