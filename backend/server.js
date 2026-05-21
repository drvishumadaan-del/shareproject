const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
"mongodb+srv://drvishumadaan_db_user:12345@cluster0.wpazmhu.mongodb.net/testdb"
);

const feeduser = mongoose.model("feeduser", {
   feed: String
});

app.post("/feedusers", async (req, res) => {

   const newFeedUser = new feeduser({
      feed: req.body.feed
   });

   await newFeedUser.save();

   res.send(newFeedUser);
});

app.listen(3000, () => {
   console.log("Server running on 3000");
});
