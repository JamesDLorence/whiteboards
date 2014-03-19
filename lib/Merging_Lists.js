function merge(list1, list2) {
  if(list1 === null && list2 === null) {
    return null;
  }
  else if(list1 === null) {
    return list2;
  }
  else if(list2 === null) {
    return list1;
  }
  else if(list1.head < list2.head) {
    return {head: list1.head, tail: merge(list1.tail, list2)};
  }
  else if(list1.head > list2.head) {
    return {head: list2.head, tail: merge(list1, list2.tail)};
  }
  else if(list1.head === list2.head) {
    return {head: list1.head, tail: merge(list1.tail, list2.tail)};
  }
}

var list1 = { head: 1, tail: { head: 3, tail: null } };
var list2 = { head: 2, tail: null };

merge(list1, list2);
