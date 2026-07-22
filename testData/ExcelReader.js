import xlsx from "xlsx";
import path from "path";
import { fileURLToPath } from "url";
 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
 
export function getUsers() {
 
    const workbook = xlsx.readFile(
        path.join(__dirname, "../TestData/users.xls")
    );
 
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
 
    return xlsx.utils.sheet_to_json(sheet);
}