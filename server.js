/* Importation des modules */
const express = require('express');
const mongoose = require('mongoose');
require('dotenv')
.config()


const app = express();


/* Connect to database mongodb */
const URL = process.env.MONGODB_URL
mongoose.connect (URL, {
    /*
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
    */
})
.then(() => {
    console.log('Connected to database');
})
.catch((error) => {
    console.log(error)
})

/*Envoi de message au console de navigation */
app.get('/', (req, res) => {
    res.send('api rest user manager authentication')
})


/* Port de navigation */
const port = 8080;
app.listen(port, (err) => {
    if (err) {
        console.log(err)
    }
    console.log(`Appcation is running on port ${port}`)
})