# Scrimba-24-days-of-JavaScriptmas
The [JavaScriptmas](https://scrimba.com/learn/adventcalendar) is a twenty-four-day coding course created by [Scrimba](https://scrimba.com/).

From the 1st of December 2020 to 24th of december, here are my solutions.

---

## Day 1: Candies
n children have got m pieces of candy. They want to eat as much candy as they can, but each child must eat exactly the same amout of candy as any other child. Determine how many pieces of candy will be eaten by all the children together. In dividual pieces of candy cannot be split.

**Example**
* For n = 3 and m = 10, the output should be candies(n, m) = 9.
* Each child will eat 3 pieces. So the answer is 9.

**Hints**
* Math.floor()

<details><summary><b>Solutions</b></summary>
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

## Day 2: 

**Example**

**Hints**

<details><summary><b>Solutions</b></summary>
<p>
    
```js

```
</p>
</details>

<details><summary><b>Compacted solution</b></summary>
<p>
    
```js

```
</p>
</details>

[Link to my scrimb]()
