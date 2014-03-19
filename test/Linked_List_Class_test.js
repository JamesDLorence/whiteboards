var expect = require('chai').expect;
var LinkedList = require('../lib/Linked_List_Class.js').LinkedList;

describe ('Linked List', function() {
  'use strict';
  var list = new LinkedList();


  describe('constructor', function() {
  /*  it('can insert element at head of list', function() {
      list.push('z');
      expect((list.getList()).valu).to.be.equal('z');
    });
    it('can remove valu at if given a position in list', function() {
      list.pop(1);
      expect(list.getList().nex.nex.valu).to.be.equal('c');
    });
    it('can check if given element occurs in list', function() {
      expect(list.isElement('c')).to.be.equal(true);
      expect(list.isElement(5)).to.be.equal(false);
    });
    it('can return the size of the list', function() {
      expect(list.size()).to.be.equal(4);
    }); */
    it('can tell me if list is empty', function() {
      expect(list.empty()).to.be.equal(true);
    });
  });
});
