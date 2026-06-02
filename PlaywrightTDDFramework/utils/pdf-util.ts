import fs from 'fs';
import pdfParse from 'pdf-parse';


//C:\Training\PlaywrightTrainings\Mar_2026\playwright-tdd-framwork\files\Data.pdf
export class PDFUtil {

    static async readPDF(filepath: string): Promise<string> {

        //Verify whether the file exists. 
        if (!fs.existsSync(filepath)) {
            throw new Error(`File not found at the location : ${filepath}`)
        }

        //Read the PDF file and convert it into buffer (raw binary data)
        const buffer = fs.readFileSync(filepath) ;

        //Convert the buffer into Uint8Array
        const uint8Array = new Uint8Array(buffer);

        //Convert Uint8Array into PDF data. 
        const pdfData = await pdfParse.default(uint8Array);

        //extract the text and return it
        return pdfData.text;
    }

}

let data = await PDFUtil.readPDF("./files/git-cheat-sheet-education.pdf");
console.log(data);