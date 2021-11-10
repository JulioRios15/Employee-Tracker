import { Connection } from "mysql2";

export const addEmployeeRole = async (connection: Connection, title: string, salary: number, departmentId: number) => {
    const data = await connection.promise()
    .query(`
            INSERT INTO employee_role (title, salary, department_id)
            VALUES  ("${title}", ${salary}, ${departmentId});
    `)
    .then(([rows, fields]) => rows)
    .catch((error) => error);
    
    return data;
}