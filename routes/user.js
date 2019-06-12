 var express = require("express");
var router = express.Router();
var sequelize =require("../models/login");

router.post("/login", function(req, res, next) {
    console.log("Helooo")
    sequelize.login(req).then(result => {
     res.send(result);
 }).catch(console.log);
});

module.exports = router;

 