var connect = require('connect');
var serveStatic = require('serve-static');

var server_port = process.env.YOUR_PORT || process.env.PORT || 5000;

connect().use(serveStatic(__dirname)).listen(server_port, function(){
    console.log('Server running on ...'+ server_port);
});