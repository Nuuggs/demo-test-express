const express = require('express')

const app = express()
const port = 3004

app.set("view engine", "ejs");

app.get('/ejs-view', (req, res) => {
  const data = {
    user: {
      first_name: 'bryan',
      email: 'bry@test.com',
      hobbies: ['drumming', 'rock climbing', 'gaming']
    }
  };
  res.render("demo", data);
});
app.get('/', (req, res) => {
  const products = [{ id: "1", name: "Playstation 5", inStock: false }];
  res.json(products);
});

app.listen(port, () => console.log('App is listening on port ' + port))