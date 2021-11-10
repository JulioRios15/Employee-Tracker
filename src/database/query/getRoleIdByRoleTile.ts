import { Connection, RowDataPacket } from "mysql2";


export const getRoleIdByRoleTile = async (connection: Connection, roleTitle: string) => {
    
    const data = await connection.promise()
    .query(`
        SELECT employee_role.id 
        From employee_role
        WHERE employee_role.title = "${roleTitle}";
    `)
    .then(([rows, fields]) => rows[0].id)
    .catch((error) => error);

    return data;
}