function getAll () {

}

function getByName(name, callback) {
    console.log("Searching DB for: " + name)
    callback(results);
}

function getMeat(callback) {
  //  DB query
  var sql = "SELECT * FROM meat";

  // Query to DB
  pool.query(sql, function(err, results) {
    // If an error occurred...
    if (err) {
        console.log("Error in query: " + err);
    }
    // Log this to the console for debugging purposes. Goes to HEROKU logs.
    console.log("Back from DB with results:" + results.rows);
  }); 

  callback(results);
}

module.exports = {
    getAll: getAll,
    getMeat: getMeat,
    getByName: getByName
}
