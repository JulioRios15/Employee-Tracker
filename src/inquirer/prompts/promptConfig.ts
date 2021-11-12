import inquirer, {QuestionCollection, Answers, Question} from "inquirer";
import validate from '../config/validation';

export interface IConfigAnswers{
    databaseName: string;
    password: string;
}
export const promptConfig = async () => {


    const databaseNameQuestion: Question = {
        type: "input",
        name: "databaseName",
        message: "Enter Database Name",
    }

    const passwordQuestion: Question = {
        type: "password",
        name: "password",
        message: "Enter password for root user",
    }


    const questions: QuestionCollection<Answers> = [
        databaseNameQuestion,
        passwordQuestion
    ];


    return await inquirer.prompt(questions)
    .then((data) => data)
    .catch(() => null);
    
}