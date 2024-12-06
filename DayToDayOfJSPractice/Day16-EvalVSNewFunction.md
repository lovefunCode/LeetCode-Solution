## new Function()
``` js
let string = "6 + 5"
let res = new Function(`return ${string}`)()
console.log(res)

```
1. Execute code in its own isolated function scope, with no direct access to variables or functions
in the current scope, it only has access to global objects like winow or globla
2. Operates within its isolated scope and doesn't directly affect the surrounding code.
Any variables created inside the Function constructor are local to that function

## eval(string)
``` js
let res2 = eval(string)
console.log(res)

```
1. Executes code in the current scope, meaning it can access and manipulate variables and functions in that
scope. This can lead to unexpected side effects and vulnerabilities if user input is involved
2. can unintentionally modify the existing scope, introducing new variables or overwriting existing ones
3. making it hard to debug and more prone to errors
4. can be influenced by with statements, making the behaviors unpredictable in enviroments that use this 
deprecated feature

