const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: "50541"
  });


  conn.on("connect", () => console.log('Successfully connected to the game server!'));
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};


module.exports = {connect};

