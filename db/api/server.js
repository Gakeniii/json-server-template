const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db", "db.json"));
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(cors());
server.use(middlewares());

// Explicit route for /patients
server.get("/patients", (req, res) => {
  const db = router.db; // this is where your db.json is stored
  res.jsonp(db.get("patients").value());
});

// Make sure all other routes are handled by json-server
server.use(router);
// const PORT = process.env.PORT || 3000;

// server.listen(PORT, () => {
//   console.log(`JSON Server is running on http://localhost:${PORT}`);
// });

// const jsonServer = require('json-server')
// const server = jsonServer.create()
// const router = jsonServer.router('db/db.json') // Adjust path if needed
// const middlewares = jsonServer.defaults()
// const cors = require('cors')

// server.use(cors())
// server.use(middlewares)
// server.use(router)

module.exports = server;

