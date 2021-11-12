import fs from "fs";

/**
 * 
 * @param filePath name of the file to check id exists, include file extension
 * @returns true or flase if exists
 * @Info not yet implemented be deault returns false
 */
export const fileExist = (filePath: string): boolean => {
    //TODO: Check if file exist
    return false;
}

/**
 * 
 * @param filePath file path without extension 
 * @param fileName name of the sql file to create
 * @param mardownData raw sql markdown
 * @Info creates sql file
 */
export const createSQLFile = (filePath: string, fileName: string, mardownData:string) => {
    const FILENAME = `${filePath}${fileName}.sql`;
    fs.writeFileSync(FILENAME, mardownData);
}

/**
 * 
 * @param markDownData 
 */
export const createEnvFile = (markdownData: string) => {
    fs.writeFileSync('./.env', markdownData);
}