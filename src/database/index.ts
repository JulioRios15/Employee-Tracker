import mysql, {Connection} from "mysql2";
import dbConfig from '../config/database'

import {addDepartment} from './insert/addDepartment';
import {AddEmployee} from './insert/addEmployee';
import {addEmployeeRole} from './insert/addEmployeeRole';

import {getAllDepartments} from './query/getAllDepartments';
import {getALlEmployeeRoles} from './query/getAllEmployeeRoles';
import {getALlEmployees} from './query/getAllEmployees';
import {getDepartmentByDepartmentName} from './query/getDepartmentByDepartmentName';
import {getEmployeesByDepartment} from './query/getEmployeesByDepartment';
import {getRoleIdByRoleTile} from './query/getRoleIdByRoleTile';



const createConnection = (): Connection => {
    return mysql.createConnection(dbConfig);
}

const getConnection = (): Connection => connection;

const endConnection =(): void => connection.end();

const connection: Connection = createConnection();

console.log('Create Database Connecton from database index');


const insert = {
    addDepartment,
    AddEmployee,
    addEmployeeRole
}

const query = {
    getAllDepartments,
    getALlEmployeeRoles,
    getALlEmployees,
    getDepartmentByDepartmentName,
    getEmployeesByDepartment,
    getRoleIdByRoleTile
}

export default {
    insert,
    query,
    createConnection,
    getConnection,
    endConnection
}