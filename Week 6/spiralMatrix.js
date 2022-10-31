// https://leetcode.com/problems/spiral-matrix/description/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const result = [];
  if (!matrix.length) {
    return result;
  }

  let startRow = 0;
  let endRow = matrix.length - 1;
  let startCol = 0;
  let endCol = matrix[0].length - 1;
  let dir = 0;

  while (startRow <= endRow && startCol <= endCol) {
    switch (dir) {
      case 0: //RIGHT
        for (let col = startCol; col <= endCol; col++) {
          result.push(matrix[startRow][col]);
        }
        startRow++;
        break;
      case 1: //DOWN
        for (let row = startRow; row <= endRow; row++) {
          result.push(matrix[row][endCol]);
        }
        endCol--;
        break;
      case 2: //LEFT
        for (let col = endCol; col >= startCol; col--) {
          result.push(matrix[endRow][col]);
        }
        endRow--;
        break;
      case 3: //UP
        for (let row = endRow; row >= startRow; row--) {
          result.push(matrix[row][startCol]);
        }
        startCol++;
        break;
    }
    dir = (dir + 1) % 4;
  }

  return result;
};

// from solution
// java
/*
public List<Integer> spiralOrder(int[][] matrix) {
    List<Integer> result = new LinkedList<Integer>();
    if(matrix == null || matrix.length == 0) return result;
    
    int startRow = 0, endRow = matrix.length-1;
    int startCol = 0, endCol = matrix[0].length - 1;
    int dir = 0;
    
    while(startRow <= endRow && startCol <= endCol) {
        switch(dir) {
            case 0: //RIGHT
                for(int col = startCol; col <= endCol; col++)
                    result.add(matrix[startRow][col]);
                startRow++;
                break;
            case 1: //DOWN
                for(int row = startRow; row <=endRow; row++) 
                    result.add(matrix[row][endCol])    ;
                endCol--;
                break;
            case 2://LEFT
                for(int col = endCol; col >= startCol; col --) 
                    result.add(matrix[endRow][col]);
                endRow--;
                break;
            case 3://UP
                for(int row = endRow; row >= startRow; row--)
                    result.add(matrix[row][startCol]);
                startCol++;  
                break;
        }                                   
        dir = (dir+1)%4;                                                            
    }
    
    return result;
}

*/
