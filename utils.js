module.exports = 
{ 
    matrixProduct: function (mat1, mat2) {
    let result = [];
    for ( let i = 0; i < mat1.length; i++ ) {
        result[i] = [];
        for ( let j = 0; j < mat2.length; j++ ){
            let sum = 0;
            for ( let m = 0; m < mat1.length; m++ ){
                sum += mat1[i][m] * mat2[m][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
},

sumOfMatrices: function (mat1, mat2) {
    let mat3 = [];
    for (let i = 0; i < mat1.length; i++) {
      mat3[i] = [];
      for (let j = 0; j < mat1.length; j++) {
       mat3[i][j] = mat1[i][j] + mat2[i][j];
      }
    }
    return mat3;
},


sumOfEachRow: function(mat) {
    let arr = [];
    for ( let i = 0; i < mat[0].length; i++ ){
        arr.push(this.sumOfArray(mat[i]));
    }
    return arr;
},

sumOfArray: function(arr){
    let sum = 0;
        for ( let j = 0; j < arr.length; j++ ){
            sum += arr[j]
        }
    return sum; 
},

};