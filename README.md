# Scrimba-24-days-of-JavaScriptmas

## Day 1: Candies
n children have got m pieces of candy. They want to eat as much candy as they can, but each child must eat exactly the same amout of candy as any other child. Determine how many pieces of candy will be eaten by all the children together. In dividual pieces of candy cannot be split.

**Example**
* For n = 3 and m = 10, the output should be candies(n, m) = 9.
* Each child will eat 3 pieces. So the answer is 9.

**Hints**
* Math.floor()

**Solutions**
```js
function candies(children, candy) {
    const perChild = Math.floor(candy / children);
    return perChild * children;
}
```

*Compacted solution*
```js
function candies(children, candy) {
    return Math.floor(candy / children) * children;
}
```
