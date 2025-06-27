const express = require("express");
const app = express();

app.use(express.json());

app.post("/add", (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== "number" || typeof b !== "number") {
    return res.status(400).json({ error: "Inputs must be numjhkjhbers" });
  }
  const result = a + b;
  res.json({ result });
});

if (require.main === module) {
  app.listen(8080, () => {
    console.log("API running at Port 8080");
  });
}

module.exports = app;
//comment12345