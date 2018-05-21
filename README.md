# BST.JS
Javascript implementation of Binary Search Tree with helper methods

## Install

``` bash
yarn add @praneshravi/bst.js

#or

npm i @praneshravi/bst.js
```

## Available Methods

- insertValue
- getRootValue
- hasValue
- getMinValue
- getMaxValue
- getDepth
- getTree
- traverseTree
- getPath

## Examples

``` javascript
  const BST = require('@praneshravi/bst.js')
  const bst = new BST()

  // constructor takes optional paramaters
  //
  // new BST(tree, valueKey, leftKey, rightKey)
  //
  // tree = existing BST (default: null)
  // valueKey = key used for value (default: 'value')
  // leftKey = key used for left edge (default: 'left')
  // rightKey = key used for right edge (default: 'right')
  //


  bst.insertValue(25)
  bst.insertValue(15)
  bst.insertValue(50)
  bst.insertValue(10)
  bst.insertValue(22)
  bst.insertValue(24)
  bst.insertValue(4)
  bst.insertValue(12)
  bst.insertValue(18)
  bst.insertValue(35)
  bst.insertValue(70)
  bst.insertValue(31)
  bst.insertValue(44)
  bst.insertValue(66)
  bst.insertValue(90)

  bst.getRootValue()
  // prints 25

  bst.hasValue(4)
  // true
  bst.hasValue(100)
  // false

  bst.getMinValue()
  // 4
  bst.getMaxValue()
  // 90

  bst.getDepth()
  // 4

  JSON.stringify(bst.getTree(), null, 4)
  // {
  //   "value": 25,
  //   "right": {
  //       "value": 50,
  //       "right": {
  //           "value": 70,
  //           "right": {
  //               "value": 90,
  //               "right": null,
  //               "left": null
  //           },
  //           "left": {
  //               "value": 66,
  //               "right": null,
  //               "left": null
  //           }
  //       },
  //       "left": {
  //           "value": 35,
  //           "right": {
  //               "value": 44,
  //               "right": null,
  //               "left": null
  //           },
  //           "left": {
  //               "value": 31,
  //               "right": null,
  //               "left": null
  //           }
  //       }
  //   },
  //   "left": {
  //       "value": 15,
  //       "right": {
  //           "value": 22,
  //           "right": {
  //               "value": 24,
  //               "right": null,
  //               "left": null
  //           },
  //           "left": {
  //               "value": 18,
  //               "right": null,
  //               "left": null
  //           }
  //       },
  //       "left": {
  //           "value": 10,
  //           "right": {
  //               "value": 12,
  //               "right": null,
  //               "left": null
  //           },
  //           "left": {
  //               "value": 4,
  //               "right": null,
  //               "left": null
  //           }
  //       }
  //   }
  // }

  bst.traverseTree('inorder')
  // [ 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90 ]
  bst.traverseTree('preorder')
  // [ 25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90 ]
  bst.traverseTree('postorder')
  // [ 4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25 ]

  bst.getPath(90)
  // 'direction' means the direction in which the tree was traversed to reach the specified value
  // [
  //   { value: 25, direction: 'right' },
  //   { value: 50, direction: 'right' },
  //   { value: 70, direction: 'right' },
  //   { value: 90 }
  // ]

```

## Development

``` bash
npm install
npm build:watch
```

## License
MIT
