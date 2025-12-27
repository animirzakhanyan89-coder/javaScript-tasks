const $=s=>document.querySelector(s)
let base=[]
if(localStorage.getItem('students')){
    base=JSON.parse(localStorage.getItem('students'))
}


base.forEach(data=>{
    $('#table-body').innerHTML+=viewPrint(data)
})
$('#add').onclick=function (e){
    const inputEl=$('#name')
    const scoreElm=$('#score')
    const data={
        id:Date.now(),
        name:inputEl.value,
        score:scoreElm.value
    }
    base.push(data)
    localStorage.setItem('students',JSON.stringify(base))
    $('#table-body').innerHTML+=viewPrint(data)
    kpi(data.score)
}


function viewPrint(data){
    return ` <tr>
                    <td>${data.id}</td>
                    <td>${data.name}</td>
                    <td>${data.score}</td>
                    <td><span class="status-pill ${data.score<60?'status-fail':'status-pass'}">${data.score<60?'Չի հանձնել':'հանձնել'}</span></td>
                </tr>
`
}
let count=0
let pass=0
let fail=0
let sum=0
function kpi(score){
    count++
    if(score<60){
        fail++
    }else {
        pass++
    }
    sum+= +score
    $('#stat-total').innerHTML=count
    $('#stat-pass').innerHTML=pass
    $('#stat-fail').innerHTML=fail
    $('#stat-average').innerHTML= +(sum/count).toFixed(1)
}
