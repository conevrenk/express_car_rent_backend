const express = require("express");
const { logger } = require("./middleware");
const carRoutes = require("./routes/carRoutes");


// kurulum
const app = express();
const PORT = 3000;

// middleware kullanımı
app.use(logger);

// istekleri bod/header/param bölümlerini işleyen middleware
app.use(express.json());

// route/endpoint leri tanımla
app.use(carRoutes());


// dinlenecek portu belirle
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunu dinlemeye başladı`);
});
