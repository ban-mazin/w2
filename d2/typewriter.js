const sentence = "hello there from lighthouse labs";
let i = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, i += 50)
};
setTimeout(() => {
  process.stdout.write('\n');
}, 2000);
