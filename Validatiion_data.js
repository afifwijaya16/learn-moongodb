const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/db-mongoose", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Data name not found, please insert data"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

//contoh valid eror
// const apple = new Fruit({
//   // name: "Apple",
//   rating: 11,
//   review: "Rasanya manis",
// });

// apple.save(function (error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Berhasil simpan data kedalam database");
//   }
// });

// contoh sukses input data
const mangga = new Fruit({
  name: "Mangga",
  rating: 10,
  review: "Rasanya manis",
});

mangga.save(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Berhasil simpan data kedalam database");
  }
});
