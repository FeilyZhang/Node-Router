var http = require('http');
var router = require('./router/router');

var map = router.parseConfig(router.getConfig());
http.createServer(function(req, res) {
  router.router(req, res, map);
}).listen(3000);
