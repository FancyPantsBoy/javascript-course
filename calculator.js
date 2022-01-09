var calculator = (function () {
  function HistoryEntry(val1, val2, op, result) {
    this.value1 = val1;
    this.value2 = val2;
    this.operation = op;
    this.result = result;
  }

  
  const history = [
    /*
      {
        value1 : 1,
        operation: '+',
        value2 : 4,
        result: 5
      }
    */
  ];

  let addToHistory = (value1, op, value2, result) => {
    const entry = new HistoryEntry(value1, value2, op, result);
    history.push(entry);
  }
  
  let add = (a, b) => {
    const result = a + b;
    addToHistory(a, '+', b, result)
    return result
  }
  let substract = (a, b) => {
    const result = a - b;
    addToHistory(a, '-', b, result)
    return result
  }
  let multiply = (a, b) => {
    const result = a * b;
    addToHistory(a, '*', b, result)
    return result
  }
  let divide = (a, b) => {
    const result = a + b;
    addToHistory(a, '/', b, result)
    return result
  }
  let getHistory = () => {
    history.forEach((item, index) => {
      console.log(`operation ${index + 1}: ${item.value1} ${item.operation} ${item.value2} = ${item.result}`);
    })
  }
  return {
    add,
    substract,
    multiply,
    divide,
    getHistory
  }
})();

// 1 - be able to execute different basic mathematical operations.
// 2 - keep a history of previous operations.

// calculator.add(1, 2);
// calculator.substract(1, 2);
// calculator.divide(1, 2);
// calculator.multiply(1, 2);

// calculator.getHistory();

// calculator.multiply(2, 3);
// console.log('--------------------------');
// calculator.getHistory();

/*
  1 + 2 = 3
  1 - 2 = -1
  1 / 2 = 0.5
  1 * 2 = 2
*/
