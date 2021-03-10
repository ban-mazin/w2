// refractored code 

let i = 1;
const chars = ["|", "/", "-", "\\", "|", "\n"];
for (let k of chars) {
  setTimeout(() => {
    process.stdout.write('\r' + k);
  }, i+= 300)
};