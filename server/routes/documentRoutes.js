const express = require('express');
const { processDocument } = require('../controllers/documentController');
const multer = require('multer');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('document'), processDocument);

module.exports = router;