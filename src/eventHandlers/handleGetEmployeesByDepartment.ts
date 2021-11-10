import {Connection} from 'mysql2'
import {getAllDepartments} from '../database/query/getAllDepartments';

export const handleGetEmployeesByDepartment = async (connection: Connection) => {
    const departments = await getAllDepartments(connection);

    
}