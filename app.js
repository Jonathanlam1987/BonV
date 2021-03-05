const express = require('express');
const expressHandlebars = require('express-handlebars');
const app = express();
const bodyParser = require("body-parser");



app.engine(
    "handlebars",
    expressHandlebars({
    }) 
  );
  app.set("view engine", "handlebars");

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  res.render("main", {layout: null });
})


app.get('/', (req,res) => {
  res.send('hiiiiiiiii')
})




app.listen(3000, () => {
    console.log('express started on port 3000')
});