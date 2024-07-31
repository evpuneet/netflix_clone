let start = document.querySelector("#start")
let gameStatus = true;
start.addEventListener("click", () => {
    if (gameStatus) {
        
        let main = document.querySelector("#main")
        let bubble = document.querySelector(".bubble")
        let scoreBoard = document.querySelector("#scoreBoard")
        scoreBoard.textContent = 0
        let kalaHitVal
        let kalaHit
        let time = 30

        let timeOut = () => {

            let timeint = setInterval(() => {
                if (time > 0) {
                    time--
                    gameStatus = false;
                    document.querySelector("#timeVal").textContent = time
                }
                else {
                    // why i have to make variable called time int
                    clearInterval(timeint)
                    gameStatus = true
                    main.innerHTML =
                        `<h1 class="d-flex justify-content-center text-success align-items-center text-center" id="gameOver">Game Over <br/></h1>
            <h1 class="d-flex justify-content-center text-success align-items-center text-center">Score - ${scoreBoard.textContent}</h1>
            `
                }
            }, 1000);
        }

        let bubbleMaker = () => {
            main.innerHTML = ``
            for (var i = 1; i <= 96; i++) {
                main.innerHTML += `
    <button class="text-white d-flex justify-content-center align-items-center bubble" >
        <h5 class="m-0">${Math.ceil(Math.random() * 10)}</h5>
    </button>`
            }
        }

        let hitler = () => {
            kalaHit = document.querySelector("#kalaHit")
                .textContent = Math.ceil(Math.random() * 10)
            kalaHitVal = kalaHit
        }

        let score = () => {
            main.addEventListener("click", (details) => {
                console.log(Number(details.target.textContent))
                if (Number(details.target.textContent) === kalaHitVal) {
                    scoreBoard.textContent = Number(scoreBoard.textContent) + 10
                    hitler()
                    bubbleMaker()
                }
            })

        }


        hitler()
        score()
        timeOut()
        bubbleMaker()
    }

})





