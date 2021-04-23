## BigO

BigO is used to measure performance and scalability of the functions or algorithms.
More specifically we use BigO to analyze Time and Space Complexity for algorithms, which are two essential metrics
for making code efficient.

Time Complexity = Speed. How fast a function can perform (determined by CPU).
Space Complexity = Memory. How much memory is used up while running an algorithm. Even more specifically, the temporary memory or auxiliary (supplementary) memory, dictated by the RAM on the computer.

Time and Space Complexity = using resources wisely.

Usually, when we are writing solutions, there will be tradeoffs: either less memory will be used one the expense of more processing power and vice versa.

| Big O Notation            | Name                     | Example                                                     |
| --------------------------| -------------------------| ------------------------------------------------------------|
| O(1)                      | Constant runtime         | Select an item with array index / object key                |
| O(log n)                  | Logarithmic runtime      | Binary Search                                               |
| O(n)                      | Linear runtime           | For loops, JS map(), filter(), reduce()                     |
| O(n log n)                | Linearithmic runtime     | Sorting an array with merge sort                            |
| O(n^2)                    | Quadratic runtime        | Sorting an array with bubble sort, 2 level nested loops     |
| O(2^n)                    | Exponential runtime      | Recursive calculation of Fibonacci numbers                  |
| O(n!)                     | Factorial runtime        | Find all permutations of given set/string                   |


`O` refers to **Order** of the function. `(n)` - number of inputs.

### O(1) - Constant time. Comlexity Rank: Excellent

Algorithms with this complexity perform with the same speed and time on any number of items.

Example:
```
const arrayOfOneItem = [1];
const arrayOfMillionItems = new Array(1000000).fill(1);

function getFirstItem(array) {
    return array[0];
}

getFirstItem(arrayOfOneItem);
getFirstItem(arrayOfMillionItems);
```

It doesn't necessaily means that we need to always get the first item. General idea is that no matter how many inputs we have to process, the amount of operations we do does not change, since it is not dependent on the size of the inputs. Another example:

```
const arrayOFiveItem = [1, 2, 3, 4, 5];
const arrayOfMillionItems = new Array(1000000).fill(1);
function printFirstTenItems(array) {
    for(let i = 0; i < 5; i++) {
        console.log(array[i]);
    }
}
printFirstTenItems(arrayOFiveItem);
printFirstTenItems(arrayOfMillionItems);
```

Other examples on O(1) complexity include: getting a value from an object by key, perform a mathematical operation on input (like, isEven, isOdd, etc.).
Built in JS methords with O(1) complexity: push(), pop(); primitive math operations like sum, multiplication, subtraction, division, modulo, bit shift, etc.


### O(log n) - Logarithmic time. Complexity Rank: Good

This one is the next fastest algorithm. Logarithmic runtime usually applies to algorithms that divides problems in half every step.
Typical example: Binary search, which finds a location of an item in a **sorted** array by dividing the input in half on each iteration.
Note about binary search: It might perform weaker on a smaller scale, however, once the amount of data grows, the performance increases significantly compared to the linear search (for loop).

### O(n) - Leaner time. Complaexity Rank: Fair

Loops are good example o linear algorithms, because the time to perform the operation will be directy connected to the lenght of data structure. Iterating over 100 items will take 10 times more time than iterating over 10 items.
Example:
```
const arrayofFive = new Array(5).fill(1);
const arrayOfAHunder = new Array(100).fill(1);

function printArray(array){
    for(let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

printArray(arrayofFive);
printArray(arrayOfAHunder); //this will take 10 times longer than the previous call
}
```

Other examples of linear runtime algos: Find given element in the colleciton, get maximum or minimum value in the array.
Built-in JS methods with O(n) complexity: shift(), unshift(), splice(), slice(), concat(), indexOf(), forEach(), map(), filter(), reduce()

### O(n log n) - Linearithmic time. Complexity Rank: Close to fair

`O(n log n)` is often confused with `O(log n)`. It is a combination of `O(n)` and `O(log n)` runtime complexities (`O(n * log n)` -> `O(n log n)`)
Sorting mechanisms that use divie and conquer strategy are Linearithmic, like Merge sort, Quick sort, Heapsort, Timsort.








