import * as XLSX from "xlsx";

export class ExcelHelper {

    public static getTestData<T>(
        filePath: string,
        sheetName: string
    ): T[] {

        const workbook = XLSX.readFile(filePath);

        const sheet = workbook.Sheets[sheetName];

        return XLSX.utils.sheet_to_json<T>(sheet);

    }

}