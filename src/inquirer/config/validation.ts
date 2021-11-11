import {Validator} from "inquirer";
import database from '../../database';

const validateNotEmpty: Validator = async (input: string) => {
    const message = "Value cant be empty";
    return (input === "")? message : true;
}

const validateDepartmentExist: Validator = async (input: string) => {

    //TODO: Search in database if input exist
    const message = "Value cant be empty";
    return (input === "")? message : true;
}

const validateNumber: Validator = async (input: string) => {

    if(input === "") return "Value cant be empty";

    return (!parseInt(input))? "Please enter a numeric value" : true;
}

export default {
    validateNotEmpty,
    validateDepartmentExist,
    validateNumber
}