var express = require("express");
var router = express.Router();
var category = require('../controllers/category');


router.post("/save", function(req, res, next) {
    category.save(req).then(result => {
        res.send({status:true,result});
    }).catch(console.log);
});
router.post("/list", function(req, res, next) {
    category.list(req).then(result => {
        res.send({result});
    }).catch(console.log);
});
router.post("/delete", function(req, res, next) {
    category.delete(req).then(result => {
        res.send({status:true,result});
    }).catch(console.log);
});
router.post("/get", function(req, res, next) {
    category.get(req).then(result => {
        res.send({status:true,result});
    }).catch(console.log);
});
module.exports = router;