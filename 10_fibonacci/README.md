# Exercise 10 - Fibonacci

Create a function that returns a specific member of the Fibonacci sequence:

> A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers.
> In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.
> To learn more about Fibonacci sequences, go to: https://en.wikipedia.org/wiki/Fibonacci_sequence

```javascript
fibonacci(4); // returns the 4th member of the series: 3  (1, 1, 2, 3)
fibonacci(6); // returns 8
```

1 1 2 3 5 8 

let atual = 1; let prev = 1 / i < f-1

res = atual + prev
prev = atual
atual = res

let current = 1;
let prev = 1;
let result = 0;

for (i = 1; i < f-1; i++) {
  result = current + prev;
  prev = current;
  current = result;
}
