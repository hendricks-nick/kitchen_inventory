const express = require('express');
const app = express();
const { Pool } = require("pg");

const PORT = process.env.PORT || 5000;
const connectionString = process.env.DATABASE_URL || 'postgres://ijjuidmmqrirwi:9096a2ef7618b6f1f2dc375f8c6cfc80fb0f53b16697e829113f8197ccb56926@ec2-107-21-216-112.compute-1.amazonaws.com:5432/d51ubhiu0qlh7g?ssl=true';

const pool = new Pool({connectionString: connectionString});


  app.use(express.static("public"));
  app.set("views", "views");
  app.set("view engine", "ejs");

  app.get("/", function(req, res) {
    var sql = "SELECT * FROM meat";

    pool.query(sql, function(err, result) {
      // If an error occurred...
      if (err) {
          console.log("Error in query: ")
          console.log(err);
      }
      // Log this to the console for debugging purposes.
      console.log("Back from DB with result:");
      console.log(result.rows);
    }); 
    res.render("pages/index");
  });  
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

