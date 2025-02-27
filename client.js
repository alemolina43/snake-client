const net = require("net");
const { IP, PORT, playerName } = require("./constants");


// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //Print a message to the screen when the connection is successfully established.
  conn.on('connect', ()=> {
    console.log('Successfully connected to game server');
  });
  
  //send up our Name message to the server upon connection
  conn.on("connect", () => {
    conn.write(playerName);
    //conn.write("Move: up");
    // setInterval(() => {
    //   conn.write("Move: up");
    //   // setTimeout(() => {
    //   //   conn.write("Move: down");
    //   // }, 50);
    // }, 50);
  });

  //function to handle incoming data and console.log it for the player
  conn.on('data', (data)=> {
    console.log(data);
  });

  return conn;
};




module.exports = connect;