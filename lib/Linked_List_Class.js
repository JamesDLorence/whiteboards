module.exports.LinkedList = function () {
  var newList = null;

// Use below list for testing
/*  var newList = {
     valu: 'a', nex: {
       valu: 'b', nex: {
         valu: 'c', nex : {
           valu: 'd', nex: null
         }
       }
     }
   };
*/

  function constructor() {}
  constructor.prototype.getList = function() {
    return newList;
  };

  constructor.prototype.push = function(element) {
    newList = {
      valu: element, nex: newList
    };
  };

  constructor.prototype.pop = function(pos) {
    function f(list) {
      if(pos === 0) {
        list = {
          valu: list.nex.valu,
          nex: list.nex.nex
        };
        return list;
      }
      else {
        pos--;
        list = {
          valu: list.valu,
          nex: f(list.nex)
        };
        return list;
      }
    }
    newList = f(newList);
  };

  constructor.prototype.isElement = function(element) {
    function f(list, element) {
      if(list === null) {
        return false;
      }
      else if(list.valu === element) {
        return true;
      }
      else {
        return f(list.nex, element);
      }
    }
    return f(newList, element);
  };

  constructor.prototype.size = function() {
    var counter = 0;
    function f(list) {
      if(list === null) {
        return counter;
      }
      else {
        counter++;
        return f(list.nex);
      }
    }
    return f(newList);
  };

  constructor.prototype.empty = function() {
    if(newList === null) {
      return true;
    }
    else {
      return false;
    }
  };

  return new constructor();
};
