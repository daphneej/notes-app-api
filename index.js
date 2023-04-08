const{notes} = require("./data/notes.js")

const express = require("express");


const app = express();
const port = process.env.PORT || 3000;



app.get("/notes", (req, res) => {
  res.send(notes);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
