import { Connection } from "mysql2";


/**
 * 
 * @param connection database connection
 */
export const getALlEmployees = async (connection: Connection) => {
    
    const data = await connection.promise()
    .query(`
        SELECT  employee.id, 
            employee.first_name, 
            employee.last_name,
            employee.role_id,
            employee.manager_id, 
            employee_role.title, 
            department.department_name as department,
            employee_role.salary
                FROM 
                    employee 
                JOIN employee_role 
                    ON employee.role_id = employee_role.id
                JOIN department 
                    On employee_role.department_id = department.id;`
    )
    .then(([rows, fields]) => rows)
    .catch((error) => error);

    return data;
}