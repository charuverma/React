var express = require("express");
var router = express.Router();
var sequelize =require("../models/registerpage");


router.post("/save", function(req, res, next) {
    sequelize.save(req).then(result => {
        res.send({status:true});
    }).catch(console.log);
});

module.exports = router;

