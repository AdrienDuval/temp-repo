const os = require("os");

console.log(os.freemem());

// info about current users

const user = os.userInfo();
console.log(user);

// method returns system uptime in seconds

console.log(os.uptime());

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
};

console.log(currentOs);
