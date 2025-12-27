fetch('http://localhost:3000/list').then(res=>res.json()).then(data=>{
    viewPrint(data)
})



const listEl=document.querySelector('.list')


function viewPrint(lists){
    lists.forEach(val=>{
        listEl.innerHTML+=`<li> #${val.id} ${val.name}</li>`
    })
}


document.querySelector('#save').onclick=function (){
    const name=document.querySelector('#field').value

 fetch("http://localhost:3000/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name })
    }).then(res=>res.json()).then(res=>{

     listEl.innerHTML+=`<li> #${res.id} ${res.name}</li>`
 })


}
