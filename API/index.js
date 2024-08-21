// index.js
const express = require("express");
const cors = require('cors');
const getReport = require("./psi");
const app = express();
app.use(express.json());
app.use(cors())
const port = process.env.PORT || 3000;

app.post("/report", async (req, res) => {
  const { url } = req.body;
  const reportData = await getReport(url);
  res.send(reportData);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
