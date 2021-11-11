import mysql, {Connection, ConnectionOptions} from "mysql2";
import dbConfig from '../config/database'

import {addDepartment} from './insert/addDepartment';
import {AddEmployee} from './insert/addEmployee';
import {addEmployeeRole} from './insert/addEmployeeRole';

import {updateEmployee} from './update/updateEmployee';

import {getAllDepartments} from './query/getAllDepartments';
import {getALlEmployeeRoles} from './query/getAllEmployeeRoles';
import {getALlEmployees} from './query/getAllEmployees';
import {getEmployeeById} from './query/getEmployeeById';
import {getALlEmployeesJoined} from './query/getAllEmployeesJoined';
import {getDepartmentByDepartmentName} from './query/getDepartmentByDepartmentName';
import {getEmployeesByDepartment} from './query/getEmployeesByDepartment';
import {getRoleIdByRoleTile} from './query/getRoleIdByRoleTile';



const createConnection = (config: ConnectionOptions): Connection => {
    return connection = mysql.createConnection(config);
}

const getConnection = (): Connection => connection;

const endConnection =(): void => connection.end();

let connection: Connection = null;

console.log('Create Database Connecton from database index');


export interface IEmployee {
    id: number;
    first_name: string;
    last_name: string;
    role_id: number;
    manager_id?: number;
}

export interface IEmployeeRole {
    id: number;
    title: string;
    salary: number;
    department_id: number;
}

export interface IDepartment {
    id: number,
    department_name: string
}

export interface IJoinedEmployee extends IEmployee {
    title?: string;
    department?: string;
}


const insert = {
    addDepartment,
    AddEmployee,
    addEmployeeRole
}

const query = {
    getAllDepartments,
    getALlEmployeeRoles,
    getALlEmployees,
    getEmployeeById,
    getALlEmployeesJoined,
    getDepartmentByDepartmentName,
    getEmployeesByDepartment,
    getRoleIdByRoleTile
}

const update = {
    updateEmployee
}

export default {
    insert,
    update,
    query,
    createConnection,
    getConnection,
    endConnection
}