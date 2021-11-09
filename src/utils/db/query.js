
export const getEmployees = async (connection) => {

    const data = await connection.promise()
    .query(`
        SELECT  employee.id, 
            employee.first_name, 
            employee.last_name, 
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
    .then(([rows, fields]) => {
        return rows;
    })
    .catch((error) => {
        return error
    });

    connection.end();
    return data;
}

export const getAllDepartments = async (connection) => {
    const data = await connection.promise()
    .query(`
        SELECT  department.department_name
                FROM 
                    department; 
`
    )
    .then(([rows, fields]) => {
        return rows;
    })
    .catch((error) => {
        return error
    });

    connection.end();
    return data;
}

