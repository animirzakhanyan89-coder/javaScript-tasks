"use strict"

//
// function fn(a,b){
//     console.log(this)
//     console.log(a,b)
// }
//
// fn.call({name:"Ani"},10,32)



// constructor function


function Users(){
  this.values=[]

    this.add=function (value){
      this.values.push(value)
    }
    this.destroy=function (id){
      this.values=this.values.filter(res=>res.id!==id)
    }

    this.update=function (id,newValue){
      if(!id || !newValue){
          return;
      }
      this.values.find(res=>res.id===id).name=newValue


    }
    this.save=function (){
      localStorage.setItem('usersList',JSON.stringify(this.values))
    }
    this.load=function (){
      let storage=localStorage.getItem('usersList')

        if(storage){
            this.values=JSON.parse(storage)
        }
    }
}


const userApp=new Users()
userApp.load()
// userApp.add({
//     id:1,
//     name:"Ani"
// })
// userApp.add({
//     id:2,
//     name:"Daniel"
// })
// userApp.add({
//     id:3,
//     name:"Manik"
// })
//
// userApp.update(3,'John')
// userApp.save()
// // userApp.destroy(2)
// console.log(userApp)


const $=s=>document.querySelector(s)

const listEl=$('#list')
userApp.values.forEach(res=>{
    listEl.innerHTML+=`<li>${res.name}</li>`
})

$('#save').onclick=function (){
    let fieldEl=$('#field')
    if(!fieldEl.value){
        return
    }
    let data={
        id:Date.now(),
        name:fieldEl.value
    }
    userApp.add(data)
    listEl.innerHTML+=`<li>${data.name}</li>`
    userApp.save()

    fieldEl.value=''
}













