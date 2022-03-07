const express = require("express");
const { createVibe, getRestaurants, getParty, getChill, getChic } = require("./restaurants");

const port = 3000;

const app = express();
app.use(express.json());

app.post("/restaurants", createVibe);

app.get("/restaurants", getRestaurants);

app.get("/restaurants/party", getParty);

app.get("/restaurants/chill", getChill);

app.get("/restaurants/chic", getChic);




app.listen(port, () => {
  console.log("listening on PORT", port);
});
