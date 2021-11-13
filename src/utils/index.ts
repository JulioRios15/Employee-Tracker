import {
    generateEnvMarkdown,
    generateSchemaMarkDown,
    generateSeedsMarkDown
} from "./sqlMarkdown";
import {createEnvFile} from "./fileManagement";
import mysql, {Connection, RowDataPacket} from 'mysql2';


const createDatabaseSchema = async (databaseName: string, password: string, host: string, user: string ="root") => {
    const connection = mysql.createConnection({
        host,
        user,
        password,
        multipleStatements: true
    });
    
    const schemaSQL = generateSchemaMarkDown(databaseName);

    const data = await connection.promise().query(schemaSQL)
    .then((result) => {
        console.log(` Schema for database "${databaseName}" created successfully`);  
        return result;   
    })
    .catch((error) => {
        console.log(`Unable to create schema for database "${databaseName}"`);   
        return null;     
    })

    connection.end(); 
    
    return data;
}


const seedDatabase = async (databaseName: string, password: string, host: string, user: string ="root" ) => {
    const connection = mysql.createConnection({
        host,
        user,
        password,
        database: databaseName,
        multipleStatements: true
    });

    const seedsSQL = generateSeedsMarkDown();

    const data = await connection.promise().query(seedsSQL)
    .then((result) => {
        console.log(`Database "${databaseName}" seeded successfully`);      
        return result;
    })
    .catch((error) => {
        console.log(`Unable to seed database "${databaseName}"`);  
        return null;
    })

    connection.end(); 

    return data;
}


export default {
    createDatabaseSchema,
    seedDatabase,
    generateSeedsMarkDown,
    generateEnvMarkdown,
    createEnvFile
}