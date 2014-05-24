var connect = require('connect');
var server = connect().
    use(connect.static(__dirname+'/public')).
    listen(8080);
