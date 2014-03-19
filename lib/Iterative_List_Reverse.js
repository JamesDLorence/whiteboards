function reverse(list) {
  function f(oldList, newList) {
    if (oldList === null) {
      return newList;
    }
      newList = {head: oldList.head, tail: newList};
      return f(oldList.tail, newList);
  }
  return f(list, null);
}

var myList = {head: 1, tail: {head: 2, tail: {head: 3, tail: null}}};

reverse(myList);
