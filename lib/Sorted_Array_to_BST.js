function arrayToBST (arr) {
  var middle = Math.floor(arr.length/2);

  var BST = {};

  if(arr.length === 0) {
    BST.root = null;
    BST.left = null;
    BST.right = null;
  }
  else if (arr.length > 2) {
    BST.root = arr[middle];
    BST.left = arrayToBST(arr.slice(0, middle));
    BST.right = arrayToBST(arr.slice(middle, arr.length));
  }
  else if(arr.length === 2) {
    BST.root = arr[middle];
    BST.left = arrayToBST(arr.slice(0, middle));
    BST.right = null;
  }
  else {
    BST.root = arr[0];
    BST.left = null;
    BST.right = null;
  }
  return BST;
}

var myArr = [1, 2, 3, 4, 5, 6, 7];

arrayToBST(myArr);
