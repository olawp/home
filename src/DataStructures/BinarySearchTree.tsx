// NOTE: Is is correct using <T> here?

interface BSTNode<T> {
  value: number;
  left: BSTNode<number>;
  right: BSTNode<number>;
  parent: BSTNode<number>;
}

class BinarySearchTree {
  private root: BSTNode<number> | null;
  private size: number;
  /* 
    CompareFunction, something to note for later incase i want to make this more generic.
    I think makeing it COMPLETELY generic will be a problem, as i would have to potenially create an compare function for all kinds of tricky datatypes, but some basic ones should be possible. I.e numbers and string.

  */
  constructor() {
    this.root = null;
    this.size = 0;
  }
}

export default BinarySearchTree;

/*

add
clear
isEmpty
size
contains
searchremove
inorder
preorder
postorder
minValue
maxValue
toArray(?) could be useful
height
transplant
remove
createNode

*/
