# t-currency-converter

A simple npm package to convert currency using real-time exchange rates.

## Installation

```bash
npm install t-currency-converter

## import and usages

import { currencyConverter } from "t-currency-converter";

const result = await currencyConverter("USD", "EUR", 5);
console.log(result);
```

## API

currencyConverter(from, to, amount)

from (string): Base currency (USD)

to (string): Target currency (EUR)

amount (number): Amount to convert
