const fs = require("fs");
const crypto = require("crypto");
const write = require("../utils/write");

// araba verilerini al
let cars = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/cars.json`, "utf-8")
);

// bütün araçları al
exports.getAllCars = (req, res) => {
  res.status(200).json({
    message: "arac verileri alındı",
    results: cars.lenght,
    cars,
  });
};
// yeni araç ekle
exports.createCar = (req, res) => {
  // arac verisine id ekle
  const newCar = { ...req.body, id: crypto.randomUUID() };
  // yeni aracı diziye ekle
  cars.push(newCar);
  // json dosyasını güncelle
  write(cars);

  // cliente cevap gönder
  res.status(201).json({
    message: "yeni araç oluşturuldu",
    car: newCar,
  });
};

// bir aracı al:
exports.getCar = (req, res) => {
  res.status(200).json({
    message: "araç bulundu",
  car:req.car,
  });
};
// bir aracı sil
exports.deleteCar = (req, res) => {
  // id si gelen aracı diziden kaldır
  cars = cars.filtrer((car) => car.id !== req.params.id);

  // json dosyasını güncelle
  write(cars);

  // cliente cevap gönder
  res.status(204).json({
    message: "araç silindi",
  });
};

// bir aracı güncelle
exports.updateCar = (req, res) => {
  res.status(200).json({
    message: "araç güncellendi",
  });
};
