/*
  While this stack realistically will never be used with anything other than numbers, il make it generic
  This stack is implemented using an array and uses the built in array operations pop and push.
  I might change this up later, but the builtin functions are probably faster than my possible implementation

  The stack can be initialized like this. It can either be generic like this:

  const stack = new GenericStack();
  or you can specify the type, like this: 

  const numStack = new GenericStack<number>();

*/

interface IStack<T> {
  push(element: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  size(): number;
  isEmpty(): boolean;
  toString(): void;
}

class GenericStack<T> implements IStack<T> {
  // Public for now, as i probably want to print the stack.
  public stack: T[] = [];

  // Infinity as length also seems like a nono, but i want to do some testing with larger numbers
  constructor(private length: number = Infinity) {}

  push(element: T): void {
    if (this.size() === this.length) {
      throw Error('The stack is full');
    }

    this.stack.push(element);
  }

  pop(): T | undefined {
    return this.stack.pop();
  }

  peek(): T | undefined {
    return this.stack[this.size() - 1];
  }

  size(): number {
    return this.stack.length;
  }

  isEmpty(): boolean {
    return this.size() == 0;
  }

  // This should probably not log it, but this works for now
  toString(): void {
    this.stack.forEach((element) => {
      console.log(element);
    });
  }
}

export default GenericStack;
