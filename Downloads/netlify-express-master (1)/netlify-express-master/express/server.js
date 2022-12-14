'use strict';
import express  from 'express';
import path from 'path';
import serverless from 'serverless-http';
const app = express();
import bodyParser from 'body-parser';
import api from "../api/server.js"
const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});
router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
router.post('/', (req, res) => res.json({ postBody: req.body }));

app.use(bodyParser.json());
 // path must route to lambda
app.use("/",api)
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

export default app
// module.exports.handler = serverless(app);
