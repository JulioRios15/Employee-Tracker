import {Validator} from "inquirer";
import database from '../../database';

const validateNotEmpty: Validator = async (input: string) => {
    const message = "Value cant be empty";
    return (input === "")? message : true;
}

const validateDepartmentExist = async (input: string) => {

    //TODO: Search in database if input exist
    const message = "Value cant be empty";
    return (input === "")? message : true;
}

export default {
    validateNotEmpty,
    validateDepartmentExist
}