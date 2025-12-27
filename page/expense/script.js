'use strict'
const $ = s => document.querySelector(s)
const lists = []

let data={
    price:2000,
    qty:4,
    tax:10
}
let priceEl = $('#productPrice')
priceEl.value=data.price
const summarySubtotalEl=$('#summarySubtotal')
summarySubtotalEl.innerHTML= data.price * data.qty
priceEl.oninput=function (e){
    data.price= +e.target.value
    summarySubtotalEl.innerHTML=data.price*data.qty
    accountTax()
}
let quantityEl = $('#quantity')
    quantityEl.value=data.qty
accountTax()
quantityEl.oninput=function (e){
    data.qty= +e.target.value
    summarySubtotalEl.innerHTML=data.price*data.qty
    accountTax()

}
let taxEl = $('#taxRate')
taxEl.value=data.tax
$('#summaryTaxRate').innerHTML=data.tax
taxEl.oninput=function (e){
    $('#summaryTaxRate').innerHTML=e.target.value
    data.tax= +e.target.value
    accountTax()

}
function accountTax(){
    let tax=+(data.price*data.qty*data.tax/100).toFixed(1)
    $('#summaryTax').innerHTML= tax
    $('#summaryTotal').innerHTML= (data.price*data.qty+tax).toFixed(1)
}
accountTax()

$('#btnAddToList').onclick = function (e) {
    let nameEl = $('#productName')

    if(!nameEl.value|| !priceEl.value || !quantityEl.value || !taxEl.value){
        alert('empty fields')
        return
    }
     data={
        id:Date.now(),
        name:nameEl.value,
        ...data
    }
    lists.push(data)
    let price=  data.price*data.tax/100
    $('#ordersBody').innerHTML+=`<tr>
                    <td>1</td>
                    <td>${data.name}</td>
                    <td>$${data.price}</td>
                    <td>${data.qty}</td>
                    <td>%${data.tax}</td>
                    <td>$${data.price*data.qty}</td>
                    <td>$${price*data.qty}</td>
                    <td><strong>$${(+data.price +price)*data.qty}</strong></td>
                    <td class="text-end">
                        <button class="btn btn-sm btn-link text-danger p-0" data-id="1765985915445">
                            ✕
                        </button>
                    </td>
                </tr>`
}
