import { Connection } from "mysql2";

export const AddEmployee = async (connection: Connection, firstName: string, lastName: string, roleId: number) => {
    const data = await connection.promise()
    .query(`
    INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES  ("${firstName}", "${lastName}", ${roleId}, null); 
`
    )
    .then(([rows, fields]) => rows)
    .catch((error) => error);
    
    return data;
}