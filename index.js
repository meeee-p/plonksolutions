const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("plonksolutions.com");
})

app.listen(port, () => {
    console.log(`Plonk Solutions running on port: ${port}`);
})