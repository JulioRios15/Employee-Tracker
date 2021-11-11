import { Connection } from "mysql2";

export const removeRole = async (connection: Connection, roleId: number) => {
    const data = await connection.promise()
    .query(`
            DELETE FROM employee_role WHERE employee_role.id = ${roleId}; 
    `)
    .then(([rows, fields]) => rows)
    .catch((error) => error);
    
    return data;
}