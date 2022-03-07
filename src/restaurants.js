const { connectDb } = require("./connectDb");

exports.createVibe = (request, response) => {
  const newVibe = request.body;
  const db = connectDb();
  db.collection("restaurants")
    .add(newVibe)
    .then((doc) => response.status(201).send(doc.id))
    .catch((err) => response.status(500).send(err));
};

exports.getRestaurants = (request, response) => {
  const db = connectDb();
  db.collection("restaurants")
    .get()
    .then((snapshot) => {
      const restaurantList = snapshot.docs.map((doc) => {
        let restaurant = doc.data();
        restaurant.id = doc.id;
        return restaurant;
      });
      response.send(restaurantList);
    })
    .catch((err) => response.status(500).send(err));
};
exports.getParty = (request, response) => {
    const db = connectDb();
    db.collection("restaurants")
      .where("vibe", "==", "party")
      .get()
      .then((snapshot) => {
        const restaurantList = snapshot.docs.map((doc) => {
          let restaurant = doc.data();
          restaurant.id = doc.id;
          return restaurant;
        });
        response.send(restaurantList);
      })
      .catch((err) => response.status(500).send(err));
  };

  exports.getChill = (request, response) => {
    const db = connectDb();
    db.collection("restaurants")
      .where("vibe", "==", "chill")
      .get()
      .then((snapshot) => {
        const restaurantList = snapshot.docs.map((doc) => {
          let restaurant = doc.data();
          restaurant.id = doc.id;
          return restaurant;
        });
        response.send(restaurantList);
      })
      .catch((err) => response.status(500).send(err));
  };

  exports.getChic = (request, response) => {
    const db = connectDb();
    db.collection("restaurants")
      .where("vibe", "==", "chic")
      .get()
      .then((snapshot) => {
        const restaurantList = snapshot.docs.map((doc) => {
          let restaurant = doc.data();
          restaurant.id = doc.id;
          return restaurant;
        });
        response.send(restaurantList);
      })
      .catch((err) => response.status(500).send(err));
  };