const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', key => {
  if (key === '\u0062') {
    process.stdout.write('\x07');
  };

  if ([1, 2, 3, 4, 5, 6, 7, 8, 9].includes(Number(key))) {
    console.log(`"setting timer for ${key} seconds..."`)
    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(key) * 1000)
  }

  if (key === '\u0003') {
    process.exit();
  }
})