const fs = require("fs");
const path = require("path");

const userJsonFile = path.join("public", "/randomUsers.json");

module.exports.getAllUser = (req, res, next) => {
    try {
        const jsonData = fs.readFileSync(userJsonFile);
        const parsedData = JSON.parse(jsonData);
        const { limit } = req.query;
        const result = (parsedData.slice(0, limit));

        res.status(200).json({
            success: true,
            data: result,
            message: `successfully send ${limit} data`,
            total: parsedData.length
        })
    } catch (err) {
        console.error('Error reading file:', err);
        res.status(500).json({
            error: true,
            message: 'Internal Server Error'
        });
    }
}