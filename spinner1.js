//process.stdout.write('hello from spinner1.js... \rheyyy\n');
//output: heyyy from spinner1.js... '\r' brings the cursor back to the beginning of the line

setTimeout(() => {
  process.stdout.write('\r|   ')
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ')
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ')
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\   ')
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   ')
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   ')
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-   ')
}, 1300);

setTimeout(() => {
  process.stdout.write('\r\\   ')
}, 1500);

setTimeout(() => {
  process.stdout.write('\r|   ')
}, 1700);

setTimeout(() => {
  process.stdout.write('\n')
}, 1900);



