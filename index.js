const http = require("http");
const PORT = 8081;

const server = http
  .createServer((request, response) => {
    //THIS CALLABCK WILL ONLY GET EXECUTED WHEN THERE IS REQUEST TO THE SERVER.
    const date = new Date();
    console.log(date.toLocaleDateString());
    console.log(date.toLocaleTimeString());
    response.end(); //If it is not here, then the request will keep waiting for the response.
  })
  .listen(PORT, () => {
    //THIS CALLBACK WILL EXECUTE AS SOON AS THE SERVER STARTS
    console.log("Listening on PORT:", PORT);
  });
