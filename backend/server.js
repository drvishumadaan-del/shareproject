const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app=express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://drvishumadaan_db_user:<12345>@cluster0.wpazmhu.mongodb.net/?appName=Cluster0")
const feed=mongoose.model("feed",{feed:String})

app.post("/feed", async (req, res) => {
  const feed = new feed({ feed: req.body.feed });
  await feed.save();
  res.send(feed);
});

app.listen(3000, () => {
  console.log("Server running on 3000");
});

