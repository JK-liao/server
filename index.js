const http = require("http");
const server_port = 8002;

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  if (request.url === "/favicon.ico") {
    response.end("");
  } else {
    response.end("<b>Hello World</b>\n");
  }
});

server.listen(server_port, () => {
  console.log(
    `start server at http://127.0.0.1:${server_port}\nstart server at http://localhost:${server_port}`
  );
});
