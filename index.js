import http from "node:http";
import fs from "node:fs";

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });

  const url = request.url;

  if (url === "/") {
    fs.readFile("./index.html", (err, data) => {
      if (err) {
        response.writeHead(404);
        response.write("File not found!");
      } else {
        response.write(data);
      }
      response.end();
    });
  } else if (url === "/about") {
    fs.createReadStream("./about.html").pipe(response);
  } else if (url === "/contact-me") {
    fs.createReadStream("./contact-me.html").pipe(response);
  } else {
    fs.createReadStream("./404.html").pipe(response);
  }
});

server.listen(8080, () => {
  console.log("Server is running at port 8080");
});
