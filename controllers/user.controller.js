const fs = require("fs");
const path = require("path");

const userJsonFile = path.join("public", "/randomUsers.json"); // import json file

// get a single random user
module.exports.getRandomUser = (req, res) => {
    try {
        const usersJson = fs.readFileSync(userJsonFile); // get json data from file
        const users = JSON.parse(usersJson); // convert to js object
        const randomUserIndex = Math.floor(Math.random() * users.length); // get random user index
        const randomUser = users[randomUserIndex]; // get random user
        //
        res.json(randomUser);
    } catch (error) {
        // console.error(error);
        res.status(500).json({
            success: false,
            error: "Internal Server Error"
        });
    }
};

// get all user controller
module.exports.getAllUser = (req, res, next) => {
    try {
        const usersJson = fs.readFileSync(userJsonFile); // get json data from file
        const users = JSON.parse(usersJson); // convert to js object
        const { limit } = req.query; // query limit
        const result = (users.slice(0, limit)); // limited data

        res.status(200).json({
            success: true,
            data: result,
            message: `success`,
            total: users.length
        })
    } catch (err) {
        console.error('Error reading file:', err);
        res.status(500).json({
            success: false,
            error: 'Internal Server Error'
        });
    }
};

// get a single user controller
module.exports.getSingleUser = (req, res) => {
    try {
        const usersJson = fs.readFileSync(userJsonFile); // get json data from file
        const users = JSON.parse(usersJson); // convert to js object
        const { id } = req.params; // user id from query params
        // console.log( typeof id);
        const result = users.find(user => user.id === Number(id)); // get user by id
        // console.log(result); 
        if (!result) {
            throw Error(`User not Exist given ID:${id}`);
        }

        res.status(200).json(result);
    } catch (err) {
        const errorMessage = err.message;
        // console.log(errorMessage);
        // console.warn('Error reading file:', err);
        res.status(200).json({
            success: false,
            error: errorMessage
        });
    }
};

// post a single user 
module.exports.saveSingleUser = (req, res) => {
    res.send("save user");
};

// update a single user controller
module.exports.updateSingleUser = (req, res) => {
    res.send("update user");
};


// update bulk user controller
module.exports.updateBulkUser = (req, res) => {
    res.send("update bulk user");
};


// delete user controller
module.exports.deleteUser = (req, res) => {
    res.send("Delete a user");
};