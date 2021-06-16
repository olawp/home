// The node containing the data is just created as a interface/type, dont really need an Node class for this usecase.
// It not that fond of the number or null typing here, but im pretty sure i need it
// Methods are public for now, will change later

// NOTE: Is is correct using <T> here?
interface BSTNode<T> {
  value: number;
  left: BSTNode<number> | null;
  right: BSTNode<number> | null;
  parent: BSTNode<number> | null;
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

  add(value: number): boolean {
    if (value == null || value == undefined) {
      return false;
    }

    if (this.insertNode(this.createNode(value)) !== null) {
      this.size++;
      return true;
    }

    return false;
  }

  insertNode(node: BSTNode<number>): BSTNode<number> | null {
    let parent: BSTNode<number> | null = null;
    let current = this.root;
    while (current !== null) {
      const compare = this.compare(node.value, current.value);

      if (compare === 0) {
        return null;
      } else if (compare < 0) {
        parent = current;
        current = current.left;
      } else {
        parent = current;
        current = current.right;
      }
    }

    node.parent = parent;

    if (parent === null) {
      this.root = node;
    } else if (this.compare(node.value, parent.value) < 0) {
      parent.left = node;
    } else {
      parent.right = node;
    }
    return node;
  }

  search(value: number): number | undefined {
    const element = this.searchNode(this.root, value);

    if (element === null) {
      return undefined;
    }

    return element.value;
  }

  searchNode(
    node: BSTNode<number> | null,
    value: number
  ): BSTNode<number> | null {
    let compare = 1;

    while (node !== null && compare !== 0) {
      compare = this.compare(value, node.value);
      if (compare < 0) {
        node = node.left;
      } else if (compare > 0) {
        node = node.right;
      }
    }

    return node;
  }

  removeAll(): void {
    this.root = null;
    this.size = 0;
  }

  isEmpty(): boolean {
    return this.size == 0;
  }

  getSize(): number {
    return this.size;
  }

  // Simple number comparing
  compare(a: number, b: number) {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  }

  // This feels kinda eh, but i don't think I can do something like this:(insertNode(new BSTNode(x, null, null, null)))
  createNode(value: number): BSTNode<number> {
    return {
      value: value,
      left: null,
      right: null,
      parent: null
    };
  }
}

export default BinarySearchTree;

/*
//TODO: 
contains
search
remove

inorder
preorder
postorder

minValue
maxValue

height

transplant

*/
