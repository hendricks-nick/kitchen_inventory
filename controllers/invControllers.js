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

function getItemsByType (req, res) {

    var itemType = req.query.itemType;

    invModel.getItemsByType(itemType, function(err, results){
        res.json(results);
    });
}


function getByLocation (req, res) {

}

module.exports = {
    getDefault: getDefault,
    getAll: getAll,
    getItemsByType: getItemsByType,
    getByName: getByName
}