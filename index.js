console.log("Hello, 1.0.0");

module.exports = (input) => {
    let stack = [];
    input.split(" ").forEach(literal => {
        stack.push(
            isNaN(literal)
              ? execOper(literal, ...[stack.pop(), stack.pop()])
              : parseInt(literal)
          );
    });
    if(stack.length !== 1 || isNaN(stack[0]))
            throw new Error("Icorrect polish notation");
    return stack.pop();
}

execOper = (op, a, b) => {
    let result = null;

    switch (op) {
      case "+":
        result = b + a;
        break;
      case "-":
        result = b - a;
        break;
      case "*":
        result = b * a;
        break;
      case "/":
        result = b / a;
        break;
      default:
        throw new Error("Invalid operator");
    }
    return result;
}