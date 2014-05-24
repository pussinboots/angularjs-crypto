var connect = require('connect');
var port = Number(process.env.PORT || 9000);
var server = connect().
    use(connect.static(__dirname+'/public')).
    listen(port);
