UPDATE  employee
SET     employee.first_name = "Joel",
        employee.last_name = "Rivera",
        employee.role_id = 1,
        employee.manager_id = null
WHERE employee.id = 1;