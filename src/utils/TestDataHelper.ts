import * as fs from 'fs';

export class TestDataHelper {

    public static getTestData<T>(filePath: string): T {

        const json = fs.readFileSync(filePath, 'utf8');

        return JSON.parse(json) as T;

    }

}