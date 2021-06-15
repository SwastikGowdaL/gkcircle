const mongoose = require("mongoose");

//* for working with hosted geekcircle db - mongodb+srv://swastik:swastik12345@cluster0.59ztt.mongodb.net/geekcircle 
//! as of now working with local mongodb db
mongoose.connect(
  "mongodb://127.0.0.1:27017/geek-circle",
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
