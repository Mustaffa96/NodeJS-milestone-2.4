# simple-utils

A lightweight utility package focused on performance and low memory usage.

## Installation

```bash
npm install simple-utils
```

## Usage

```javascript
const { uniqueArray } = require('simple-utils');

const arr = [1, 2, 2, 3, 3, 4];
const unique = uniqueArray(arr);
console.log(unique); // [1, 2, 3, 4]
```

## Features

- Optimized for performance
- Low memory footprint
- Zero dependencies

## License

MIT
