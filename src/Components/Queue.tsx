import * as React from 'react';
import { FC } from 'react';
import GenericQueue from '../DataStructures/Queue';

const Queue: FC = () => {
  const queue = new GenericQueue();
  console.log('Empty? ' + queue.isEmpty());

  for (let i = 0; i < 10; i++) {
    queue.enqueue(Math.floor(Math.random() * 100000));
  }

  return (
    <>
      <h1>Queue</h1>
      <p>{queue.queue}</p>
    </>
  );
};

export default Queue;
