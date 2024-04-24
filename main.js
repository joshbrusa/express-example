const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.post("/user", (req, res) => {
  const data = req.body;
  console.log("Received data:", data);
  res.send("Data received successfully!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
