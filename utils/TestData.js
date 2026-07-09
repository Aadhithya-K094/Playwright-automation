import xlsx from "xlsx";

export function getUsersFromExcel() {

    // Read Excel file
    const workbook = xlsx.readFile("./testData/LoginData.xlsx");

    // Read Sheet
    const worksheet = workbook.Sheets["LoginData"];

    // Convert Excel to JSON
    const users = xlsx.utils.sheet_to_json(worksheet);

    return users;
}