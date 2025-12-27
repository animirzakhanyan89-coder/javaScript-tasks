let cards = ["A", "A", "B", "B", "C", "C", "D", "D"];
const $ = s => document.querySelector(s)
let boardEl = $('#board')
let firstValue
let secondValue
let count=0
$('#restart').onclick = function () {
    count=0
    newGame()
}
let  movesEL=  $('#moves')
function newGame() {
    boardEl.innerHTML = ''
    cards.sort(() => Math.random() - 0.4)
    movesEL.innerHTML=count
    cards.forEach(res => {
        boardEl.innerHTML += `    
    <div class="card" data-value="${res}"></div>`
    })
}

newGame()

boardEl.onclick=function (e){
    if(!e.target.getAttribute('data-value')){
        console.log(e.target)
        return
    }

    if(!firstValue){
        count++
        movesEL.innerHTML=count
        firstValue=e.target
        e.target.innerHTML=e.target.dataset.value
        e.target.classList.add('flipped')
    }else if(!secondValue){
        count++
        movesEL.innerHTML=count
        secondValue=e.target
        e.target.innerHTML=e.target.dataset.value
        e.target.classList.add('flipped')


        if(firstValue.dataset.value===secondValue.dataset.value){

            firstValue.removeAttribute('data-value')
            secondValue.removeAttribute('data-value')
            firstValue=null
            secondValue=null

        }else{
            firstValue.innerHTML=''
            secondValue.innerHTML=''
            firstValue.classList.remove('flipped')
            secondValue.classList.remove('flipped')
            firstValue=null
            secondValue=null
        }
    }


}














