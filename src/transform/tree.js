const { toArrNum } = require("./array");

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function toTree(str) {
  const arr = toArrNum(str);

  const headVal = arr.shift();

  if (headVal === null || headVal === undefined) {
    return null;
  }
  const root = new TreeNode(headVal);
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();
    const val1 = arr.shift();
    if (val1 !== null && val1 !== undefined) {
      node.left = new TreeNode(val1);
      queue.push(node.left);
    }
    const val2 = arr.shift();
    if (val2 !== null && val2 !== undefined) {
      node.right = new TreeNode(val2);
      queue.push(node.right);
    }
  }

  return root;
}
function toTreeStr(root) {
  if (!root) {
    return "";
  }
  const queue = [root];
  let result = root.val;

  while (queue.length) {
    const node = queue.shift();
    if (node) {
      if (node.left) {
        queue.push(node.left);
        result += "," + node.left.val;
      } else if (node.left === null) {
        result += ",null";
      }
    }
    if (node) {
      if (node.right) {
        queue.push(node.right);
        result += "," + node.right.val;
      } else if (node.right === null) {
        result += ",null";
      }
    }
  }

  return result.substr(0, result.search(/\d(?=((?!\d).)*$)/g) + 1);
}

function toBST(arr) {
  const sortedArrayToBST = function (nums, start = 0, end = nums.length, mid) {
    return start === end
      ? null
      : ((mid = start + ((end - start) >> 1)),
        new TreeNode(
          nums[mid],
          sortedArrayToBST(nums, start, mid),
          sortedArrayToBST(nums, mid + 1, end)
        ));
  };
  const res = sortedArrayToBST(arr);

  return res;
}

module.exports = {
  TreeNode,
  toTree,
  toTreeStr,
  toBST,
};
