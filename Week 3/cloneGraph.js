// from solutions
var cloneGraph = function (node) {
  const visited = new Array();

  if (node == null) {
    return node;
  }

  return cloneHelper(node, visited);
};

var cloneHelper = function (node, visited) {
  // console.log(visited, node.val)
  const newNode = new Node(node.val);

  visited[node.val] = newNode;

  for (const neighbor of node.neighbors) {
    if (!visited[neighbor.val]) {
      const newNeighbor = cloneHelper(neighbor, visited);
      newNode.neighbors.push(newNeighbor);
    } else {
      const newNeighbor = visited[neighbor.val];
      newNode.neighbors.push(newNeighbor);
    }
  }
  return newNode;
};
