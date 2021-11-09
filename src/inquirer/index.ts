import inquirer, {Answers, Question} from "inquirer";

export const promptMainMenu = async (question: Answers) => {
    return await inquirer
    .prompt(question)
    .then((data) => data)
    .catch((error) => error);
}

export const promptNotImplemented = async () => {
    const question: Answers = {
        name: "notImp",
        message: "Option not implemented",
        default: "Press enter to continue"
    };
    await inquirer.prompt(question);
}