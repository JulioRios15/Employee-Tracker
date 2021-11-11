import { Connection } from "mysql2";

export const removeDepartment = async (connection: Connection, departmentId: number) => {
    const data = await connection.promise()
    .query(`
            DELETE FROM department WHERE department.id = ${departmentId}; 
    `)
    .then(([rows, fields]) => rows)
    .catch((error) => error);
    
    return data;
}