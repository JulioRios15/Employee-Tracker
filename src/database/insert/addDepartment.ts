import { Connection } from "mysql2";

export const addDepartment = async (connection: Connection, departmentName: string) => {
    const data = await connection.promise()
    .query(`
            INSERT INTO department (department_name)
            VALUES  ("${departmentName}");
    `)
    .then(([rows, fields]) => rows)
    .catch((error) => error);
    
    return data;
}