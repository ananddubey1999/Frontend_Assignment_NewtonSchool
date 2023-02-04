




function expensiveOperation(num) {
  console.log("expensiveOperation called");
  let i = 0;
  const bufferSize = Math.min(num, 1000000000);
  const buffer = Array(bufferSize).fill(0);
  let pos = 0;
  while (i < 1000000000) {
    buffer[pos] += i;
    pos = (pos + 1) % bufferSize;
    i++;
  }
  return buffer;
}

export default expensiveOperation;
