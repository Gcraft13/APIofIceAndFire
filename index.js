import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import asoiaf from "asoiaf-api";

const app = express();
const port = 3000;
const url = "http://www.anapioficeandfire.com/api/characters/";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
