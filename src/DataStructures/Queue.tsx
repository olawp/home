/*
	While this queue realistically will never be used with anything other than numbers, il make it generic
	This queue is implemented using an array and uses the built in array operations pop and push.
	I might change this up later, but the builtin functions are probably faster than my possible implementation

	The stack can be initialized like this. It can either be generic like this:

	const stack = new GenericStack();
	or you can specify the type, like this: 

	const numStack = new GenericStack<number>();
*/

interface IQueue<T> {
  enqueue(element: T): void;
  dequeue(): T | undefined;
  size(): number;
  isEmpty(): boolean;
  toString(): void;
}

class GenericQueue<T> implements IQueue<T> {
  // Public for now
  public queue: T[] = [];

  constructor(private length: number = Infinity) {}

  enqueue(element: T) {
    if (this.size() === this.length) {
      throw Error('The queue is full');
    }
    this.queue.push(element);
  }

  dequeue(): T | undefined {
    return this.queue.shift();
  }

  size(): number {
    return this.queue.length;
  }

  isEmpty(): boolean {
    return this.size() == 0;
  }

  toString(): void {
    this.queue.forEach((element) => {
      console.log(element);
    });
  }
}

export default GenericQueue;
