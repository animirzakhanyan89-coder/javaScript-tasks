'use strict'
const $=s=>document.querySelector(s)

function Users(){
    this.values=[]
}
Users.prototype.add=function (arg){
    this.values.push(arg)
}
Users.prototype.destroy=function (id){
    this.values=this.values.filter(res=>res.id!==id)
}



const userApp=new Users()
// let data={
//     id:1,
//     name:'Ani',
//     age:'14',
//     state:'student',
//
// }
// userApp.add(data)

// userApp.destroy(1)

$('#btnAdd').onclick=function (){
   let nameEl= $('#name')
    let ageEl=$('#age')
    let statusEl=$('#status')
    let data={
       id:Date.now(),
        name:nameEl.value,
        age:ageEl.value,
        status:statusEl.value
    }
    nameEl.value=''
    ageEl.value=''

    userApp.add(data)
    viewPrint(data)


}
function viewPrint(data){
    $('#userList').innerHTML+=` 
 <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${data.name} (${data.age}) — ${data.status}</span>
            <button class="btn btn-sm btn-outline-light" data-delete="${data.id}">❌</button>
        </li>`
}


$('#userList').onclick=function (e){
    let deleteId=e.target.getAttribute('data-delete')
    if(deleteId){
        userApp.destroy(+deleteId)
        e.target.closest('li').remove()
    }
}