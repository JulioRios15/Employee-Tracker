import { Connection } from "mysql2";

export const getAllDepartments = async (connection: Connection) => {
    const data = await connection.promise()
    .query(`
        SELECT  department.id,
                department.department_name
                FROM 
                    department; 
`
    )
    .then(([rows, fields]) => rows)
    .catch((error) => error);
    
    return data;
}
