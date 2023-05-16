const express = require('express');
const ajv = require("./schemas/data");
const avatar = require("./json/avatar.json");

const app = express();
app.use(express.json());

function validateMovie(json) {
    const validate = ajv.getSchema("movie");
    if (validate(json)) {
        console.log("JSON OK");
    } else {
        console.log("JSON NOT OK");
        console.log(validate.errors);
    }
}

app.post("/jsonSchema", (req, res) => {
    res.send("JSON FILE CHECKED CHECK TERMINAL FOR ANS")
    validateMovie(req.body);
});

app.get("/jsonBien", (req, res) => {
    validateMovie(avatar);
    res.send("JSON FILE CHECKED CHECK TERMINAL FOR ANS")
});

app.listen(3000, () => console.log("Simple server running on http://localhost:3000"))
