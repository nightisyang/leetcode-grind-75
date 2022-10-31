// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
// from solutions
var lowestCommonAncestor = function (root, p, q) {
  function walk(node, p, q) {
    if (!node) {
      return null;
    }

    // pre
    // recurse

    // values are on the right
    if (p.val > node.val && q.val > node.val) {
      return walk(node.right, p, q);
    }

    // values are on the right
    if (p.val < node.val && q.val < node.val) {
      return walk(node.left, p, q);
    }

    // post
    // values are on both right and left, i.e this is the common ancestor
    return node;
  }

  return walk(root, p, q);
};

// naive approach
/*
var lowestCommonAncestor = function(root, p, q) {

    let commonAncestor = root

    function findingPQ (node, p, q) {

        if(!node) {
            return
        }

        // pre
        if(node.val === p.val) {
            let leftFindOther = findOther(node.left, q.val) ? true : false
            let rightFindOther = findOther(node.right, q.val) ? true : false

            if (leftFindOther || rightFindOther) {
                commonAncestor = node
                foundBoth = true
                return
            } else {
                return true
            }
        }

        if(node.val === q.val) {
            let leftFindOther = findOther(node.left, p.val) ? true : false
            let rightFindOther = findOther(node.right, p.val) ? true : false

            if (leftFindOther || rightFindOther) {
                commonAncestor = node
                foundBoth = true
                return
            } else {
                return true
            }
        }


        // recurse
        let findOneLeft = findingPQ(node.left, p, q) ? true : false;
        let findOneRight = findingPQ(node.right, p, q) ? true : false;

        // post
        if(findOneLeft && findOneRight) {
            commonAncestor = node
            foundBoth = true
        }

        if(findOneLeft) {
            return true
        }

        if(findOneRight) {
            return true
        }

        return false
    
    }

    function findOther(node, x) {
        if(!node) {
            return
        }

        // pre
        if(node.val === x) {
            return true
        }

        // recurse
        let findLeft = findOther(node.left, x) ? true : false
        let findRight = findOther(node.right, x) ? true : false

        // post
        if(findLeft || findRight) {
            return true
        } 
        
        return false
    }

    findingPQ(root, p, q)
    return commonAncestor
};
*/
