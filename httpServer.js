// const http = require("http");
// const PORT = 8081;

// const server = http
//   .createServer((request, response) => {
//     //THIS CALLABCK WILL ONLY GET EXECUTED WHEN THERE IS REQUEST TO THE SERVER.
//     const date = new Date();
//     const day = date.toLocaleDateString();
//     const time = date.toLocaleTimeString();
//     //RESPONSE.WRITE takes parameter as a string. Whatever we write in the parameter, is passed
//     // as a response to the client for the request it made.
//     response.write(`<h1>${day} ${time}</h1>`);
//     response.end(); //If it is not here, then the request will keep waiting for the response.
//   })
//   .listen(PORT, () => {
//     //THIS CALLBACK WILL EXECUTE AS SOON AS THE SERVER STARTS
//     console.log("Listening on PORT:", PORT);
//   });

//SENDING JSON AS RESPONSE
//------------------------

// const http = require("http");
// const PORT = 8081;

// http
//   .createServer((request, response) => {
//     const serverInfo = {
//       serverName: "Crio Server",
//       version: "1.0.0",
//       currentDate: new Date().toLocaleDateString(),
//       currentTime: new Date().toLocaleTimeString(),
//     };
//     response.write(JSON.stringify(serverInfo));
//     response.end();
//   })
//   .listen(PORT, () => {
//     console.log("Listening on PORT", PORT);
//   });
//-------------------------------------------

//ADDING HEADERS TO THE RESPONSE:
//-----------------------------------------------------------------
// const http = require("http");
// const PORT = 8081;

// http
//   .createServer((request, response) => {
//     const serverInfo = {
//       serverName: "Crio Server",
//       version: "1.0.0",
//       currentDate: new Date().toLocaleDateString(),
//       currentTime: new Date().toLocaleTimeString(),
//     };
//     response.writeHead(200, { "Content-type": "application/json" });
//     response.write(JSON.stringify(serverInfo));
//     response.end();
//   })
//   .listen(PORT, () => {
//     console.log("Listening on PORT", PORT);
//   });
//------------------------------------------------------------------

//CHANGING RESPONSE BASED ON REQUEST RECEIVED: IDENTIFYING REQUEST
//----------------------------------------------------------------

// const http = require("http");
// const PORT = 8081;

// http
//   .createServer((request, response) => {
//     console.log(request.url); //prints params of url. not the endpoint
//     //For http://localhost:8081/status, it prints /status

//     if (request.url === "/status") {
//       const serverInfo = {
//         serverName: "Crio Server",
//         version: "1.0.0",
//         currentDate: new Date().toLocaleDateString(),
//         currentTime: new Date().toLocaleTimeString(),
//       };
//       response.writeHead(200, { "Content-type": "application/json" });
//       response.write(JSON.stringify(serverInfo));
//       response.end();
//     } else {
//       response.write("<h1>Homepage</h1>");
//       response.end();
//     }
//   })
//   .listen(PORT, () => {
//     console.log("Listening on PORT", PORT);
//   });

//-----------------------------------------------------

//SESSION-1 ACTIVITY 5
//-----------------------------------------------------

// const http = require("http");
// const PORT = 8081;
// const json = require("./response.json");

// http
//   .createServer((request, response) => {
//     if (request.url === "/") {
//       response.write("<h1>Homepage</h1>");
//       response.end();
//     } else if (request.url === "/currencies") {
//       response.writeHead(200, { "Content-type": "application/json" });
//       response.write(JSON.stringify(json));
//       response.end();
//     } else {
//       response.writeHead(400);
//       response.end();
//     }
//   })
//   .listen(PORT, () => {
//     console.log("Listening on PORT", PORT);
//   });

//-------------------------------------------

//SESSION 1 ACTIVITY 5 -Extending APIS
//-------------------------------------------

const http = require("http");
const PORT = 8081;
const json = require("./response.json");

http
  .createServer((request, response) => {
    if (request.url === "/") {
      response.write("<h1>Homepage</h1>");
      response.end();
    } else if (request.url.startsWith("/currencies")) {
      const splitUrl = request.url.split("/");
      if (splitUrl.length > 2) {
        const currency = splitUrl[2];
        const obj = json.data.find((ele) => ele.id.toLowerCase() === currency);
        if (obj) {
          response.writeHead(200, { "Content-type": "application/json" });
          response.write(JSON.stringify(obj));
          response.end();
        } else {
          response.writeHead(400);
          response.end();
        }
      } else {
        response.writeHead(200, { "Content-type": "application/json" });
        response.write(JSON.stringify(json));
        response.end();
      }
    } else if (request.url === "/currencies/symbol") {
      console.log("hi");
      response.end();
    }
  })
  .listen(PORT, () => {
    console.log("Listening on PORT", PORT);
  });
