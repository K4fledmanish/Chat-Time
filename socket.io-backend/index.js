
// const io = require("socket.io")();

// io.on("connection", function() {
//     console.log("A User has been connected !");
// });

// io.listen(3001);



var http = require('http').createServer();
var io = require('socket.io')(http);



io.on('connection', (_socket) => {
  console.log('a user connected');
});

http.listen(3000, () => {
  console.log('A user is connected...listening on *:3000');
});



// Test 2

// var io = require('socket.io')();


// io.on('connection', (socket) => {
//     console.log('a user connected');
//   });
// io.listen(3001, () => {
//     console.log('listening on *:3000');
//   });