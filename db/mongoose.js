const mongoose = require("mongoose");

//* for working with local geekcircle db - mongodb://127.0.0.1:27017/geek-circle
//! as of now working with hosted mongodb db
mongoose.connect(
  "mongodb+srv://swastik:swastik12345@cluster0.59ztt.mongodb.net/geekcircle",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    returnOriginal: false,
  }
);

mongoose.connection
  .once("open", () => console.log("connected"))
  .on("error", (error) => {
    console.log("🚀 ~ file: mongoose.js ~ line 18 ~ .on ~ error", error);
    console.log("err", error);
  });
