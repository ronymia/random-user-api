const express = require("express");
const cors = require("cors");
const app = express();
const dbConnect = require("./utils/dbConnect"); // db connect
const errorHandler = require("./middlewares/errorHandler");

const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());



// database connection
dbConnect();

// routes ===================================================




app.all("*", (req, res) => {
    res.send("NO routes found");
});

// express error handling
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Random User Api listening on port ${port}`);
});
