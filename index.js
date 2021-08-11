let currentPlayer = 'X'
let counter = 0
let gameActive = true
let gameState = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ]

const winCombos = [
  // horizontal win combos
  [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6],
  [7, 8, 9, 10], [8, 9, 10, 11], [9, 10, 11, 12], [10, 11, 12, 13],
  [14, 15, 16, 17], [15, 16, 17, 18], [16, 17, 18, 19], [17, 18, 19, 20],
  [21, 22, 23, 24], [22, 23, 24, 25], [23, 24, 25, 26], [24, 25, 26, 27],
  [28, 29, 30, 31], [29, 30, 31, 32], [30, 31, 32, 33], [31, 32, 33, 34],
  [35, 36, 37, 38], [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41],
  // vertical win combos
  [0, 7, 14, 21], [7, 14, 21, 28], [14, 21, 28, 35], 
  [1, 8, 15, 22], [8, 15, 22, 29], [15, 22, 29, 36],
  [2, 9, 16, 23], [9, 16, 23, 30], [16, 23, 30, 37],
  [3, 10, 17, 24], [10, 17, 24, 31], [17, 24, 31, 38],
  [4, 11, 18, 25], [11, 18, 25, 32], [18, 25, 32, 39],
  [5, 12, 19, 26], [12, 19, 26, 33], [19, 26, 33, 40],
  [6, 13, 20, 27], [13, 20, 27, 34], [20, 27, 34, 41],
  // diagonal win combos
  [14, 22, 30, 38], [7, 15, 23, 31], [15, 23, 31, 39],
  [0, 8, 16, 24], [8, 16, 24, 32], [16, 24, 32, 40],
  [1, 9, 17, 25], [9, 17, 25, 33], [17, 25, 33, 41],
  [2, 10, 18,26], [10, 18, 26, 34], [3, 11, 19, 27],
  [3, 9, 15, 21], [4, 10, 16, 22], [10, 16, 22, 28],
  [5, 11, 17, 23], [11, 17, 23, 29], [17, 23, 29, 35],
  [6, 12, 18, 24], [12, 18, 24, 30], [18, 24, 30, 36],
  [13, 19, 25, 31], [19, 25, 31, 37], [20, 26, 32, 38]
]



let boxes = document.querySelectorAll('.cell');
// let startPosition = 
function checkForWin () {
  // make array with all of x indices and make array with all of o indices
  // loop through win combos and for each win combo check every index in win combo if that includes the 
  // 
  let xArr = []
  let oArr = []
  for (let i = 0; i < gameState.length; i++) {
    if (gameState[i] === "X") {
      xArr.push(i)
    }else if (gameState[i] === "O") {
      oArr.push(i)
    }
  } 
  
  for (let j = 0; j < winCombos.length; j++) {
    if (xArr.includes(winCombos[j][0]) && xArr.includes(winCombos[j][1]) && xArr.includes(winCombos[j][2]) && xArr.includes(winCombos[j][3])) {
      console.log("X wins")
    }
    if (oArr.includes(winCombos[j][0]) && oArr.includes(winCombos[j][1]) && oArr.includes(winCombos[j][2]) && oArr.includes(winCombos[j][3])) {
      console.log("O wins")
    }
  }
  console.log(xArr, oArr)
}


for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', function handleClick(event) {
    if (event.target.innerText === "X" || event.target.innerText === "O") {
      
    } else {
      if (player === "O") {
        event.target.innerText = "O";
        gameState[i] = "O"
        checkForWin()
        player = "X";
      } else {
        event.target.innerText = "X";
        gameState[i] = "X"
        checkForWin()
        player = "O";
      }
    }
    console.log(gameState)
    console.log(i)
  })
}







