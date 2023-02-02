const open = require("open");
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const port = 3000;

// Tell our Node.js Server to host our P5.JS sketch from the public folder.
app.use(express.static("public"));

// Setup Our Node.js server to listen to connections from chrome, and open chrome when it is ready
server.listen(port, () => {
  console.log(`listening on *: ${port}`);
  //open in browser (only have one of the following 4 line uncommented)
  open(`http://localhost:${port}`);//opens in your default browser
  // open(`http://localhost:${port}`, { app: {name: "google chrome"} });//specify which browser
  // open(`http://localhost:${port}`, { app: {name: "safari"} });
  // open(`http://localhost:${port}`, { app: {name: "firefox"} });
});