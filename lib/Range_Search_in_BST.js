function rangeSearchBST (arr, min, max) {


  if (root >= min && root <= max) {
    return ((rangeSearchBST(arr.left, min, max)).push(arr.root)).concat(rangeSearchBST(arr.right, min, max));
  }
  else if (root >= min && root >= max) {
    return rangeSearchBST(arr.left, min, max).push(arr.root);
  }
  else if (root <= min && root <= max) {
    return rangeSearchBST(arr.right, min, max).unshift(arr.root);
  }
  else {
    var newArr = new Array();
    return newArr;
  }
}

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

rangeSearchBST(arrayToBST(myArr), 2, 7);
