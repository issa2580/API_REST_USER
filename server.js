/* Importation des modules */
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const swaggerJsdoc = require("swagger-jsdoc");
const swagger = require("swagger-ui-express");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

/* Connect to database mongodb */
const URL = process.env.MONGODB_URL;
mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/api/tstconnection", async (req, res) => {
  try {
    await mongoose.connection.db.admin().ping();
    res.status(200).send("MongoDB connection successful");
  } catch (error) {
    res.status(500).send("Failed to connect to MongoDB");
  }
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
        url: "https://api-rest-user.vercel.app",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

// Loading swagger api routes
app.use("/api-docs", swagger.serve, swagger.setup(swaggerSpec));

/* Loading routes */
app.use("/api/user", require("./routes/user"));

/*Envoi de message au console de navigation */
app.get("/", (req, res) => {
  res.send("api rest user manager authentication");
});

//  Port de navigation
const port = process.env.PORT || 5000;
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Appcation is running on port ${port}`);
});
