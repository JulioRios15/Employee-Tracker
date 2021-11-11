import {Validator} from "inquirer";
import mysql from 'mysql2';
import dbConfig from '../../config/database';
import database from '../../database';

const validateNotEmpty: Validator = async (input: string) => {
    const message = "Value cant be empty";
    return (input === "")? message : true;
}

const validateDepartmentExist: Validator = async (input: string) => {

    if(input === "") return "Value cant be empty";

    const departments: [] = await database.query.getDepartmentByDepartmentName(database.getConnection(), input);
    const message = "Department exists";

    return (departments.length == 0)? true : message;
}

export default {
    validateNotEmpty,
    validateDepartmentExist
}