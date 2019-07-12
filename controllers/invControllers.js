// calls on invModel to use functions for connection to Database
const invModel = require("../models/invModel.js");

/************************************
 * name: GETDEFAULT
 * purpose: renders the default page
 ************************************/
function getDefault(req, res) {
    // display index page
    res.render("pages/index");
}

/************************************
 * name: 
 * purpose: 
 ************************************/
function getAll (req, res) {

}

/************************************
 * name: 
 * purpose: 
 ************************************/
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

/************************************
 * name: GETITEMSBYTYPE
 * purpose: Queries the database by inventory type
 ************************************/
function getItemsByType (req, res) {

    // Set the item type by the get request
    var itemType = req.query.itemType;

    // Queries DB through MODEL and forwards the results in JSON format back to clientside.js
    invModel.getItemsByType(itemType, function(err, results){
        res.json(results);
    });
}

/************************************
 * name: GETBYLOCATION
 * purpose: Performs a search by the location
 ************************************/
function getByLocation (req, res) {

}

/************************************
 * name: setADDITEM
 * purpose: Adds items to the database
 ************************************/
function addItemToDB (req, res) {
    console.log("Form posted received:");
    console.log("Name: " + req.query.name);
    console.log("Type: " + req.query.type);
    console.log("Quantity: " + req.query.qty);
    console.log("Notes: " + req.query.notes);
    console.log("Location: " + req.query.location);

    var name = req.query.name;
    var type = req.query.type;
    var qty = req.query.qty;
    var notes = req.query.notes;
    var location = req.query.location;

    invModel.addItemToDB(name, type, qty, notes, location, function(results){
        res.json(results);
    });
}

// exports the functions so that they can be access in index.js when required there
module.exports = {
    getDefault: getDefault,
    getAll: getAll,
    getItemsByType: getItemsByType,
    getByName: getByName,
    getByLocation: getByLocation,
    addItemToDB: addItemToDB
};