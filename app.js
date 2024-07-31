let boxes = document.querySelectorAll(".click")
let resetBnt = document.querySelector(".resetBnt")
let scoreX = document.querySelector(".scoreOfX")
let scoreO = document.querySelector(".scoreOfO")
let scoreTie = document.querySelector(".scoreOfTie")
let winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let turnO = true
let scoreOfTie = 0
let scoreOfX = 0
let scoreOfO = 0

resetBnt.addEventListener("click", () => {

    for (let box of boxes) {
        box.disabled = false
        box.innerText = ""
    }
    console.log("clicked")

})

let winnerFoundStatus = false
let x = 0
boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turnO) {
            box.innerHTML = "O"
            turnO = false
        }
        else {
            box.innerHTML = "X"
            turnO = true
        }
        box.disabled = true
        console.log("box was clicked")

        checkWinner()
    })


    const checkWinner = () => {
        x++
        for (let pattern of winPattern) {

            let value1 = boxes[pattern[0]].innerText
            let value3 = boxes[pattern[1]].innerText
            let value2 = boxes[pattern[2]].innerText

            if (value1 != "" && value2 != "" && value3 != "") {
                if (value1 == value2 && value2 == value3) {
                    boxes.forEach((boxN) => {
                        boxN.disabled = true;
                    })
                    if (value1 == "X" && value1 == value2 && value2 == value3) {
                        scoreOfX++
                        scoreX.innerText = `Score X - ${scoreOfX}`
                        x = 0


                    }
                    else if(value1 == "O" && value1 == value2 && value2 == value3) {
                        scoreOfO++
                        scoreO.innerText = `Score O - ${scoreOfO}`
                        x = 0
                    }
                    //what could be the condition of the tie?? 
                }
                if (x == 9) {
                    console.log(x)
                    scoreOfTie++
                    scoreTie.innerText = `Tie ${scoreOfTie/8 }`
                }
            }

        }

        

    }


})