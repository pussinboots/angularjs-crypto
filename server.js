var connect = require('connect');
var serveStatic = require('serve-static');
var port = Number(process.env.PORT || 9000);
connect().
    use('/data/get/aes', function getaes(req, res, next) {
        var obj = { items: [ {name_enc: "XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"},
                            {name_enc: "XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg==", plain: "Hallo"},
                            {name_enc: "XJWoMnnOlSF3tFoU4jn4gg==", value_enc: "l0gZvr5oiHds8nQpqe0Kqg=="} ],
                    count: 3};
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(obj));    
        next();
    }).
    use('/data/get/des', function getaes(req, res, next) {
        var obj = { items: [ {name_enc: "AFx0ylylXKZG3Fp1veuO+g==", value_enc: "kDlxDGGIm2w=", plain: "Hallo"},
                            {name_enc: "AFx0ylylXKZG3Fp1veuO+g==", value_enc: "kDlxDGGIm2w=", plain: "Hallo"},
                            {name_enc: "AFx0ylylXKZG3Fp1veuO+g==", value_enc: "kDlxDGGIm2w="} ],
                    count: 3};
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(obj));    
        next();
    }).
    use('/data', function echo(req, res, next) {
        res.writeHead(200);
        req.pipe(res);
        next();
    }).
    use(serveStatic(__dirname+'/public')).
    listen(port);
