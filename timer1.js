const args = process.argv.slice(2);

for (let elem of args) {
  if (Number(elem) < 0 || isNaN(Number(elem))) {
    break;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, Number(elem) * 1000);
}