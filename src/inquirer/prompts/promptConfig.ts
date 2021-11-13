import inquirer, {QuestionCollection, Answers, Question} from "inquirer";
import validate from '../config/validation';

export interface IConfigAnswers{
    host: string,
    user: string;
    password: string;
    databaseName: string;
}
export const promptConfig = async () => {

    const hostQuestion: Question = {
        type: "input",
        name: "host",
        message: "Enter mysql host",
        default: "localhost",
        validate: validate.validateNotEmpty
    }

    const userQuestion: Question = {
        type: "input",
        name: "user",
        message: "Enter mysql server user",
        default: "root",
        validate: validate.validateNotEmpty
    }
    

    const passwordQuestion: Question = {
        type: "password",
        name: "password",
        message: "Enter password for mysql user",
        validate: validate.validateNotEmpty
    }

    const databaseNameQuestion: Question = {
        type: "input",
        name: "databaseName",
        message: "Enter Database Name",
        validate: validate.validateNotEmpty
    }


    const questions: QuestionCollection<Answers> = [
        hostQuestion,
        userQuestion,
        passwordQuestion,
        databaseNameQuestion
    ];


    return await inquirer.prompt(questions)
    .then((data) => data)
    .catch(() => null);
    
}