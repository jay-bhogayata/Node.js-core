import * as os from "node:os";

console.log(`EOL of this os is ${os.EOL}`);
console.log(`available parallelism is ${os.availableParallelism()}`);
console.log(`cpu arch of your computer is ${os.arch()}`);

const cpu = os.cpus();

// console.log(cpu);
console.log(`your cpu model is  ${cpu[0].model}`);
console.log(`number of logical cpu is ${os.cpus().length}`);
console.log(`your one logical cpu speed is  ${cpu[0].speed} Mhz`);

console.log(`your devNull path is ${os.devNull}`);
console.log(`endianness of cpu ${os.endianness()}`);
console.log(
  `free memory on system is ${(os.freemem() / (1024 * 1024 * 1024)).toFixed(
    2
  )} gb `
);
console.log(`home dir of user is ${os.homedir()}`);
console.log(`host name of os is ${os.hostname()}`);
console.log(
  `cpu load average of 5 min is ${os.loadavg()[0]}, 10 min is ${
    os.loadavg()[1]
  } and 15 min is ${os.loadavg()[2]}`
);
console.log(`machine type of your computer is ${os.machine()}`);

console.log("list of network interfaces", os.networkInterfaces());

console.log(`your os platform is ${os.platform()}`);
console.log(`kernel version  ${os.release()}`);
console.log(`kernel version ${os.version()}`);
console.log(`temporary dir of os is ${os.tmpdir()}`);
console.log(
  `total memory on system is ${(os.totalmem() / (1024 * 1024 * 1024)).toFixed(
    2
  )} gb `
);
console.log(`name of the os is ${os.type()}`);
console.log(`system uptime is ${(os.uptime() / 60).toFixed(2)} min`);

const userInfo = os.userInfo();

console.log(`Username: ${userInfo.username}`);
console.log(`UID: ${userInfo.uid}`);
console.log(`GID: ${userInfo.gid}`);
console.log(`Home directory: ${userInfo.homedir}`);
console.log(`Shell: ${userInfo.shell}`);

// console.log(os.getPriority(20633)); //20633 is process id

// console.log(os.constants);

// Set the priority of the process with PID 1234 to "low" (negative value)
// os.setPriority(1234, os.constants.priority.PRIORITY_LOW);

// Set the priority of the current process to "high" (positive value)
// os.setPriority(os.constants.priority.PRIORITY_HIGH);
