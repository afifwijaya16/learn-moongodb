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

Fruit.deleteOne({ _id: "5ebe198b192680236458c9be" }, function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Berhasil delete data lemon");
  }
});
//Read data all berdasarkan nama
Fruit.find(function (error, fruits) {
  if (error) {
    console.log(error);
  } else {
    mongoose.connection.close();
    console.log("Nama - nama buah");
    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});
