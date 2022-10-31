// https://leetcode.com/problems/accounts-merge/
// from solutions
// https://leetcode.com/problems/accounts-merge/solutions/494151/javascript-solution-dfs/
var accountsMerge = function (accounts) {
  const graph = {};
  const emailObj = {};

  // construct two maps
  // 1. Adjacency list, email: [ +all other email it's connected to]
  // 2. email: name, key-value pair, needed as reference when reconstructing the output array
  for (const email of accounts) {
    const name = email[0];
    const firstEmail = email[1];

    emailObj[firstEmail] = name;

    for (let i = 1; i < email.length; i++) {
      if (!graph[email[i]]) {
        graph[email[i]] = new Set();
      }

      emailObj[email[i]] = name;

      if (i !== 1) {
        graph[firstEmail].add(email[i]);
        graph[email[i]].add(firstEmail);
      }
    }
  }

  const res = [];
  const visited = new Set();

  // perform dfs to find all the connected email and push them into a single array
  // visited set to avoid being stuck in a loop
  function dfs(key) {
    visited.add(key);

    let emails = [key];

    // goes through the adjacency list to find other connections
    // if it hasn't been visited, push all dfs email into array and return it
    graph[key].forEach((val) => {
      if (!visited.has(val)) {
        // recurse here and compile emails, no duplications because of visited check
        emails.push(...dfs(val));
      }
    });

    return emails;
  }

  // call the first dfs here, and reconstruct to required output format
  for (const key in graph) {
    if (!visited.has(key)) {
      const temp = dfs(key);
      temp.sort();
      temp.unshift(emailObj[temp[0]]);
      res.push(temp);
    }
  }
  // console.log(graph);
  // console.log(emailObj);
  // console.log(visited);
  // console.log(res)
  return res;
};
