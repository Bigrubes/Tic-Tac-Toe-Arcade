//All the HTML DOM commands
const title = document.createElement('h1')
title.classList.add('title')
const ttt= document.createTextNode("")
title.appendChild(ttt)
const div = document.createElement('div')
title.appendChild(div)
div.classList.add("Tic")
const tic = document.createTextNode("Tic")
div.appendChild(tic)
const div1 = document.createElement('div')
title.appendChild(div1)
div1.classList.add("Tac")
const tac = document.createTextNode("Tac")
div1.appendChild(tac)
const div2 = document.createElement('div')
title.appendChild(div2)
div2.classList.add("Toe")
const toe = document.createTextNode("Toe")
div2.appendChild(toe)
const form = document.createElement('form')
const script = document.querySelector('script')
document.body.insertBefore(title,script)
document.body.insertBefore(form,script)
const inputX = document.createElement('input')
const inputO = document.createElement('input')
form.append('Player "X":', inputX)
form.append('Player "O":', inputO)
const playerX = document.getElementsByTagName("input")[0].setAttribute("id","playerX")
const player0 = document.getElementsByTagName("input")[1].setAttribute("id","playerO")
const type1 = document.getElementsByTagName("input")[0].setAttribute("type","text")
const type2 = document.getElementsByTagName("input")[1].setAttribute("type","text")
document.getElementById("playerX").placeholder = "Player 1 name here:";
document.getElementById("playerO").placeholder = "Player 2 name here:";
const table = document.createElement('table')
document.body.insertBefore(table,script)
const tableId = document.getElementsByTagName('table')[0].setAttribute("id", "app")
table.classList.add("board")
const div3 = document.createElement("div")
document.body.insertBefore(div3,script)
const div3Id = document.getElementsByTagName("div")[3].setAttribute("id","playerTurn")
const divText = document.createTextNode('Click "Instructions" button to begin')
div3.appendChild(divText)
const div4 = document.createElement("div")
document.body.insertBefore(div4,script)
const div4Id = document.getElementsByTagName("div")[4].setAttribute("id","text")
const button = document.createElement("button")
document.body.insertBefore(button,script)
const button2 = document.createElement("button")
document.body.insertBefore(button2,script)
const button3 = document.createElement("button")
document.body.insertBefore(button3,script)
const buttonId = document.getElementsByTagName('button')[0].setAttribute("id", "start")
const buttonText = document.createTextNode("Start")
button.appendChild(buttonText)
const buttonId2 = document.getElementsByTagName('button')[1].setAttribute("id", "resetButton")
const buttonText2 = document.createTextNode("Reset")
button2.appendChild(buttonText2)
const buttonId3 = document.getElementsByTagName('button')[2].setAttribute("id", "infoButton")
const buttonText3 = document.createTextNode("Instructions")
button3.appendChild(buttonText3)
const list = document.createElement("ol")
document.body.insertBefore(list,script)
const list3Id = document.getElementsByTagName("ol")[0].setAttribute("id","instructions")
const olText = document.createTextNode("")
list.appendChild(olText)
const li = document.createElement("li")
const liText = document.createTextNode('Type player names in "Player X" and "Player O"')
li.appendChild(liText)
list.appendChild(li)
const li2 = document.createElement("li")
const li2Text = document.createTextNode('Press "Start" Button to randomly select who goes first')
li2.appendChild(li2Text)
list.appendChild(li2)
const li3 = document.createElement("li")
const li3Text = document.createTextNode('Begin Game, first to get 3 in a row wins')
li3.appendChild(li3Text)
list.appendChild(li3)
const li5 = document.createElement("li")
const li5Text = document.createTextNode('Press "Reset" button to play again')
li5.appendChild(li5Text)
list.appendChild(li5)

//allows functionality of buttons
const gameButton = document.querySelector('#resetButton');
const gameButton2 = document.querySelector('#start')
const gameButton3 = document.querySelector('#infoButton')

//make the rows for the 3x3 board
function makeRow(){
    const row = document.createElement('tr')
    row.classList.add('row')
    for (let i = 0;i<3;i++) {//for loop for each row to make 3 cells per row
        const cell = document.createElement('td')
        cell.classList.add('cell')
        row.appendChild(cell)
    }
    table.appendChild(row)
}
makeRow()//make 3 rows to make 3X3 tic tac toe board
makeRow()
makeRow()

const board = Array.from(document.querySelectorAll('.cell'))//selects all the cells and turns it into an array
const cell0 = document.getElementsByTagName("td")[0].setAttribute("id", "cell0")//set id to each cell
const cell1 = document.getElementsByTagName("td")[1].setAttribute("id", "cell1")
const cell2 = document.getElementsByTagName("td")[2].setAttribute("id", "cell2")
const cell3 = document.getElementsByTagName("td")[3].setAttribute("id", "cell3")
const cell4 = document.getElementsByTagName("td")[4].setAttribute("id", "cell4")
const cell5 = document.getElementsByTagName("td")[5].setAttribute("id", "cell5")
const cell6 = document.getElementsByTagName("td")[6].setAttribute("id", "cell6")
const cell7 = document.getElementsByTagName("td")[7].setAttribute("id", "cell7")
const cell8 = document.getElementsByTagName("td")[8].setAttribute("id", "cell8")

let turn = Math.floor(Math.random()*2)//generates a number of either 1 or 0
board.forEach(function(cell){
    cell.addEventListener ("click", function(){//for each cell add a click function
        if (cell.textContent){
            return;
        }
        if (turn % 2===0){//modulus 2 allows "X" and "O" rotation, if turn = 0 place an "X" on the cell upon clicking on cell otherwise place an "O"
        move = "X"       
        } else {
        move = "O"; 
        }

        cell.textContent = move;//allows the "X" and "O" to appear in the cells when clicked

       if (move==="X"){
           cell.style.color = "yellow"//css styling that makes the "X" letter a yellow color
       }else{ 
           (move==="O")
           cell.style.color = "blue"//css styling that makes thw "O" letter a blue color
       }
       if (move==="X"){
        cell.style.backgroundColor = "blue"//css styling that makes the background blue once "X" has clicked on a cell
    }else{ 
        (move==="O")
        cell.style.backgroundColor= "yellow"//css styling that makes the background yellow once "O" has clicked on a cell
    }
        turn ++;//rotates back and forth between "X" and "O"

        const playerTurn = document.getElementById('playerTurn')
        const playerOne = document.getElementById('playerX').value//assigns the name of player 1 to a variable playerOne
        const playerTwo = document.getElementById('playerO').value//assigns the name of player 2 to variable playerTwo

        if(turn % 2===0){//allows for rotation of player 1 and player 2 names to show who goes next. 0=playerOne and 1=playerTwo
            playerTurn.textContent = playerOne + " it is your turn"//takes the name variable and adds string to show which player goes next
        } else {
            playerTurn.textContent = playerTwo + " it is your turn"
        }


        winner();//returns a winner, which will be defined in function below
    })
})
function winner(){
    const cell0 = document.getElementById('cell0')//grabs all the cells on the board
    const cell1 = document.getElementById('cell1')
    const cell2 = document.getElementById('cell2')
    const cell3 = document.getElementById('cell3')
    const cell4 = document.getElementById('cell4')
    const cell5 = document.getElementById('cell5')
    const cell6 = document.getElementById('cell6')
    const cell7 = document.getElementById('cell7')
    const cell8 = document.getElementById('cell8')
     if (cell0.textContent && cell1.textContent && cell2.textContent && cell3.textContent && cell4.textContent && cell5.textContent && cell6.textContent && cell7.textContent && cell8.textContent){
        text.textContent = "Tie game, you both lose!"
        playerTurn.textContent = null//grabs all the cells on the board by cell id and if all the cells are played, then the word tie displays in the "text" id
     }

const row1 = Array.from(document.querySelectorAll("#cell0, #cell1, #cell2"))//turns each row into an array of the specified cells.  This will later be used for winning rows on the board.
const row2 = Array.from(document.querySelectorAll("#cell3, #cell4, #cell5"))
const row3 = Array.from(document.querySelectorAll("#cell6, #cell7, #cell8"))

const rows = [row1, row2, row3];//combines all 3 rows into one variable.


const column1 = Array.from(document.querySelectorAll("#cell0, #cell3, #cell6")) //turns each column into an array of the specified cells.  Again it will later be used for winning columns on the board
const column2 = Array.from(document.querySelectorAll("#cell1, #cell4, #cell7"))
const column3 = Array.from(document.querySelectorAll("#cell2, #cell5, #cell8"))


const columns = [column1, column2, column3];//combines all 3 columns into one variable

const diagonal1 = Array.from(//turns diagonal into an array of specified cells
    document.querySelectorAll("#cell0, #cell4, #cell8")
);

const diagonal2 = Array.from(//turns diagonal into an array of specified cells.
        document.querySelectorAll("#cell2, #cell4,#cell6")
);

const diagonals = [diagonal1, diagonal2];//both diagonals are combined into one variable.  This will also be used for the winning diagonals on the board

[rows, columns, diagonals].forEach(function(category){//calls a function (category) for each element in the array (for each of the winning variables)
    // checks each winning combo to see if they are populated with all of the same moves (i.e X or O)
    //
    category.forEach(function(combination){//turns all the winning cominations (rows, columns and diagonals) into function combination.        
        const allX = function(combo){
            for (let i = 0; i < combo.length; i++) {//for loop for winning combinations for "X"
                const currentCell = combo[i];
                if(currentCell.textContent === "O" || currentCell.textContent === "") {//if the cell has an "O" or any other letter/number return the combination as false or not a winning combo, othrwise if the cell has an "X" return the combo at valid                     
                    return false;
                }
            }
                return true;
        }
        const allO = function(combo){
            for (let i = 0; i < combo.length; i++) {
            const currentCell = combo[i];
                if(currentCell.textContent === "X" || currentCell.textContent === "") {//if the cell has an "X" or any other letter/number return the combination as false or not a winning combo, othrwise if the cell has an "O" return the combo at valid 
                    return false;
            }
        }
                return true;
        } 
        wonX = allX(combination)//winning combinations for "X"
        wonO = allO(combination)//winning combinations for "O"
        const playerOne = document.getElementById('playerX').value//takes the user input (player 1 name) of playerX and places it into a varible of PalyerOne
        const playerTwo = document.getElementById('playerO').value//takes the uaer input (player 2 name) of playerO and places it into a varible of PalyerTwo
        const playerTurn = document.getElementById('playerTurn')

        const text = document.getElementById('text')
            if (wonX) {
                text.textContent = "Congratulations " + playerOne + " You Won! "//if "X" wins takes the user input and adds "congratulations you won" to player 1 name.
                playerTurn.textContent = null//once "X" wins no message will be displayed to the user
            }else if (wonO) {
                text.textContent = "Congratulations " + playerTwo + " You Won! "//if "O" wins takes the user input and adds "congratulations you won" to player 2 name.
                playerTurn.textContent = null//once "O" wins no message will be displayed to the user
            } 
       });
   });
}
//event listeners for reset button, start button and instructions buttons
gameButton.addEventListener('click', function () {
    location.reload();//reloads/resets the game
})
gameButton2.addEventListener('click', function () {//picks which player will go first
    const playerOne = document.getElementById('playerX').value
    const playerTwo = document.getElementById('playerO').value
    const playerTurn = document.getElementById('playerTurn')
    const text = document.getElementById('text')
        if (turn===0){
        playerTurn.textContent = playerOne + " " + "will go first"//if turn = 0 then player 1 will go first
        }else{
        playerTurn.textContent = playerTwo + " " + "will go first"//if turn = 1 then player 2 will go first
        }
})
gameButton3.addEventListener('click', function () {//drops down instructins on how to play tic tc toe game
    const info = document.getElementById("instructions")
        if (info.style.display==="block"){//css styling allows the instructions to be diplayed and hidden when clicking on the "instructions button"
            info.style.display = "none"
        }else{
            info.style.display = "block"
        }
})