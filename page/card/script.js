'use strict'
const $=s=>document.querySelector(s)
const list={
    name:'',
    number:'',
    exp:'',
    cvv:''
}
$('#nameInput').oninput=function (e){
    $('#cardNamePreview').innerHTML=e.target.value

    let regexp=/^[a-z]{2,}\s[a-z]{2,}$/i
    if(regexp.test(e.target.value)){
        list.name=e.target.value
    }



}
$('#cardNumberInput').oninput=function (e){
    if(e.target.value.length>16){
        e.target.value=e.target.value.slice(0,-1)
    }
    $('#cardNumberPreview').innerHTML=e.target.value
    let regexp=/^\d{16}$/
    if(regexp.test(e.target.value)){
        list.number=e.target.value
    }


}




$('#expInput').oninput=function (e){
    const value = e.target.value;

    // 0–2 թիվ  → "M", "MM"


    const reg1 = /^(0[1-9]|1[0-2])$/;
    // const reg1 = /^\d{0,2}$/;01-02-11-12, 0

    // 2 թիվ, slash, հետո մինչև 2 թիվ  → "MM/", "MM/Y", "MM/YY"
    const reg2 = /^\d{2}\/\d{0,2}$/;
if(value.length>=2){
    if (!(reg1.test(value) || reg2.test(value)))  {
        e.target.value = value.slice(0, -1); // ջնջում ենք վերջին սիմվոլը
    }
}

    $('#cardExpPreview').innerHTML=e.target.value
    let regexp=/^\d{2}\/\d{2}$/
    if(regexp.test(e.target.value)){
        list.exp=e.target.value
    }

}
$('#cvvInput').oninput=function (e){
    let regexp=/^\d{0,3}$/


    if(!regexp.test(e.target.value)){
        e.target.value = e.target.value.slice(0, -1);
        return
    }



    if(e.target.value===3){
        list.cvv=e.target.value
    }

}
$('#btn').onclick=function (e){
    console.log(list)
}