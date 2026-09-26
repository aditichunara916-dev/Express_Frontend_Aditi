const express = require("express");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("form");
});

app.post("/submit", async (req, res) => {
    const response = await fetch("http://127.0.0.1:5000/submit", {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            name: req.body.name,
            email: req.body.email
        })
    });

    const data = await response.json();

    res.send(`
        <h1>${data.message}</h1>
        <p>Name: ${data.name}</p>
        <p>Email: ${data.email}</p>
        <a href="/">Go Back</a>
    `);
});

app.listen(port, () => {
    console.log(`Frontend running on port ${port}`);
});