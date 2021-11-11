import { Connection } from "mysql2";

export const removeEmployee = async (connection: Connection, employeeId: number) => {
    const data = await connection.promise()
    .query(`
            DELETE FROM employee WHERE employee.id = ${employeeId}; 
    `)
    .then(([rows, fields]) => rows)
    .catch((error) => error);
    
    return data;
}