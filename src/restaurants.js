const {response, request} = require('express')
const {connectDb} = require ('./connectDb')

exports.createVibe = (request, response) => {
    const newVibe = request.body;
    const db = connectDb();
    db.collection('restaurants').add(newVibe)
        .then(doc => response.status(201).send(doc.id))
        .catch(err => response.status(500).send(err))
}