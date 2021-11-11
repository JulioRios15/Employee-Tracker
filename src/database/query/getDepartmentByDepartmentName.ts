import { Connection, RowDataPacket } from "mysql2";


export const getDepartmentByDepartmentName = async (connection: Connection, departmentName: string) => {
    
    const data = await connection.promise()
    .query(`
            SELECT * FROM 
                department
            WHERE department_name = "${departmentName}";  
    `)
    .then(([rows, fields]) => rows)
    .catch((error) => error);

    return data;
}