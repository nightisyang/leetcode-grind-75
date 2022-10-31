// from solutions
// https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/486566/javascript-stack-solution/
// using stack to parse out numbers, when an operand is encountered, pop off two values from the stack and execute the function assigned in the object
// after performing the operation, the value is pushed back into the stack and repeated until the loop ends
function evalRPN(tokens) {
  const stack = [];
  const ops = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => (a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b)),
  };

  for (const el of tokens) {
    if (ops[el]) {
      const secondVal = stack.pop();
      const firstVal = stack.pop();
      const operation = ops[el](firstVal, secondVal);
      stack.push(operation);
    } else {
      stack.push(Number(el));
    }
  }

  return stack.pop();
}
