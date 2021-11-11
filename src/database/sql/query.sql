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



--Selec All Roles 
SELECT  employee_role.title
FROM 
    employee_role
JOIN department
    ON employee_role.department_id = department.id;


-- get employee role id by role title
SELECT employee_role.id 
From employee_role
WHERE employee_role.title = "TA";

-- Select department by department title
SELECT * FROM 
        department
WHERE department_name = "OPE";




