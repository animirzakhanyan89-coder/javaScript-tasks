'use strict'

function User(){
    this.values=[]


}
User.prototype.add=function (arg){
    this.values.push(arg)
}
User.prototype.update=function (id,val){
    if(id && typeof val==='object'){
        let currentValue=this.values.find(res=>res.id===id)
        if(currentValue){
            Object.keys(val).forEach(key=>{
                if(key!=='id'){
                    currentValue[key]=val[key]
                }

            })

        }
    }




}
User.prototype.destroy=function (id){
    if(id){
     this.values=this.values.filter(res=>res.id!==id)

    }


}



const userApp=new User()
// userApp.add({
//     id:1,
//     name:"Dav",
//     age:45
// })
// userApp.add({
//     id:2,
//     name:"Karen",
//     age:32
// })
// userApp.add({
//     id:3,
//     name:"Lora",
//     age:17
// })
// userApp.add({
//     id:4,
//     name:"Steve",
//     age:43
// })
// userApp.update(2,{
//     name:"Narbe",
//     age:54
// })
// userApp.update(1,{
//     id:44,
//     name:"Mxo",
//
// })
// userApp.destroy(4)

const $=s=>document.querySelector(s)

$('#save').onclick=function (){
    const inputEl=$('#field')

    if(!inputEl.value){
        return
    }
    let data={
        id:Date.now(),
        name:inputEl.value,
        age:43
    }
    userApp.add(data)
    $('#list').innerHTML+=`<li>
${inputEl.value}
<button data-id="${data.id}">delete</button>

</li>`

}

$('#list').onclick=function (e){
    if(e.target.getAttribute('data-id')){
       let id= +e.target.getAttribute('data-id')
        userApp.destroy(id)
        e.target.closest('li').remove()
    }
}


