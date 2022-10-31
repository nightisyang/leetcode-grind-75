// https://leetcode.com/problems/implement-trie-prefix-tree/
var Trie = function () {
  this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
// from solutions
// https://leetcode.com/problems/implement-trie-prefix-tree/solutions/58870/concise-javascript-solution/
Trie.prototype.insert = function (word) {
  let node = this.root;

  for (let i = 0; i < word.length; i++) {
    // node is an object with a key word[i] and value word[i] or an empty object
    // ******* this works because objects in Javascript are passed as reference *******
    // reassigning node does not change the value of node, but moves node further into the nested array, think of it as moving node.next
    // {a: {} }
    // {a: {p: {}}} ==> node is now referencing the inner object node[p]
    // node = node[word[i]] = node[word[i]] || {}
    // also written as

    if (!node[word[i]]) {
      //key -----> value
      node[word[i]] = {};

      // reassigning node with the key node[word[i]] and value of an empty array
      node = node[word[i]];
    } else {
      //key -----> value
      node[word[i]] = node[word[i]];
      node = node[word[i]];
    }

    if (i === word.length - 1) {
      node.isTerminal = true;
    }
  }
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word, isPrefix) {
  let node = this.root;
  for (let c of word) {
    if (!node[c]) return false;
    node = node[c];
  }
  return isPrefix || !!node.isTerminal;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  return this.search(prefix, true);
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
