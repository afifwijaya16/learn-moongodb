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

const peopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Data name not found, please insert data"],
  },
  Umur: {
    type: Number,
  },
  favoriteFruit: fruitSchema,
});

const People = mongoose.model("People", peopleSchema);

const duku = new Fruit({
  name: "Duku",
  rating: 7,
  review: "Rasanya manis",
});

duku.save(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Berhasil simpan buah Duku kedalam database");
  }
});

const people = new People({
  name: "Afif",
  age: "20",
  favoriteFruit: duku,
});

people.save(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Berhasil menyimpan pada database");
  }
});
