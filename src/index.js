const express = require('express');
const {createVibe} = require ('./restaurants')

const port= 3000;

const app= express()
app.use(express.json())

app.post('/restaurants', createVibe);

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })

app.listen(3000, () => {
    console.log('listening on PORT', 3000)
})