
const { log } = console;

for (let i = 0; i < 1; i++) {
  let contino = true;
  log('a');
  
  for (let j = 0; j < 1; j++) {
    let contino = true;
    log('b');

    for (let m = 0; m < 1; m++) {
      let contino = true;
      log('c');

      for (let n = 0; n < 1; n++) {
        log('d');
        contino = false;

				// how to exit from d, c and b?
        break;
      }
      if (!contino) break;
      log('c fim');
    }
    if (!contino) break;
    log('b fim');
  }
  if (!contino) break;
  log('a fim');
}
 
/** Expected Result
 * a
 * b
 * c
 * d
 * a fim
 */