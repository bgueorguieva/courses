let count = 5;
const parser = {
  increment() { count++; },
  decrement() { count--; },
  reset() { count = 0; } // dostatuchno e da se slojat samo (), interpretatora razbira, che e funktsiya
}
const action =parser['increment'];
if (typeof action =='function') {
    action();
}else {
    //default case
}
// shortest way to do this check is:
parser['increment'] ? parser['increment']() : undefined;

console.log(count);