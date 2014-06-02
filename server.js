var connect = require('connect');
var serveStatic = require('serve-static');
var port = Number(process.env.PORT || 9000);
connect().
    use(serveStatic(__dirname+'/public')).
    listen(port);
