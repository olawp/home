import * as React from 'react';
import { FC } from 'react';
import GenericStack from '../DataStructures/Stack';

const Stack: FC = () => {
  const stack = new GenericStack();

  for (let i = 0; i < 100; i++) {
    stack.push(Math.floor(Math.random() * 100000));
  }

  return (
    <>
      <h1>Stack</h1>
      <p>{stack.stack}</p>
    </>
  );
};

export default Stack;
