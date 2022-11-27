function check4(i,j,board){
    if(board[i][j]!==''){
    //check row 
    if(j+4<=board[0].length){
        let isFound=true;
        for(let m=j+1;m<j+4;m++){
             if(board[i][m]!==board[i][j]) {
                isFound=false;
                break;
             }
        }
        if(isFound) return isFound;
    }
    //check col
    if(i+4<=board.length){
        let isFound=true;
        for(let m=i+1;m<i+4;m++){
            if(board[m][j]!==board[i][j]){
                isFound=false;
                break;
            }
        }
        if(isFound) return isFound;
    }
   
    //check diagonal
    if(i+4<=board.length&&j+4<board[0].length){
        let isFound=true;
        for(let m=1;m<4;m++){
            if(board[i+m][j+m]!==board[i][j]){
                isFound=false;
                break;
            }
        }
        if(isFound) return isFound;
    }


    //check cross diagonal
    if(i+4<=board.length&&j>=3){
        let isFound=true;
        for(let m=1;m<4;m++){
            if(board[i+m][j-m]!==board[i][j]){
                isFound=false;
                break;
            }
        }
        if(isFound) return isFound;
    }
    }
    return false;
}   

export const checkGame = (board) => {
    for(var i=0;i<board.length;i++){
        for(var j=0;j<board[i].length;j++){
            if(check4(i,j,board)) return true;
        }
    }
    return false;
}