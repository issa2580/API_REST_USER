/* Importation des modules */
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const swaggerJsdm = require("swagger-jsdoc");
const swagger = require("swagger-ui-express");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(timeout("10s"));
app.use((req, res, next) => {
  if (!req.timedout) next();
});

/* Connect to database mongodb */
const URL = process.env.MONGODB_URL;
mongoose
  .connect(URL, {
    autoIndex: false,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log(error);
  });

// Loading swagger api
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User Manager API",
      version: "1.0.0",
      description: "A simple user manager API",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdm(options);

// Loading swagger api routes
app.use("/api-docs", swagger.serve, swagger.setup(swaggerSpec));

/* Loading routes */
app.use("/api/user", require("./routes/user"));

/*Envoi de message au console de navigation */
app.get("/", (req, res) => {
  res.send("api rest user manager authentication");
});

//  Port de navigation
const port = 5000;
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Appcation is running on port ${port}`);
});
