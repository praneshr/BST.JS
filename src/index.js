
class BST {
  constructor(tree, valueKey = 'value', leftKey = 'left', rightKey = 'right') {
    this.tree = tree || null
    this.valueKey = valueKey
    this.rightKey = rightKey
    this.leftKey = leftKey
  }

  emptyNode(value) {
    return {
      [this.valueKey]: value,
      [this.rightKey]: null,
      [this.leftKey]: null,
    }
  }

  traverseObject(value, direction) {
    if (!direction) {
      return { value }
    }
    return {
      value,
      direction,
    }
  }

  insertValue(x) {
    let tree = this.tree
    while (true) {
      if (tree === null) {
        this.tree = this.emptyNode(x)
        return
      }
      const value = tree[this.valueKey]
      if (value === x) {
        return
      } else if (x > value) {
        if (tree[this.rightKey] === null) {
          tree[this.rightKey] = this.emptyNode(x)
          return
        } else {
          tree = tree[this.rightKey]
        }
      } else if (x < value) {
        if (tree[this.leftKey] === null) {
          tree[this.leftKey] = this.emptyNode(x)
          return
        } else {
          tree = tree[this.leftKey]
        }
      }
    }
  }

  getMinValue() {
    let tree = this.tree
    while (true) {
      const value = tree[this.valueKey]
      if (tree[this.leftKey] === null) {
        return value
      }
      if (tree[this.leftKey]) {
        tree = tree[this.leftKey]
      }
    }
  }

  getRootValue() {
    return this.tree[this.valueKey]
  }

  getDepth() {
    const max = this.getMaxValue()
    const min = this.getMinValue()
    const maxPath = this.getPath(max).length
    const minPath = this.getPath(min).length
    return maxPath > minPath ? maxPath : minPath
  }

  getMaxValue() {
    let tree = this.tree
    while (true) {
      const value = tree[this.valueKey]
      if (tree[this.rightKey] === null) {
        return value
      }
      if (tree[this.rightKey]) {
        tree = tree[this.rightKey]
      }
    }
  }

  hasValue(x) {
    let tree = this.tree
    if (tree === null) return false
    while (true) {
      if (tree[this.valueKey] === x) {
        return true
      }
      const value = tree[this.valueKey]
      if (x > value) {
        if (tree[this.rightKey] === null) return false
        tree = tree[this.rightKey]
      } else if (x < value) {
        if (tree[this.leftKey] === null) return false
        tree = tree[this.leftKey]
      } else {
        return false
      }
    }
  }

  getTree() {
    return this.tree
  }

  getNode(x) {
    let tree = this.tree
    if (tree === null) return {}
    while (true) {
      const value = tree[this.valueKey]
      if (value === x) {
        return tree
      }
      if (x > value) {
        if (tree[this.rightKey] === null) return false
        tree = tree[this.rightKey]
      } else if (x < value) {
        if (tree[this.leftKey] === null) return false
        tree = tree[this.leftKey]
      } else {
        return {}
      }
    }
  }

  minValueNode(tree) {
    while (true) {
      const value = tree[this.valueKey]
      if (tree[this.leftKey] === null) {
        return tree
      }
      if (tree[this.leftKey]) {
        tree = tree[this.leftKey]
      }
    }
  }

  removeNode(x) {
    const remove = (tree) => {
      if(tree === null) return tree
      const value = tree[this.valueKey]
      if (x > value) {
        tree[this.rightKey] = remove(tree[this.rightKey])
      } else if (x < value) {
        tree[this.leftKey] = remove(tree[this.leftKey])
      } else {
        if (tree[this.leftKey] === null) {
          let temp = tree[this.rightKey]
          return temp
        } else if (tree[this.rightKey] === null) {
          let temp = tree[this.leftKey]
          return temp
        }
        let temp = this.minValueNode(tree[this.leftKey])
        tree[this.valueKey] = temp[this.valueKey]
        tree[this.rightKey] = remove(tree[this.rightKey])
      }
      return tree
    }
    this.tree = remove(this.tree)
  }

  getParent(x) {
    let tree = this.tree
    let parent
    if (tree === null) return {}
    while (true) {
      const value = tree[this.valueKey]
      if (value === x) {
        return parent
      }
      parent = tree
      if (x > value) {
        if (tree[this.rightKey] === null) return false
        tree = tree[this.rightKey]
      } else if (x < value) {
        if (tree[this.leftKey] === null) return false
        tree = tree[this.leftKey]
      } else {
        return {}
      }
    }
  }

  traverseTree(type = 'inorder') {
    let path = []
    switch (type.toLowerCase()) {
      case 'preorder':
        const preorder = (tree) => {
          path.push(tree[this.valueKey])
          if (tree[this.leftKey] !== null) {
            preorder(tree[this.leftKey])
          }
          if (tree[this.rightKey] !== null) {
            preorder(tree[this.rightKey])
          }
        }
        preorder(this.tree)
        return path
      case 'inorder':
        const inorder = (tree) => {
          if (tree[this.leftKey] !== null) {
            inorder(tree[this.leftKey])
          }
          path.push(tree[this.valueKey])
          if (tree[this.rightKey] !== null) {
            inorder(tree[this.rightKey])
          }
        }
        inorder(this.tree)
        return path
      case 'postorder':
        const postOrder = (tree) => {
          if (tree[this.leftKey] !== null) {
            postOrder(tree[this.leftKey])
          }
          if (tree[this.rightKey] !== null) {
            postOrder(tree[this.rightKey])
          }
          path.push(tree[this.valueKey])
        }
        postOrder(this.tree)
        return path
      default:
        return path
    }
  }

  getPath(x) {
    let path = []
    let tree = this.tree
    if(!tree) return path
    while (true) {
      const value = tree[this.valueKey]
      if (x === value) {
        path.push(this.traverseObject(value))
        return path
      }
      if (x > value) {
        path.push(this.traverseObject(value, this.rightKey))
        tree = tree[this.rightKey]
      } else if (x < value) {
        path.push(this.traverseObject(value, this.leftKey))
        tree = tree[this.leftKey]
      } else {
        return []
      }
    }
    return []
  }
}

export default BST
