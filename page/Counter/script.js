const $=s=>document.querySelector(s)
let count=0
const counterEl=$('#counter')

if(localStorage['anulik']){
    count= +localStorage['anulik']
    counterEl.innerHTML=count
}
$('#decrement').onclick=function (e){
    count--
    counterEl.innerHTML=count
    document.body.style.background='red'
}
$('#increment').onclick=function (e){
    count++
    counterEl.innerHTML=count
    document.body.style.background='blue'
}
$('#plus2').onclick=function (e){
    count=count+2
    counterEl.innerHTML=count
    document.body.style.background='green'
}
$('#plus10').onclick=function (e){
    count=count+10
    counterEl.innerHTML=count
    document.body.style.background="#6366f1"
}
$('#save-btn').onclick=function (e){
    document.body.style.background='#22c55e'

    localStorage['anulik']=count
}
counterEl.ondblclick=function (e){
    count=0
    counterEl.innerHTML=count
}