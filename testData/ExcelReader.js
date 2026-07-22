import xlsx from "xlsx";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function getUsers() {

    const filePath = path.join(
        __dirname,
        "Playwright_Login_TestData.xlsx"
    );

    const workbook = xlsx.readFile(filePath);

    const sheetName = workbook.SheetNames[0];

    const sheet = workbook.Sheets[sheetName];

    return xlsx.utils.sheet_to_json(sheet);
}