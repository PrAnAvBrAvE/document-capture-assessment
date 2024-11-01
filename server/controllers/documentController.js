const Tesseract = require('tesseract.js');
const fs = require('fs');

exports.processDocument = async (req, res) => {
    try {
        const { path } = req.file;

        const { data: { text } } = await Tesseract.recognize(path);

        // Regex patterns to extract specific fields
        const name = text.match(/Name[\s:][\s-]*\s*(\w+\s\w+\s\w+)/i)?.[1];
        const documentNumber = text.match(/DL No[\s:][\s=]\s*(\w+\s\w+)/i)?.[1];
        const expirationDate = text.match(/Valid Till\s*(\w+-\w+-\w+)/i)?.[1];

        // Clean up uploaded file
        fs.unlinkSync(path);

        res.json({ name, documentNumber, expirationDate });
    } catch (error) {
        res.status(500).json({ error: 'Failed to process document' });
    }
};