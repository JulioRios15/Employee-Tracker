

export const generateSchemaMarkDown = (databaseName: string): string => `
DROP DATABASE IF EXISTS ${databaseName};
CREATE DATABASE ${databaseName};

USE ${databaseName};

CREATE TABLE department(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30)
);

CREATE TABLE employee_role (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(10,2),
    department_id INTEGER,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    On DELETE SET NULL
);

CREATE TABLE employee (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER,
    manager_id INTEGER,
    FOREIGN KEY(role_id) REFERENCES employee_role(id)
    On DELETE SET NULL,
    FOREIGN KEY (manager_id) REFERENCES employee(id)
    On DELETE SET NULL
 );

`;

/**
 * 
 * @returns our default raw seeds.sql
 */
export const generateSeedsMarkDown = (): string => `
INSERT INTO department (department_name)
VALUES  ("OPE"),
        ("Production"),
        ("Quality"),
        ("Human Resources"),
        ("Information Technology");

INSERT INTO employee_role (title, salary, department_id)
VALUES  ("OPE Manager", 90000.00, 1),                   
        ("Engineer", 65000.00, 1),
        ("Planner", 45000.00, 1),
        ("TA", 25000.00, 1),
        ("Clerk", 22000.00, 1),
        ("Head Of Production", 125000.00, 2),
        ("Bay Manager", 90000.00, 2),
        ("Aircraft Supervisor", 70000.00, 2),
        ("Aircraft Technician", 60000.00, 2),
        ("Quality Manager", 85000.00, 3),
        ("Quality Specialist", 50000.00, 3),
        ("Head Of Human Resources", 95000.00, 4),
        ("HR Associate", 50000.00, 4),
        ("IT Manager", 132000.00, 5),
        ("IT Technician", 65000.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Joel", "Rivera", 1, null), -- 9 reports to 8 / 12-18
        ("Victor", "Roman", 2, 1),
        ("Alberto", "Garcia", 3, 1),
        ("Ramona", "Roman", 4, 1),
        ("Kiara", "Trujillo", 4, 1),
        ("Eduardo", "Justiniano", 5, 1),
        ("Jens", "Lang", 6, null),
        ("Juan", "Ciordia", 7, 7),
        ("Georgy", "Georgiev", 7, 7),
        ("Yomar", "Pacheco", 7, 7),
        ("Rodolfo", "Velez", 7, 7),
        ("Emmanuel", "Esquilin", 8, 8),
        ("Christian", "Cintron", 8, 8),
        ("Felix", "Jimenez", 8, 9),
        ("Francisco", "Perez", 8, 10),
        ("Jose", "Cordero", 8, 9),
        ("Bryan", "Avilez", 8, 11),
        ("Erick", "Alicea", 8, 11),
        ("Myrolyub", "Mirchev", 9, 12),
        ("Tihomir", "Dochev", 9, 14),
        ("Edwin", "Sanchez", 9, 13),
        ("Pablo", "Jimenez", 9, 16),
        ("Jean", "Audinot", 9, 17),
        ("Jean", "Robles", 9, 12),
        ("Kevin", "Perez", 9, 15),
        ("Abraham", "Perez", 9, 12),
        ("Ricardo", "Silva", 9, 13),
        ("Jose", "Capella", 9, 14),
        ("Luis", "Perez", 9, 15),
        ("Kevin", "Capella", 9, 16),
        ("Christian", "Rivera", 9, 17),
        ("Omar", "Osorio", 9, 18),
        ("Christopher", "Ramos", 9, 13),
        ("Javier", "Corcino", 10, null),
        ("Howard", "Ayala", 11, 34),
        ("Elizabeth", "Sanchez", 11, 34),
        ("Waleska", "Sanchez", 12, null),
        ("Cristina", "Pumarejo", 13, 37),
        ("Wignelia", "Perez", 13, 37),
        ("Angelica", "Fernandez", 13, 37),
        ("Liam", "Mercado", 14, null),
        ("Luis", "Morales", 15, 41),
        ("Xavier", "Sanchez", 15, 41);
`

export const generateEnvMarkdown = (host: string, user: string, password: string, databaseName:  string):string => {
    return `
HOST=${host}
USER=${user}
PASSWORD=${password}
DATABASE=${databaseName}
`;
}