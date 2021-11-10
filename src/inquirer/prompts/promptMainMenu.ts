import inquirer, { Answers } from "inquirer";
import {mainMenuQuestion} from '../config/mainMenuConfig';

export const promptMainMenu = async () => {
    return await inquirer
    .prompt(mainMenuQuestion)
    .then((data) => data)
    .catch((error) => error);
}