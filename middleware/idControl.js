const fs = require("fs");
// araba verilerini al
let cars = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/cars.json`, "utf-8")
);

module.exports = (req, res, next) => {
  // isteğe parametre olarak gelen id li elemanı diziden al
    const found = cars.find((car) => car.id === req.params.id);
  

  // eğer eleman bulunamadıysa hata gönder
  if (!found)
    return res
      .status(404)
            .json({ message: "Gönderilen id sahip bir araç bulunamadı" });
    
    // sonraki adımda founda erişebilmek için isteğe ekle
    req.car = found;

  // id geçerli ise bir sonraki çalışacak olan conroller fonksiyona geç
  next();
};
