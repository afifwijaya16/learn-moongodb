const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/db-mongoose", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

/// save satu/tunggal
// const apple = new Fruit({
//   name: "Apple",
//   rating: 8,
//   review: "Rasanya manis",
// });

// apple.save(function (error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Berhasil simpan buah apel kedalam database");
//   }
// });

/// save lebih dari satu/banyak
const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "Buah Terbaik",
});

const jeruk = new Fruit({
  name: "Jeruk",
  rating: 5,
  review: "rasanya asem",
});

const pisang = new Fruit({
  name: "Pisang",
  rating: 6,
  review: "Buah yang manis",
});

Fruit.insertMany([kiwi, jeruk, pisang], function (error) {
  if (error) {
    console.log(error);
  } else {
    mongoose.connection.close();
    console.log("Berhasil Menyimpan pada database");
  }
});
