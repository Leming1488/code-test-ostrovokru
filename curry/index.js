function abc(a, b, c) {
  return a + b + c;
}

function abcdef(a, b, c, d, e, f) {
  return a + b + c + d + e + f;
}

(function () {
  Function.prototype.curry = function curried(...args) {
    const that = this;
    if (args.length < that.length) {
      return function (...restArgs) {
        return curried.apply(that, [...args, ...restArgs]);
      };
    }
    return that(...args);
  };
})();

function assert(a, b) {
  if (a !== b) {
    throw new Error();
  }
}
assert(abc.curry('A', 'B', 'C'), 'ABC');
assert(abc.curry('A')('B')('C'), 'ABC');
assert(abc.curry('A', 'B')('C'), 'ABC');
assert(abcdef.curry('A')('B')('C')('D')('E')('F'), 'ABCDEF');
assert(abcdef.curry('A', 'B', 'C')('D', 'E', 'F'), 'ABCDEF');
