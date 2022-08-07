## About
LoliPop is a useful [Node.js](https://nodejs.org/en/) module that reworks logging to the [console](https://developer.mozilla.org/en-US/docs/Web/API/Console/log).
* More suited to hand placement
* Efficient
* Easy to use

## Example Usage
Install LoliPop:
```js
npm install lolipop
```
Start logging:
```js
const { lp } = require('lolipop');

lp("install lolipop!", "12.3", 12.3, {foo: 12, bar: 0.3}, undefined, [1, 2, 3]);
```
Output:
```
"install lolipop!": string
"12.3": string
12.3: number
[object Object]: {"foo":12,"bar":0.3}
undefined
array: [1,2,3]
```
## Links
* [npm](https://www.npmjs.com/package/lolipop)

## Contributing
Before creating an issue, please ensure that it hasn't already been reported/suggested.
