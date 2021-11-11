import {ListQuestion} from 'inquirer';

export enum MenuOptions {
    ViewAllEmployees = "View All Employees", 
    ViewEmployeeByDepartment = "View All Employees By Department",
    ViewEmployeeByManager = "View All Employees By Manager",
    ViewUtilizedBudget = "View Utilized Budget by Department",  
    AddDepartment = "Add Department",
    AddEmployeeRole = "Add Employee Role",
    AddEmployee = "Add Employee",
    RemoveEmployee = "Remove Employee",
    UpdateEmployee = "Update Employee",
    UpdateEmployeeRole = "Update Employee Role",
    UpdateEmployeeManager = "Update Employee Manager", 
    CloseApplication = "Close Application"
}

export const mainMenuQuestion: ListQuestion = {
    type:"list",
    name: "menuOption",
    message: "Main Menu - What would you like to do?",
    choices: Object.values(MenuOptions), 
};