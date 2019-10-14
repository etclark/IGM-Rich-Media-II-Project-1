const http = require('http');
const url = require('url');
const query = require('querystring');
const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
  GET: {
    '/': htmlHandler.getIndex,
    '/style.css': htmlHandler.getCSS,
    '/addWaifu': jsonHandler.addWaifu,
    '/getWaifu': jsonHandler.getWaifu,
    notFound: jsonHandler.notFound,
  },
  HEAD: {
    '/getWaifu': jsonHandler.getWaifuMeta,
    notFound: jsonHandler.notFoundMeta,
  },
  POST: {
    '/addWaifu': jsonHandler.addWaifu,
  },
};

const onRequest = (request, response) => {
  const parsedUrl = url.parse(request.url);
  const params = query.parse(parsedUrl.query);
  const acceptedTypes = request.headers.accept.split(',');

  if (urlStruct[request.method][parsedUrl.pathname]) {
    urlStruct[request.method][parsedUrl.pathname](request, response, acceptedTypes, params);
  } else {
    urlStruct[request.method].notFound(request, response, acceptedTypes);
  }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
