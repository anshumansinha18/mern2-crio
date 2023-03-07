const PASSWORD = process.env.ROUTE_PASSWORD;


//next() tells the middleware to go to the next middleware. 
const verifyAuth = (request, response, next) => {
  const { authorization } = request.headers;
  
  if (authorization && authorization === PASSWORD) return next();
  else response.sendStatus(403);
};

module.exports = {
  verifyAuth,
};
