const io = require("socket.io")();

let currentUserId = 2;
let currentMessageId = 1;
const userIds = {};

function createMessage(userId, messageText) {

  return{
    _id: currentMessageId++,
    text: messageText,
    createdAt: new Date(),
    user: {
      _id: userId,
      name: "Test User",
      avatar: "https://placeimg.com/140/140/any"
    }
  }
  
}



io.on("connection", socket => {
  console.log("a user connected!");
  console.log(socket.id);
  userIds[socket.id] = currentUserId++;

  socket.on("message", messageText => {
    const userId = userIds[socket.id];
    const message = createMessage(userId, messageText);
    console.log(message);
    //io.emit("message", message);
    socket.broadcast.emit("message", message);
  });
});

io.listen(3001);