const route = require('express').Router();
const Mapping = require('../models/Mapping');
var multer = require('multer');
const path = require('path');
////////////////////i'll add file this night
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Uploads is the Upload_folder_name
        cb(null, "uploads")
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
})

const maxSize = 1 * 1000 * 1000;
var upload = multer({
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: function (req, file, cb) {

        var filetypes = /jpeg|jpg|png|pdf/;
        var mimetype = filetypes.test(file.mimetype);

        var extname = filetypes.test(path.extname(
            file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        }

        cb("Error: File upload only supports the "
            + "following filetypes - " + filetypes);
    }
    // fileSolar is the name of file attribute
}).single("fileSolar");


route.post('/upload', upload, (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Mapping.execute(sql).then(rep => {
    //     return res.send(rep);
    // }).catch(error => {
    //     return res.send({ error });
    // });
})

module.exports = route;