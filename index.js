// Generate express instance for library use
const express = require('express');
const app = express();

// Generate pool for DB connection
const { Pool } = require("pg");

// Set port & DB connection from environment variables
const PORT = process.env.PORT || 5000;
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({connectionString: connectionString});
// DB URL if needed
// || 'postgres://ijjuidmmqrirwi:9096a2ef7618b6f1f2dc375f8c6cfc80fb0f53b16697e829113f8197ccb56926@ec2-107-21-216-112.compute-1.amazonaws.com:5432/d51ubhiu0qlh7g?ssl=true';


// Set views folder, static pages foler and view engine
app.use(express.static("public"));
app.set("views", "views");
app.set("view engine", "ejs");

// Express routing for homepage/default page
app.get("/", function(req, res) {
  // Test DB query
  var sql = "SELECT * FROM meat";

  // query to DB
  pool.query(sql, function(err, result) {
    // If an error occurred...
    if (err) {
        console.log("Error in query: ");
        console.log(err);
    }
    // Log this to the console for debugging purposes. Goes to HEROKU logs.
    console.log("Back from DB with result:");
    console.log(result.rows);
  }); 
  
  // display index page
  res.render("pages/index");
});

// listening - log to HEROKU logs  
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

