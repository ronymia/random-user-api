const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');
const dbConnect = require("./utils/dbConnect"); // db connect
const errorHandler = require("./middlewares/errorHandler"); // error handler middleware
const userRoutes = require("./routes/v1/user.route"); // all user routes

const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static('public'))



// database connection
dbConnect();

// routes ===================================================
app.use("/api/v1/user", userRoutes);



// if user fired a routed that does not exist then it will be execute 
app.all("*", (req, res) => {
    res.send("NO routes found");
});

// express error handling
app.use(errorHandler);

// listening application
app.listen(port, () => {
    console.log(`Random User Api listening on port ${port}`);
});
