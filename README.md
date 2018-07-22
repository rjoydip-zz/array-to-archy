<div align="center">

  <h1>Array To Archy</h1>

  <p>
    Convert an array to object structure representation which can be used to archy.
  </p>

  [![Build Status][build-badge]][build-badge]
  [![version][version-badge]][version-badge]
  [![downloads][downloads-badge]][downloads-badge]

</div>

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION. It'll update automatically -->

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Output](#output)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `devDependencies`:

```
npm install --save-dev array-to-archy
```

## Usage

```js
const arrayToArchy = require("array-to-archy");

const _array = [
  1,
  2,
  [3, 4, ["city", "country", ["abc", "xyz"]]],
  5,
  ["foo", "bar"],
  "baz",
  6
];

const _options = {
  label: "X"
};

console.log(JSON.stringify(arrayToArchy(_array, _options)));
```

## Output

```js
{
  "label": "X",
  "nodes": [
    "1",
    "2",
    {
      "label": "X",
      "nodes": [
        "3",
        "4",
        {
          "label": "X",
          "nodes": [
            "city",
            "country",
            {
              "label": "X",
              "nodes": [
                "abc",
                "xyz"
              ]
            }
          ]
        }
      ]
    },
    "5",
    {
      "label": "X",
      "nodes": [
        "foo",
        "bar"
      ]
    },
    " baz",
    "6"
  ]
}
```

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

| [<img src="https://avatars.githubusercontent.com/u/15318294?v=3" width="100px;"/><br /><sub>Joydip Roy (rjoydip)</sub>](https://rjoydip.com)<br />[💻](https://github.com/rjoydip/array-to-archy/commits?author=rjoydip) [📖](https://github.com/rjoydip/array-to-archy/commits?author=rjoydip) 🚇 [⚠️](https://github.com/rjoydip/array-to-archy/commits?author=rjoydip) |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |


<!-- ALL-CONTRIBUTORS-LIST:END -->

Contributions of any kind welcome!

## LICENSE

[MIT](#license)

[node]: https://nodejs.org/en
[npm]: https://www.npmjs.com/
[build-badge]: https://img.shields.io/travis/rjoydip/array-to-archy.svg?style=flat-square
[version-badge]: https://img.shields.io/npm/v/array-to-archy.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dm/array-to-archy.svg?style=flat-square
[license]: https://github.com/rjoydip/array-to-archy/blob/master/LICENSE
