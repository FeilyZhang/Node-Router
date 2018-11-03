exports.fun = function(req, res) {
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.end('hello,' + req.url);
}
