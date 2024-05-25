import express from "express";
import axios from "axios";
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
app.use(express.static("public"));

app.get("/", async (req, res) => {
  const result = await axios.get("https://secrets-api.appbrewery.com/random");
console.log(result.data);
  res.render("index.ejs", {
   secret: result.data.secret, user: result.data.username ,
  });
});

