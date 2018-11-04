var url = require('url');
var http = require('http');
var handle = require('./lib/handle');
var router = require('./router/router');

var map = router.parseConfig(router.getConfig());
http.createServer(function(req, res) {
  for (var i in map.url) {
    if (url.parse(req.url, true).pathname === map.url[i]) {
      eval("handle." + map.func[i] + "(req, res)");
    }
  }
}).listen(3000);
