const cars = [
    { id:1, brand:"BMW", model:"X5", year:2018, fuel:"diesel", mileage:98000, price:34000, status:"active" },
    { id:2, brand:"Mercedes", model:"C200", year:2016, fuel:"petrol", mileage:120000, price:21000, status:"active" },
    { id:3, brand:"Toyota", model:"Prius", year:2014, fuel:"hybrid", mileage:150000, price:12500, status:"sold" },
    { id:4, brand:"Tesla", model:"Model 3", year:2021, fuel:"electric", mileage:40000, price:38000, status:"active" },
    { id:5, brand:"Audi", model:"A6", year:2019, fuel:"diesel", mileage:70000, price:29500, status:"service" },
];

const listElm={
    fuel:'',
    status:'all',
    sortL:''
}


const $=s=>document.querySelector(s)


$('#fuel').oninput=function (e){
    listElm.fuel=e.target.value
    finale()
}
$('#status').oninput=function (e){
    listElm.status=e.target.value
    finale()
}
$('#sort').oninput=function (e){
    listElm.sortL=e.target.value
    finale()

}


function finale(){

    const kpi={
        total:0,
        count:0,
        mileage:0,
        year:0,
        electric:0

    }
   const result=cars.filter(res=>{
       let value=(
           (listElm.fuel===''||res.fuel===listElm.fuel)
           &&(listElm.status==='all'||res.status===listElm.status)
       )

       if(value){
           kpi.count++
           kpi.total+=res.price
           kpi.mileage+=res.mileage
           kpi.year+=res.year
           if(res.fuel==='electric'){
               kpi.electric++
           }


       }

       return value
   })

    if(listElm.sortL==='year.asc'){
        result.sort((a,b)=>a.year-b.year)
    }else if(listElm.sortL==='year.desc'){
        result.sort((a,b)=>b.year-a.year)
    }else if(listElm.sortL==='price.desc'){
        result.sort((a,b)=>b.price-a.price)
    }else if(listElm.sortL==="price.asc"){
        result.sort((a,b)=>a.price-b.price)
    }else if(listElm.sortL==='mileage.asc'){
        result.sort((a,b)=>a.mileage-b.mileage)
    }else if(listElm.sortL==='mileage.desc'){
        result.sort((a,b)=>b.mileage-a.mileage)
    }


    kpiDom(kpi)

    printView(result)

}

finale()
function printView(data){

    const result=data.map(res=>(`
            <tr>
                <td>${res.brand} <b>${res.model}</b></td>
                <td>${res.year}</td>
                <td>${res.mileage} km</td>
                <td>${res.fuel}</td>
                <td>${res.status}</td>
                <td class="text-end">${res.price}</td>
            </tr>
`))

    $('#tbody').innerHTML=result.join(' ')
}








function kpiDom(value){
    $('#kpi-total').innerHTML=value.total
    $('#kpi-mileage').innerHTML= value.mileage/value.count
    $('#kpi-year').innerHTML=parseInt(value.year/value.count)
    $('#kpi-electric').innerHTML=+(100/value.count*value.electric).toFixed(1)+"%"

}






