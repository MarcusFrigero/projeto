//1 npm init
//2 npm install express --save
//npm install nodemom --save-dev

const http = require("http")
const app = require("./app")
const port = process.env.PORT || 3000;
const server = http.createServer(app)
server.listen(port)
