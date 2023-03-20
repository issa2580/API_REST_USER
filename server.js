/* Importation des modules */
const express = require('express');
const app = express();
const port = 8080;


/*Envoi de message au console de navigation */
app.get('/', (req, res) => {
    res.send('api rest user manager authentication')
})


/* Port de navigation */
app.listen(port, (err) => {
    if (err) {
        console.log(err)
    }
    console.log(`Appcation is running on port ${port}`)
})