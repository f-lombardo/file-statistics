import axios from "axios";
import fs from "fs";

export async function fileContents(filePath: string): Promise<string> {
    if (filePath.startsWith('http://') || filePath.startsWith('https://')) {
        let response = await axios.get(filePath);
        const contentType = response.headers['content-type'];
        if (contentType.includes('application/json')) {
            return JSON.stringify(response.data);
        }
        return response.data.toString();
    } else {
        return fs.readFileSync(filePath, 'utf-8');
    }
}
