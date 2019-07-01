const invModel = require("../models/invModel.js");

function getDefault(red, res) {
    // display index page
    res.render("pages/index");
}
function getAll (req, res) {

}

function getByName(req, res) {
    
    var name = req.params.name;
    
    invModel.getByName(name, function(err, results){
        res.json(results);
    });
}

function getMeat (req, res) {
    invModel.getMeat(function(err, results){
        res.render(results);
    });
}

function getProduce (req, res) {

}

function getGrain (req, res) {
    
}

function getDairy (req, res) {
    
}

function getOther (req, res) {
    
}

function getByLocation (req, res) {

}

module.exports = {
    getDefault: getDefault,
    getAll: getAll,
    getMeat: getMeat,
    getByName: getByName
}