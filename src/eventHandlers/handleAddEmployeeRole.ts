import { Connection } from "mysql2";
import inquirerPrompts from '../inquirer/prompts';
import database from '../database';



export const handleAddEmployeeRole = async (connection: Connection) => {
    const departmentsData = await inquirerPrompts.promtpDepartments(connection, "To which department your want to add new role")
    const rolesData = await inquirerPrompts.promptAddEmployeeRole(connection);

    if(!departmentsData && !rolesData) return console.log("unable to add role");

    const roleTitle = rolesData.roleTitle;
    const salary = rolesData.salary;
    const departmentId = departmentsData.id;

    await database.insert.addEmployeeRole(connection, roleTitle, salary, departmentId); 
    const message = `${roleTitle} added to ${departmentsData.department_name} department`;
    console.log(message);
    
}