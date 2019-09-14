'use strict';

const checkForwardLoop = (linkedlist, returning = false) => {
  const visitedNodes = new Map();

  let node = linkedlist.head;

  while (node) {
    visitedNodes.set(node, true);

    if (visitedNodes.has(node.next)) {
      if (returning) {
        return node;
      } else {
        return true;
      }
    } else {
      node = node.next;
    }
  }

  return false;
};

const checkReverseLoop = (linkedlist, returning = false) => {
  const visitedNodes = new Map();

  let node = linkedlist.tail;

  while (node) {
    visitedNodes.set(node, true);

    if (visitedNodes.has(node.previous)) {
      if (returning) {
        return node;
      } else {
        return true;
      }
    } else {
      node = node.previous;
    }
  }

  return false;
};

//Complete this algo
const isLoop = linkedlist => {
  return checkForwardLoop(linkedlist) || checkReverseLoop(linkedlist);
};

const findLoop = linkedlist => {
  const loopStart =
    checkReverseLoop(linkedlist, true) || checkForwardLoop(linkedlist, true);

  return loopStart ? loopStart.value : false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = { isLoop, findLoop };
