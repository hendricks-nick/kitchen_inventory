const invModel = require("../models/invModel.js");

function getDefault(req, res) {
    // display index page
    res.render("pages/index");
}
function getAll (req, res) {

}

function getByName(req, res) {
    
    var name = req.params.name;
    
    invModel.getByName(name, function(err, results){
        if(!err) {
        res.json(results);
        }
        else {
            console.log("Error in getByName - invController: " + err);
        }
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
};