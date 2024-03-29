import { Connection } from "mysql2";


export const getALlEmployeeRoles = async (connection: Connection) => {
    
    const data = await connection.promise()
    .query(`
                SELECT  employee_role.id,
                        employee_role.title,
                        employee_role.salary,
                        employee_role.department_id
                FROM 
                    employee_role
                JOIN department
                    ON employee_role.department_id = department.id;
    `)
    .then(([rows, fields]) => rows)
    .catch((error) => error);

    return data;
}