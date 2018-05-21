import expect from 'expect'
import BST from '../'

describe('Testing BST.js', () => {
  it('Should insert elements to the tree', () => {
    const bst = new BST()
    bst.insertValue(30)
    bst.insertValue(25)
    bst.insertValue(40)
    const tree = bst.getTree()
    expect(tree).toEqual({
      value: 30,
      right: {
        value: 40,
        right: null,
        left: null,
      },
      left: {
        value: 25,
        right: null,
        left: null
      }
    })
  })

  it('Should return the root element', () => {
    const bst = new BST()
    bst.insertValue(30)
    bst.insertValue(25)
    bst.insertValue(40)
    expect(bst.getRootValue()).toEqual(30)
  })

  it('Should check if the element is present', () => {
    const bst = new BST()
    bst.insertValue(30)
    bst.insertValue(25)
    bst.insertValue(40)
    expect(bst.hasValue(30)).toEqual(true)
    expect(bst.hasValue(20)).toEqual(false)
    expect(bst.hasValue()).toEqual(false)
  })

  it('Should check for min and max value', () => {
    const bst = new BST()
    bst.insertValue(30)
    bst.insertValue(25)
    bst.insertValue(40)
    expect(bst.getMinValue()).toEqual(25)
    expect(bst.getMaxValue(20)).toEqual(40)
  })

  it('Should return the depth of the tree', () => {
    const bst = new BST()
    bst.insertValue(30)
    bst.insertValue(25)
    bst.insertValue(40)
    expect(bst.getDepth()).toEqual(2)
  })

  it('Should traverse the tree in inorder, preorder and postorder fashion', () => {
    const bst = new BST()
    bst.insertValue(30)
    bst.insertValue(25)
    bst.insertValue(40)
    expect(bst.traverseTree('inorder')).toEqual([25, 30, 40])
    expect(bst.traverseTree('preorder')).toEqual([30, 25, 40])
    expect(bst.traverseTree('postorder')).toEqual([25, 40, 30])
  })

  it('Should return the path object for a given value', () => {
    const bst = new BST()
    bst.insertValue(30)
    bst.insertValue(25)
    bst.insertValue(40)
    bst.insertValue(35)
    bst.insertValue(20)
    bst.insertValue(10)
    expect(bst.getPath(10)).toEqual([
      { value: 30, direction: 'left' },
      { value: 25, direction: 'left' },
      { value: 20, direction: 'left' },
      { value: 10 }
    ])
  })


  it('Should return the node for a given value', () => {
    const bst = new BST()
    bst.insertValue(30)
    bst.insertValue(25)
    bst.insertValue(40)
    bst.insertValue(35)
    bst.insertValue(20)
    bst.insertValue(10)
    expect(bst.getNode(40)).toEqual({
      value: 40,
      left: {
        value: 35,
        right: null,
        left: null,
      },
      right: null,
    })
  })

  it('Should return the parent node for a given value', () => {
    const bst = new BST()
    bst.insertValue(30)
    bst.insertValue(25)
    bst.insertValue(40)
    bst.insertValue(35)
    bst.insertValue(20)
    bst.insertValue(10)
    expect(bst.getParent(10)).toEqual({
      value: 20,
      left: {
        value: 10,
        right: null,
        left: null,
      },
      right: null,
    })
  })

  it('Should remove the given node and update the tree', () => {
    const bst = new BST()
    bst.insertValue(50)
    bst.insertValue(30)
    bst.insertValue(70)
    bst.insertValue(20)
    bst.insertValue(40)
    bst.insertValue(60)
    bst.insertValue(80)
    console.log(JSON.stringify(bst.getTree(80), null, 4));
    bst.removeNode(30)
    console.log(JSON.stringify(bst.getTree(80), null, 4));
  })

})
