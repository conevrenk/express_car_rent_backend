const express = require("express");
const {
  getAllCars,
  getCar,
  deleteCar,
  updateCar,
  createCar,
} = require("./controllers");
const { logger } = require("./middleware");
const idControl  = require("./middleware/idControl");

// kurulum
const app = express();
const PORT = 3000;

// middleware kullanımı
app.use(logger);


// istekleri bod/header/param bölümlerini işleyen middleware
app.use(express.json());


// endpoins leri tanımla 2.yöntem
app
    .route("/api/v1/cars")
    .get(getAllCars)
  .post(createCar);
    


app
    .route("/api/v1/cars/:id")
    .get(idControl,getCar)
    .patch(idControl,updateCar)
    .delete(idControl,deleteCar);

// dinlenecek portu belirle
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunu dinlemeye başladı`);
});
