import mysql, {Connection, ConnectionOptions} from "mysql2";

//Insert imports
import {addDepartment} from './insert/addDepartment';
import {AddEmployee} from './insert/addEmployee';
import {addEmployeeRole} from './insert/addEmployeeRole';

//Update imports
import {updateEmployee} from './update/updateEmployee';

//Remove imports
import {removeDepartment} from './remove/removeDepartment';
import {removeRole} from './remove/removeEmployeeRole';
import {removeEmployee} from './remove/removeEmployee';

//Query imports
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

const remove = {
    removeEmployee,
    removeDepartment,
    removeRole
}

export default {
    insert,
    query,
    update,
    remove,
    createConnection,
    getConnection,
    endConnection
}