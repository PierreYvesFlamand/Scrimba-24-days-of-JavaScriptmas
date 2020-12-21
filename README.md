# Scrimba-24-days-of-JavaScriptmas
The [JavaScriptmas](https://scrimba.com/learn/adventcalendar) is a twenty-four-day coding course created by [Scrimba](https://scrimba.com/).

From the 1st of December 2020 to 24th of december, here are my solutions.

<details><summary><b>Table of contents</b></summary>
<p>
   
[Day 1: Candies](./#day-1-candies)

[Day 2: Deposit Profit](./#day-2-deposit-profit)

</p>
</details>

---

## Day 1: Candies

n children have got m pieces of candy. They want to eat as much candy as they can, but each child must eat exactly the same amout of candy as any other child. Determine how many pieces of candy will be eaten by all the children together. In dividual pieces of candy cannot be split.

**Example**

* For n = 3 and m = 10, the output should be candies(n, m) = 9.
    * Each child will eat 3 pieces. So the answer is 9.

**Hints**

* Math.floor()

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

**Example**

For deposit = 100, rate = 20 and threshold = 170, the output should be depositProfit(deposit, rate, threshold) = 3.

Each year the amout of money on your account increases by 20%. It means that throughout the years your balance would be:

* year 0: 100
* year 1: 120
* year 2: 144
* year 3: 172,8

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
