const express = require("express");
const {
    getAllCars,
    getCar,
    deleteCar,
    updateCar,
    createCar,
  } = require("../controllers");
const idControl = require("../middleware/idControl");

// Router> server.js dosyası dışarıdan route tanımı yapmamızı sağlar
const router = express.Router();
  
// router a endpoint ve istek geldiğinde çalışacak fonksiyonları belirliyoruz
router
    .route("/api/v1/cars")
    .get(getAllCars)
    .post(createCar);

router
  .route("/api/v1/cars/:id")
  .get(idControl, getCar)
  .patch(idControl, updateCar)
    .delete(idControl, deleteCar);
  
// serverjs e routere tanıtmak için export et
module.exports = router;