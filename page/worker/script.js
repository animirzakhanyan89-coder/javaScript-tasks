"use strict"
const $=s=>document.querySelector(s)
let listEl=$('#student-name')
let taskEl=$('#task-title')
let statusEl=$('#status')
let tableEl=$('#table-body')

let count=0
let done=0
let late=0
let notDone=0
let avg=0
$('#btn').onclick=function (e){
    console.log(statusEl.value)


    tableEl.innerHTML+=`
<tr>
                     <td>1</td>
                    <td>${listEl.value}</td>
                    <td>${taskEl.value}</td>
                    <td><span class="status-pill status-${statusEl.value}">${statusEl.options[statusEl.selectedIndex].text}</span></td>
</tr>
                  `


    count++

    if (statusEl.value==="done"){
        done++

    }
    if(statusEl.value==='late'){
        late++
    }
    if(statusEl.value==='not_done'){
        notDone++
    }






kpi()
}
function kpi(){

    $('#stat-total').innerHTML=count
    $('#stat-done').innerHTML=done
    $('#stat-late').innerHTML=late
    $('#stat-not-done').innerHTML=notDone
    $('#stat-completion').innerHTML= +(100/count).toFixed(1)+'%'

}




























