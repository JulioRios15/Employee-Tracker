import inquirer, {QuestionCollection, Answers, ConfirmQuestion} from "inquirer";
import validation from "../config/validation";

export interface IConfirmAnswer{
    confirm: boolean
}
export const promptConfirm = async (message:string = "please enter y or n to continue") => {

    const confirmQuestion: ConfirmQuestion = {
        type: "confirm",
        name: "confirm",
        message: message,
        validate: validation.validateConfirm,
    }

    const questions: QuestionCollection<Answers> = [
        confirmQuestion
    ];

    return await inquirer.prompt(questions)
    .then((data) => data)
    .catch(() => null);
    
}