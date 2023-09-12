const validParentheses = (s) => {
  // create a stack holder
  // create the hashmap
  // loop through the String of parentheses
  // store the current Char (s)
  // create an if condition here if the the char is an opening parentheses add it to the stack
  // else the char is a closing parentheses is saved and pop from the first element from the stack
  // if the last element in the stack does not match th
  const stack = [];
  const hashmap = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (hashmap[char]) {
      stack.push(char);
    } else {
      const top = stack.pop();

      if (hashmap[top] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(validParentheses('(]'));
