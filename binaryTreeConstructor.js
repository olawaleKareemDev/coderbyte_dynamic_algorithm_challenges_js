// Tree Constructor
// Have the function TreeConstructor(strArr) take the array of strings stored in strArr, which will contain pairs of integers in the following format: (i1,i2), where i1 represents a child node in a tree and the second integer i2 signifies that it is the parent of i1. For example: if strArr is ["(1,2)", "(2,4)", "(7,2)"], then this forms the following tree:



// which you can see forms a proper binary tree. Your program should, in this case, return the string true because a valid binary tree can be formed. If a proper binary tree cannot be formed with the integer pairs, then return the string false. All of the integers within the tree will be unique, which means there can only be one node in the tree with the given integer value.
// Examples
// Input: ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]
// Output: true
// Input: ["(1,2)", "(3,2)", "(2,12)", "(5,2)"]
// Output: false
// Tags
// arraybinary treedata engineerGoogleFacebookfreevideo


function treeConstructor(strrArr) {

  var parents = {};
  var children = {};
  var valid_regex = /[()]/g;

  for ( var i=0 ; i < strrArr.length; i++){
    var pair = str[i].replace(valid_regex, "").split(",");
    var child = pair[0];
    var parent = pair[1];

    if(parents[parent]){
      parents[parent].push(child);
    }else{
      parents[parent] = [child];
    }
    if(parents[parent].length > 2){
      return false
    }

    if(children[child]){
      return false
    }else{
      children[child] = parent
    }
  }

  return true
}
console.log(TreeConstructor(readLine()))
