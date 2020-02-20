/*
Queue Stack

Write a stack. Once you’re done, implement a queue using two stacks to create FIFO behavior. 
The queue should not have any storage separate from its stacks.
*/

var Stack = function () {
  var storage = [];
  var size = 0;

  this.push = function (val) {
    storage.push(val)
    size++
  }

  this.pop = function () {
    if (size) {
      size--
      return storage.pop()
    }
  }

  this.size = function () {
    return size
  }
};

var Queue = function () {
  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function (val) {
    inbox.push(val)
  }

  this.dequeue = function () { }

  this.size = function () { }
};
