import os from 'os';

const frequency = Number(process.argv[2]);
if (isNaN(frequency)) {
  console.error('Please specify a valid frequency in seconds.');
  process.exit(1);
}

setInterval(async () => {
  console.log(`Operating system: ${os.type()}`);
  console.log(`Architecture: ${os.arch()}`);
  console.log(`Current user name: ${os.userInfo().username}`);
  console.log(`CPU Cores:`);
  os.cpus().forEach((core, i) => {
  console.log(`  Core ${i}: ${core.model}`);
  });
  console.log(`Real CPU speed: ${os.cpus()[0].speed}`);
  const totalMemory = os.totalmem() / 1e9;
  const freeMemory = os.freemem() / 1e9;
  const usedMemory = totalMemory - freeMemory;
  console.log(`Memory: Total: ${totalMemory.toFixed(2)}GB | Used: ${usedMemory.toFixed(2)}GB | Free: ${freeMemory.toFixed(2)}GB`);

  
  console.log('');
}, frequency * 1000);
