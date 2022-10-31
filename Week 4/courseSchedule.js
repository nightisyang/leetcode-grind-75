// https://leetcode.com/problems/course-schedule/
// from solutions
// https://leetcode.com/problems/course-schedule/solutions/236109/keep-it-simple-dfs/
// it's a graph problem, essentially looking if the graph is cyclical
// if it is, it's not possible to complete all the courses
var canFinish = function (numCourses, prerequisites) {
  const graph = new Map();
  const visiting = new Set();
  const visited = new Set();

  for (const [v, e] of prerequisites) {
    if (graph.has(v)) {
      let edges = graph.get(v);
      edges.push(e);
      graph.set(v, edges);
    } else {
      graph.set(v, [e]);
    }
  }

  for (const [v, e] of graph) {
    if (dfs(v, graph, visited, visiting)) {
      return false;
    }
  }

  return true;
};

function dfs(v, graph, visited, visiting) {
  visiting.add(v);

  let edges = graph.get(v);

  if (edges) {
    for (const edge of edges) {
      if (visited.has(edge)) {
        continue;
      }

      // if this is true, it's cyclical
      if (visiting.has(edge)) {
        return true;
      }

      // if other edges are also a prereq for this edge
      if (dfs(edge, graph, visited, visiting)) {
        return true;
      }
    }
  }

  visiting.delete(v);
  visited.add(v);
  return false;
}
