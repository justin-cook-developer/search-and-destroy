'use strict';
const { expect } = require('chai');
const LinkedList = require('./linkedlist');
const { isLoop, findLoop } = require('./isloop');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
const emojis = ['🥚', '🐣', '🦅 ', '👾'];

//These LLs have loops!
const test1 = new LinkedList();
test1.addToHead(0);
numbers.forEach(val => test1.addToTail(val));
test1.getNthNode(6).next = test1.getNthNode(3);

const test2 = new LinkedList();
test2.addToHead('z');
letters.forEach(letter => test2.addToTail(letter));
test2.getNthNode(9).next = test2.getNthNode(1);

// This LL has no loop!
const test3 = new LinkedList();
test3.addToHead('📺');
emojis.forEach(el => test3.addToTail(el));

describe('isLoop function', () => {
  // Feel free to write a few tests of your own! :)
  it('returns true if linked list contains a loop', () => {
    expect(isLoop(test1)).to.equal(true);
    expect(isLoop(test2)).to.equal(true);
  });

  it('returns false if linked list contains no loop', () => {
    expect(isLoop(test3)).to.equal(false);
  });
});

describe('findLoop function', () => {
	// getNthNode(1) === arr[0]
  it('returns the node value of node where loop starts if linked list contains a loop', () => {
    expect(findLoop(test1)).to.equal(5);
    expect(findLoop(test2)).to.equal('h');
	});

	it('returns false if there is no loop in list', () => {
		expect(findLoop(test3)).to.equal(false)
	})
});
