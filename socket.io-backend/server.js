//const { Socket } = require("socket.io-client");
const io = require('http').createServer();

//onst io = require("socket.io")();

io.on("connection", socket => {
  console.log("A User is connected !");
  socket.on("message", messgae => {
    console.log(messgae);
  })
});

 io.listen(3000);




// // const io = require("socket.io")();

// const { Socket } = require('socket.io-client');




// var http = require('http').createServer();
// var io = require('socket.io')(http);

// io.on("connection", function() {
//   console.log("A User has been connected !");
// });

// io.listen(3000);



// io.on('connection', (_socket) => {
//   console.log('a user connected');
// });




// io.listen(3000, () => {
//   console.log('A user is connected...listening on *:3000');
//   // socket.on("message", message => {
//   //   console.log(message)
//   // }
//   // );
// });



// Test 2

// var io = require('socket.io')();


// io.on('connection', (socket) => {
//     console.log('a user connected');
//   });
// io.listen(3001, () => {
//     console.log('listening on *:3000');
//   });