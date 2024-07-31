let question = document.querySelectorAll(".faqBtn")
let answers=document.querySelectorAll(".answer")

question.forEach((item, index) => {
    item.addEventListener("click", (event) => {
        answers.forEach((answer, answerIndex)=>{
            if(index != answerIndex){
                answer.classList.add("hidden")
            }
        })
        answers[index].classList.toggle("hidden")
    })
});