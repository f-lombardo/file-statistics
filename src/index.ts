import * as readline from 'readline';
import {processFile} from "./processFile";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Please enter the file path or URL: ', (filePath) => {
    processFile(filePath).then((result) => {
        rl.close();
        result.forEach((s, _i) => console.log(s));
    });
});
