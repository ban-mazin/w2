const input = process.argv.slice(2);
const sortedInput = input.sort((a, b) => {
  return a - b;
});
console.log(sortedInput);

const timer = function(input) {
  
  for (let time of input) {
    if (time > 0) {
       setTimeout(() => {
        process.stdout.write('\x07');
        }, time * 1000);
      }
    }
  }
timer(sortedInput);