const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
    origin: "https://egyik19.hu"
}));

app.use(express.json());

app.post("/track", (req, res) => {
    console.log("Érkezett esemény:");
    console.log(req.body);

    res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Szerver fut a ${PORT} porton`);
});