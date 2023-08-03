const gameBoard = {
    array: [],

    updateBoard: function(num, type){
        gameBoard.array[num] = type;
    },

    checkBoard: function(num){
        if(gameBoard.array[num] === undefined){
            return true;
        }
        return false;
    },

    checkFull: function(){
        for(let i = 0; i < 9; i++){
            if(gameBoard.checkBoard(i)){
               return false;
            }
        }
    
        return true;
    }

}

function squareClicked(e){
    switch(e.target.className){
        case "first child":
            if(gameBoard.checkBoard(0) === false){
                return;
            }

            mainModule.divs[0].innerHTML = "X";
            gameBoard.updateBoard(0, "X");
            if(mainModule.checkWin()){
                return;
            }

            if(!gameBoard.checkFull()){
                computerMove();
            }
            
            return;

        case "second child":
            if(gameBoard.checkBoard(1) === false){
                return;
            }

            mainModule.divs[1].innerHTML = "X";
            gameBoard.updateBoard(1, "X");
            if(mainModule.checkWin()){
                return;
            }

            if(!gameBoard.checkFull()){
                computerMove();
            }

            return;
        case "third child":
            if(gameBoard.checkBoard(2) === false){
                return;
            }

            mainModule.divs[2].innerHTML = "X";
            gameBoard.updateBoard(2, "X");
            if(mainModule.checkWin()){
                return;
            }

            if(!gameBoard.checkFull()){
                computerMove();
            }

            return;
        case "fourth child":
            if(gameBoard.checkBoard(3) === false){
                return;
            }

            mainModule.divs[3].innerHTML = "X";
            gameBoard.updateBoard(3, "X");
            if(mainModule.checkWin()){
                return;
            }

            if(!gameBoard.checkFull()){
                computerMove();
            }

            return;
        case "fifth child":
            if(gameBoard.checkBoard(4) === false){
                return;
            }

            mainModule.divs[4].innerHTML = "X";
            gameBoard.updateBoard(4, "X");
            if(mainModule.checkWin()){
                return;
            }

            if(!gameBoard.checkFull()){
                computerMove();
            }

            return;
        case "sixth child":
            if(gameBoard.checkBoard(5) === false){
                return;
            }

            mainModule.divs[5].innerHTML = "X";
            gameBoard.updateBoard(5, "X");
            if(mainModule.checkWin()){
                return;
            }

            if(!gameBoard.checkFull()){
                computerMove();
            }

            return;
        case "seventh child":
            if(gameBoard.checkBoard(6) === false){
                return;
            }

            mainModule.divs[6].innerHTML = "X";
            gameBoard.updateBoard(6, "X");
            if(mainModule.checkWin()){
                return;
            }

            if(!gameBoard.checkFull()){
                computerMove();
            }

            return;
        case "eigth child":
            if(gameBoard.checkBoard(7) === false){
                return;
            }

            mainModule.divs[7].innerHTML = "X";
            gameBoard.updateBoard(7, "X");
            if(mainModule.checkWin()){
                return;
            }

            if(!gameBoard.checkFull()){
                computerMove();
            }

            return;
        case "last child":
            if(gameBoard.checkBoard(8) === false){
                return;
            }

            mainModule.divs[8].innerHTML = "X";
            gameBoard.updateBoard(8, "X");
            if(mainModule.checkWin()){
                return;
            }

            if(!gameBoard.checkFull()){
                computerMove();
            }

            return;
    }
}

function computerMove(){

    let rand = Math.floor(Math.random() * 9);

    while(gameBoard.checkBoard(rand) === false){
        rand = Math.floor(Math.random() * 9);
    }
    
    switch(rand){
        case 0:
            if(gameBoard.checkBoard(0) === false){
                return;
            }

            mainModule.divs[0].innerHTML = "O";
            gameBoard.updateBoard(0, "O");
            mainModule.checkWin();
            return;

        case 1:
            if(gameBoard.checkBoard(1) === false){
                return;
            }

            mainModule.divs[1].innerHTML = "O";
            gameBoard.updateBoard(1, "O");
            mainModule.checkWin();
            return;
        case 2:
            if(gameBoard.checkBoard(2) === false){
                return;
            }

            mainModule.divs[2].innerHTML = "O";
            gameBoard.updateBoard(2, "O");
            mainModule.checkWin();
            return;
        case 3:
            if(gameBoard.checkBoard(3) === false){
                return;
            }

            mainModule.divs[3].innerHTML = "O";
            gameBoard.updateBoard(3, "O");
            mainModule.checkWin();
            return;
        case 4:
            if(gameBoard.checkBoard(4) === false){
                return;
            }

            mainModule.divs[4].innerHTML = "O";
            gameBoard.updateBoard(4, "O");
            mainModule.checkWin();
            return;
        case 5:
            if(gameBoard.checkBoard(5) === false){
                return;
            }

            mainModule.divs[5].innerHTML = "O";
            gameBoard.updateBoard(5, "O");
            mainModule.checkWin();
            return;
        case 6:
            if(gameBoard.checkBoard(6) === false){
                return;
            }

            mainModule.divs[6].innerHTML = "O";
            gameBoard.updateBoard(6, "O");
            mainModule.checkWin();
            return;
        case 7:
            if(gameBoard.checkBoard(7) === false){
                return;
            }

            mainModule.divs[7].innerHTML = "O";
            gameBoard.updateBoard(7, "O");
            mainModule.checkWin();
            return;
        case 8:
            if(gameBoard.checkBoard(8) === false){
                return;
            }

            mainModule.divs[8].innerHTML = "O";
            gameBoard.updateBoard(8, "O");
            mainModule.checkWin();
            return;
    }
}



const mainModule = (() =>{
    const container = document.querySelector(".grid-container");
    const divs = container.querySelectorAll(".child");

    function checkWin(){
        if(gameBoard.array[0] === "X" && gameBoard.array[1] === "X" && gameBoard.array[2] === "X"){
            alert("You Win!");
            location.reload();
            return true;
        }
        if(gameBoard.array[3] === "X" && gameBoard.array[4] === "X" && gameBoard.array[5] === "X"){
            alert("You Win!");
            location.reload();
            return true;
        }
        if(gameBoard.array[6] === "X" && gameBoard.array[7] === "X" && gameBoard.array[8] === "X"){
            alert("You Win!");
            location.reload();
            return true;
        }

        if(gameBoard.array[0] === "X" && gameBoard.array[3] === "X" && gameBoard.array[6] === "X"){
            alert("You Win!");
            location.reload();
            return true;
        }
        if(gameBoard.array[1] === "X" && gameBoard.array[4] === "X" && gameBoard.array[7] === "X"){
            alert("You Win!");
            location.reload();
            return true;
        }
        if(gameBoard.array[2] === "X" && gameBoard.array[5] === "X" && gameBoard.array[8] === "X"){
            alert("You Win!");
            location.reload();
            return true;
        }

        if(gameBoard.array[0] === "X" && gameBoard.array[4] === "X" && gameBoard.array[8] === "X"){
            alert("You Win!");
            location.reload();
            return true;
        }
        if(gameBoard.array[2] === "X" && gameBoard.array[4] === "X" && gameBoard.array[6] === "X"){
            alert("You Win!");
            location.reload();
            return true;
        }


        if(gameBoard.array[0] === "O" && gameBoard.array[1] === "O" && gameBoard.array[2] === "O"){
            alert("You Lose!");
            location.reload();
            return;
        }
        if(gameBoard.array[3] === "O" && gameBoard.array[4] === "O" && gameBoard.array[5] === "O"){
            alert("You Lose!");
            location.reload();
            return;
        }
        if(gameBoard.array[6] === "O" && gameBoard.array[7] === "O" && gameBoard.array[8] === "O"){
            alert("You Lose!");
            location.reload();
            return;
        }

        if(gameBoard.array[0] === "O" && gameBoard.array[3] === "O" && gameBoard.array[6] === "O"){
            alert("You Lose!");
            location.reload();
            return;
        }
        if(gameBoard.array[1] === "O" && gameBoard.array[4] === "O" && gameBoard.array[7] === "O"){
            alert("You Lose!");
            location.reload();
            return;
        }
        if(gameBoard.array[2] === "O" && gameBoard.array[5] === "O" && gameBoard.array[8] === "O"){
            alert("You Lose!");
            location.reload();
            return;
        }

        if(gameBoard.array[0] === "O" && gameBoard.array[4] === "O" && gameBoard.array[8] === "O"){
            alert("You Lose!");
            location.reload();
            return;
        }
        if(gameBoard.array[2] === "O" && gameBoard.array[4] === "O" && gameBoard.array[6] === "O"){
            alert("You Lose!");
            location.reload();
            return;
        }

        if(gameBoard.checkFull()){
            alert("It's a Draw!");
            location.reload();
            return;
        }
    }

    return {
        divs, checkWin
    }
})();

for(i of mainModule.divs){
    i.addEventListener('click', squareClicked);
}



