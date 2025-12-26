# t-currency-converter

A simple npm package to convert currency using real-time exchange rates.

## Installation
npm install t-currency-converter

## Usage
```js
import { currencyConverter } from "t-currency-converter";

const result = await currencyConverter("USD", "INR", 10);
console.log(result);
