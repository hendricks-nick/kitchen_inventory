const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;


  app.use(express.static("public"));
  app.set("views", "views");
  app.set("view engine", "ejs");

  app.get("/", function(req, res) {
     res.render("pages/index");
    });
    
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

