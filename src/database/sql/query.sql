-- Select ALl Employees
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
    On employee_role.department_id = department.id;

-- Select ALl Employees By Department
SELECT  employee.first_name, 
        employee.last_name, 
        employee_role.title
FROM 
    employee 
JOIN employee_role 
    ON employee.role_id = employee_role.id
JOIN department 
    On employee_role.department_id = department.id
WHERE department.department_name = "OPE";



