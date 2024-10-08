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
    
  // isteğin parametresi ile gelen id geçerli mi? kontrol eden mw
app.use(idControl);

app
    .route("/api/v1/cars/:id")
    .get(getCar)
    .patch(updateCar)
    .delete(deleteCar);

// dinlenecek portu belirle
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunu dinlemeye başladı`);
});
