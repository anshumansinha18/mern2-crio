const http = require("http");
const PORT = 8081;

const server = http
  .createServer((request, response) => {
    //THIS CALLABCK WILL ONLY GET EXECUTED WHEN THERE IS REQUEST TO THE SERVER.
    const date = new Date();
    const day = date.toLocaleDateString();
    const time = date.toLocaleTimeString();
    //RESPONSE.WRITE takes parameter as a string. Whatever we write in the parameter, is passed
    // as a response to the client for the request it made.
    response.write(`<h1>${day} ${time}</h1>`);
    response.end(); //If it is not here, then the request will keep waiting for the response.
  })
  .listen(PORT, () => {
    //THIS CALLBACK WILL EXECUTE AS SOON AS THE SERVER STARTS
    console.log("Listening on PORT:", PORT);
  });
