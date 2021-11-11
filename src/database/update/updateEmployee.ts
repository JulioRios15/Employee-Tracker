import { Connection } from "mysql2";

export const updateEmployee = async (connection: Connection, employeeId: number, firstName: string, lastName: string, roleId: number, managerId: number = null) => {
    const data = await connection.promise()
    .query(`
            UPDATE  employee
            SET     employee.first_name = "${firstName}",
                    employee.last_name = "${lastName}",
                    employee.role_id = ${roleId},
                    employee.manager_id = ${managerId}
            WHERE employee.id = ${employeeId};
    `)
    .then(([rows, fields]) => rows)
    .catch((error) => error);
    
    return data;
}
