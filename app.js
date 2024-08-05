import http from "http";
import fs from 'fs';
import path from 'path';
import os from 'os';
const fsys = fs.promises;

const host = '0.0.0.0';
const port = 3000;
const __dirname = path.resolve(path.dirname(''))

const requestListener = function (req, res) {
  // res.setHeader("Content-Type", "text/html");
  // res.setHeader("Content-Type", "application/json");
  // res.end(`{"message": "This is a JSON response"}`);
  fsys.readFile(path.join(__dirname, "/index.html"))
  .then(contents => {
      let _content = contents.toString(); // Buffer to string
      _content = _content.replace(/{hostname}/, os.hostname())
      console.log(_content);
      const buf = Buffer.from(_content); // String to buffer
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.end(buf);
  })
  .catch(err => {
      res.writeHead(500);
      res.end(err);
      return;
  });
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

export const viteNodeApp = requestListener;
