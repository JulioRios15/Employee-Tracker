import {Question, ListQuestion} from 'inquirer';


const mainMenuChoices: string[] = [
    "View All Employee", 
    "View All Employees By Department",
    "View All Employees By Manager",
    "Add Employee",
    "Remove Employee",
    "Update Employee",
    "Update Employee Role",
    "Update Employee Manager",
    "Close Application"
];

const mainMenuQuestion: ListQuestion = {
    type:"list",
    name: "menuOption",
    message: "Main Menu - What would you like to do?",
    choices: mainMenuChoices, 
};

export default {
    mainMenuQuestion,
    mainMenuChoices
}