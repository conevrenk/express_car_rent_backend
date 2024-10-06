const express = require("express");

// kurulum
const app = express();
const PORT = 3000;

// router/endpoins leri tanımla
app.get("/api/v1/cars", (req, res) => { });
app.post("/api/v1/cars", (req, res) => { });

app.get("api/v1/cars/:id", (req, res) => { });
app.patch("/api/v1/cars/:id", (req, res) => { });
app.delete("/api/v1/cars/:id", (req, res) => { });





// dinlenecek portu belirle
app.listen(PORT, () => {
    console.log(`Server ${PORT} portunu dinlemeye başladı`)
})