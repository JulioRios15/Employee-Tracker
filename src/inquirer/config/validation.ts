import {Validator} from "inquirer";

const validateNotEmpty: Validator = (input: string) => {
    const message = "Value cant be empty";
    return (input === "")? message : true;
}

export default {
    validateNotEmpty
}