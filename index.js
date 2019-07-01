// Generate express instance for library use
const express = require('express');
const app = express();

// Connect to controller
const invController = require("./controllers/invControllers.js");

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
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("views", "views");
app.set("view engine", "ejs");

// Express routing for homepage/default page
app.get("/", invController.getDefault);
app.get("/meat", invController.getMeat);
app.get("/search/:name", invController.getByName);

// listening - log to HEROKU logs  
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

