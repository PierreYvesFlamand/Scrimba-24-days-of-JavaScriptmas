# Scrimba-24-days-of-JavaScriptmas

The [JavaScriptmas](https://scrimba.com/learn/adventcalendar) is a twenty-four-day coding course created by [Scrimba](https://scrimba.com/).

From the 1st of December 2020 to 24th of december, here are my solutions.

<details><summary><b>Table of contents</b></summary>
<p>
   
[Day 1: Candies](#day-1-candies)

[Day 2: Deposit Profit](#day-2-deposit-profit)

[Day 3: Chunky Monkey](#day-3-chunky-monkey)

[Day 4: Century From Year](#day-4-century-from-year)

[Day 5: Reverse A String](#day-5-reverse-a-string)

[Day 6: Sort By Length](#day-6-sort-by-length)

</p>
</details>

---

## Day 1: Candies

n children have got m pieces of candy. They want to eat as much candy as they can, but each child must eat exactly the same amout of candy as any other child. Determine how many pieces of candy will be eaten by all the children together. In dividual pieces of candy cannot be split.

### Example

-   For n = 3 and m = 10, the output should be candies(n, m) = 9.
    -   Each child will eat 3 pieces. So the answer is 9.

### Hints

-   Math.floor()

<details><summary><b>Solution</b></summary>
<p>
    
```js
function candies(children, candy) {
    const perChild = Math.floor(candy / children);
    return perChild * children;
}
```
</p>
</details>

<details><summary><b>Compacted solution</b></summary>
<p>
    
```js
function candies(children, candy) {
    return Math.floor(candy / children) * children;
}
```
</p>
</details>

[Link to my scrimb](https://scrimba.com/scrim/co6e242088c674c5acde61c54)

---

## Day 2: Deposit Profit

You have deposited a specific amout of dollars into your bank account. Each year your balance increases at the same growth rate. Find out how long it would take for your balance to pass a specific threshold with the assumption that you don't make any additional deposits.

### Example

For deposit = 100, rate = 20 and threshold = 170, the output should be depositProfit(deposit, rate, threshold) = 3.

Each year the amout of money on your account increases by 20%. It means that throughout the years your balance would be:

-   year 0: 100
-   year 1: 120
-   year 2: 144
-   year 3: 172,8

Thus, it will take 3 years for your balance to pass the threshold, which is the answer.

<details><summary><b>Solution</b></summary>
<p>
    
```js
function depositProfit(deposit, rate, threshold) {
    let nbYear = 0;
    
    while(deposit < threshold) {
        deposit += deposit * (rate / 100);
        nbYear++;
    }
    
    return nbYear;
}
```
</p>
</details>

<details><summary><b>Other solution</b></summary>
<p>
    
```js
function depositProfit(deposit, rate, threshold) {
    const rateMult = 1 + (rate / 100);
    let nbYear = 0;
    
    while(deposit < threshold) {
        deposit *= rateMult;
        nbYear++;
    }
    
    return nbYear;
}
```
</p>
</details>

[Link to my scrimb](https://scrimba.com/scrim/co1e64fc4a0703c7b1ea75334)

---

## Day 3: Chunky Monkey

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as two-dimensional array.

### Example

-   chunkyMonkey(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]]
-   chunkyMonkey([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]]

### Hints

-   slice()

<details><summary><b>Solutions</b></summary>
<p>
    
```js
function chunkyMonkey(values, size) {
    const arr = [];
    let sliceArr = [];
    let pos = 0;
    
    while(pos < values.length) {
        sliceArr = values.slice(pos, pos += size);
        arr.push(sliceArr);
    }
    
    return arr;
}
```
</p>
</details>

<details><summary><b>Faster solution</b></summary>
<p>

```js
function chunkyMonkey(values, size) {
    const arr = [];

    while (values.length > 0) {
        arr.push(values.splice(0, size));
    }

    return arr;
}
```

</p>
</details>

[Link to my scrimb](https://scrimba.com/scrim/co2f64c098138c3849d63ea72)

---

## Day 4: Century From Year

Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the years 200, etc.

### Example

-   For year = 1905, the output should be centuryFromYear(year) = 20;
-   For year = 1700, the output should be centuryFromYear(year) = 17;

### Hints

-   Math.floor()

<details><summary><b>Solutions</b></summary>
<p>
    
```js
function centuryFromYear(year) {
    const century = year / 100;
    
    if(year % 100 === 0) {
        return century;
    }else {
        return Math.floor(century) + 1;
    }
}
```
</p>
</details>

<details><summary><b>Compacted solution</b></summary>
<p>

```js
function centuryFromYear(year) {
    return Math.floor((year - 1) / 100) + 1;
}
```

</p>
</details>

[Link to my scrimb](https://scrimba.com/scrim/co05b4019a66e115abb574b6d)

---

## Day 5: Reverse A String

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

### Example

-   reverseAString("hello") returns "olleh";
-   reverseAString("Howdy") returns "ydwoH";

### Hints

-   join()
-   split()
-   reverse()

<details><summary><b>Solutions</b></summary>
<p>
    
```js
function reverseAString(str) {
    let reverse = '';
    let i;
    
    for(i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    
    return reverse;
}
```
</p>
</details>

<details><summary><b>Compacted solution</b></summary>
<p>

```js
function reverseAString(str) {
    return str.split('').reverse().join('');
}
```

</p>
</details>

[Link to my scrimb](https://scrimba.com/scrim/cof4e4834a05c77e1479b7208)

---

## Day 6: Sort By Length

Givenan array of strings, sort them in the order of increasing lengths. If two strings have the same length, their relative order must be the same as in the initial array.

### Example

-   For inputArray = ["abc", "", "aaa", "a", "zz"]
    -   Output should be sortByLength(inputArray) = ["", "a", "zz", "abc", "aaa"]

### Hints

-   sort()

<details><summary><b>Solutions</b></summary>
<p>
    
```js
function sortByLength(strs) {
    return strs.sort((function(curStr, nextStr) {
        return curStr.length - nextStr.length;
    }));
}
```
</p>
</details>

<details><summary><b>Compacted solution</b></summary>
<p>

```js
function sortByLength(strs) {
    return strs.sort((curStr, nextStr) => curStr.length - nextStr.length);
}
```

</p>
</details>

[Link to my scrimb](https://scrimba.com/scrim/co8a744d2a87d8bd7905ca4ea)

---
