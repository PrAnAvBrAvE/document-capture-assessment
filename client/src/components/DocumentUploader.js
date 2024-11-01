import React, { useState } from 'react';
import axios from 'axios';

function DocumentUploader() {
    const [file, setFile] = useState(null);
    const [result, setResult] = useState(null);
    
    const handleFileChange = (e) => setFile(e.target.files[0]);

    const handleSubmit = async () => {
        if (!file) return alert("Please select a document to upload.");

        const formData = new FormData();
        formData.append('document', file);

        try {
            const response = await axios.post('http://localhost:3001/api/documents/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setResult(response.data);
            setFile(null); // Reset file input after submission
        } catch (error) {
            alert("Failed to process document");
        }
    };

    const handleDelete = () => {
        setResult(null); // Clear the extracted details
        setFile(null); // Clear the file input
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md mx-auto p-6 border rounded-lg shadow-lg bg-white">
                <h2 className="text-2xl font-bold mb-4 text-center">Document Uploader</h2>
                <input 
                    type="file" 
                    onChange={handleFileChange} 
                    className="block w-full border border-gray-300 rounded-md mb-4 p-2" 
                />
                <button 
                    onClick={handleSubmit} 
                    className="w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition"
                >
                    Upload Document
                </button>

                {result && (
                    <div className="mt-4 p-4 border border-gray-300 rounded-md bg-gray-100">
                        <h3 className="font-bold text-center">Extracted Details:</h3>
                        <p><strong>Name:</strong> {result.name}</p>
                        <p><strong>Document Number:</strong> {result.documentNumber}</p>
                        <p><strong>Expiration Date:</strong> {result.expirationDate}</p>
                        <button 
                            onClick={handleDelete} 
                            className="mt-2 w-full bg-red-500 text-white rounded-md p-2 hover:bg-red-600 transition"
                        >
                            Delete Extracted Data
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DocumentUploader;