# Document Capture Assessment
This project is a document capture application using the MERN stack that extracts information from documents such as passports and driver's licenses using Optical Character Recognition (OCR) with Tesseract.js.

## Objective
To build a reliable document capture application that extracts key details like name, document number, and expiration date from various identification documents and presents them in a user-friendly manner.

## Structure
- **Client**: React frontend (`client` folder)
- **Server**: Node.js backend (`server` folder)

## Bonus Feature - 
Added error handling for incorrect document formats and invalid input handling during extraction.

## Data Extraction
The application utilizes OCR to extract the following fields:

**Name**:
Document Number

Expiration Date

DL Number (supports both formats: DL No: and DL No =)

## Example Input
**Given a document containing**:
Name: John Doe

Document Number: ABC123456

Expiration Date: 12/31/2025

DL No: XYZ789

## API Endpoints
upload_document: Accepts a file upload and processes it to extract data.

extract_data: Returns extracted data in JSON format.

### Running the Application
**Server**:
```bash
cd server
npm install
node server.js
```

**Client**:
```bash
cd client
npm install
npm run dev
```

### Technologies
**Frontend**: React.js, Tailwind CSS

**Backend**: Node.js, Express.js, Tesseract.js, Multer

## Sample Testing
![image](https://github.com/user-attachments/assets/eb9f11c4-b3d8-42c8-a37a-f57004e26c63)
![image](https://github.com/user-attachments/assets/5b135049-6f9b-400b-8c3d-0e8f44c74f9f)
