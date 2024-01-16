var compose = function (functions) {
    return function (x) {
      return functions.reduceRight((acc, func) => func(acc), x);
    };
  };
  
  const returnedFunction = compose([x => x + 1, x => x * x, x => 2 * x]);
  const result = returnedFunction(4);
  console.log(result);