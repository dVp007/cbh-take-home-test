# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

I tried reducing the branching statements and made the function straight forward. Firstly, before it was checking all the conditions if there is no event in the input, so I refactored it and tested the condition in the beginning and returned. This prevents it from checking different conditions. Secondly, I used conditional statement to check if partition key is string or no so it's more readable and easily understood. Finally, I would like to explain all my test cases:
1. Returns the literal '0' when given no input
2. Returns a key when input is given
3. Returns a key when input is given with more than 256 letters
4. Returns the key when input is given with partitionKey in an object
5. Returns the key when input is given with partitionKey in an object with more than 256 letters
6. Returns the key when input is given with partitionKey in an object in not a string
7. Returns the key when input is a random object in not a string 
