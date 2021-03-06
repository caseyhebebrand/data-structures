var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree.prototype);

  tree.value = value;
  tree.left = null;
  tree.right = null;

  return tree;
};

BinarySearchTree.prototype.insert = function(value) {
  if (this.value === value) {
    throw new RangeError('Tree value already existed.');
  }
  //left child
  if (this.value > value) {
    if (!this.left) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (this.value < value) { //right child
    if (!this.right) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  } 

  if (this.value > value && this.left) {
    return this.left.contains(value);
  } else if (this.right) {
    return this.right.contains(value);
  } else {
    return false;
  }
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  // base case apply cb function on value
  // start at top node
  // use recursion to travel down left side
  // use recursion to travel down right side
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
  
  //// solution using stack
  // var stack = [this];

  // while (stack.length > 0) {
  //   var currentNode = stack.pop();
  //   cb(currentNode.value);
    
  //   if (currentNode.right) {
  //     stack.push(currentNode.right);
  //   }

  //   if (currentNode.left) {
  //     stack.push(currentNode.left);
  //   }    
  // }
};

// .breadthFirstLog() - logs the nodes contained in the tree using a breadth-first approach
BinarySearchTree.prototype.breadthFirstLog = function(cb) {
  //apply callback to root
  var queue = [this];

  while (queue.length > 0) {
    var currentNode = queue.shift();
     
    cb(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
    insert - O(n)
    contains - O(log n) is average; worst case is O(n) for an unbalanced tree
    depthFirstLog - O(n)
 */
