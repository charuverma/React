var express = require("express");
var router = express.Router();
var sequelize =require("../models/product");
var multer = require('multer')
var upload = multer({dest: 'uploads'}).single('File');

 router.post("/save", function(req, res, next) {
    upload(req, res, function (err) {
        req.body.File = req.file.path;
        sequelize.save(req).then(result => {
            res.send({status:true});
        }).catch(console.log);
    });
});
router.post("/list", function(req, res, next) {
    sequelize.list(req).then(result => {
        res.send({status:true, result});
    }).catch(console.log)
});
router.post("/delete", function(req, res, next) {
    sequelize.delete(req).then(result => {
        res.send({status:true, result});
    }).catch(console.log)
});
router.post("/get", function(req, res, next) {
    sequelize.get(req).then(result => {
        console.log(result);
        res.send({status:true, result});
    }).catch(console.log)
});

module.exports = router;

