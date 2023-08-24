const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the build folder
app.use(express.static(path.join(__dirname, "build")));

// Redirect all requests to index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
