## Description

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

## Examples

```js
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
```

## My solution

```js
function validParentheses(parens) {
  // your code here ..
  let result = 0
  if(parens ==='') {
    return true
  }
  
  for(let char of parens) {
    if(char ==='(') {
      result--
    } 
    if(char ===')') {
      result++
    } 
  }
  
  if(result === 0) {
    return true
  } else {
      return false;
    }
}
```
