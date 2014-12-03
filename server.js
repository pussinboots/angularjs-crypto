var connect = require('connect');
var serveStatic = require('serve-static');
var port = Number(process.env.PORT || 9000);
connect().
    use('/data', function fooMiddleware(req, res, next) {
          res.writeHead(200);
          req.pipe(res);
          next();
        }
    ).
    use(serveStatic(__dirname+'/public')).
    listen(port);
