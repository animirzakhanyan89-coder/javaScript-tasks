let lists = [
    // ----- Existing 10 items -----
    {
        id: 1, name: "Arman", exit: false, age: 43, height: 178, birthplace: "Yerevan",
        car: "Hyundai Elantra", accountBalance: 1250000, maritalStatus: "single",
        children: 0, isEmployed: true
    },
    {
        id: 2, name: "Mariam", exit: false, age: 28, height: 165, birthplace: "Gyumri",
        car: null, accountBalance: 890000, maritalStatus: "married",
        children: 1, isEmployed: true
        ,
    },
    {
        id: 3, name: "Hayk", exit: true, age: 31, height: 182, birthplace: "Vanadzor",
        car: "Toyota Camry", accountBalance: 350000, maritalStatus: "married",
        children: 2, isEmployed: true
    },
    {
        id: 4, name: "Ani", exit: false, age: 19, height: 160, birthplace: "Sevan",
        car: null, accountBalance: 42000, maritalStatus: "single", children: 0,
        isEmployed: false
    },
    {
        id: 5, name: "David", exit: false, age: 16, height: 175, birthplace: "Stepanakert",
        car: "Lada Priora", accountBalance: 65000, maritalStatus: "single",
        children: 0, isEmployed: true
    },
    {
        id: 6, name: "Nare", exit: false, age: 24, height: 167, birthplace: "Abovyan",
        car: "Mazda 3", accountBalance: 210000, maritalStatus: "single",
        children: 0, isEmployed: true
    },
    {
        id: 7, name: "Gevorg", exit: false, age: 16, height: 170, birthplace: "Hrazdan",
        car: null, accountBalance: 37000, maritalStatus: "single",
        children: 2, isEmployed: false
    },
    {
        id: 8, name: "Sona", exit: true, age: 35, height: 163, birthplace: "Kapan",
        car: "Nissan Juke", accountBalance: 40000, maritalStatus: "married",
        children: 3, isEmployed: false
    },
    {
        id: 9, name: "Tigran", exit: false, age: 29, height: 180, birthplace: "Artashat",
        car: "Mercedes C200", accountBalance: 520000, maritalStatus: "married",
        children: 1, isEmployed: true
    },
    {
        id: 10, name: "Lilit", exit: false, age: 21, height: 168, birthplace: "Dilijan",
        car: null, accountBalance: 75000, maritalStatus: "single",
        children: 0, isEmployed: false
    },

    // ----- Added 10 NEW items -----
    {
        id: 11, name: "Karine", exit: false, age: 33, height: 162, birthplace: "Echmiadzin",
        car: "Kia Rio", accountBalance: 185000, maritalStatus: "married",
        children: 1, isEmployed: true
    },
    {
        id: 12, name: "Gor", exit: true, age: 27, height: 183, birthplace: "Charentsavan",
        car: null, accountBalance: 92000, maritalStatus: "single",
        children: 0, isEmployed: false
    },
    {
        id: 13, name: "Ella", exit: false, age: 30, height: 158, birthplace: "Armavir",
        car: "Honda Civic", accountBalance: 310000, maritalStatus: "married",
        children: 2, isEmployed: true
    },
    {
        id: 14, name: "Vahram", exit: false, age: 40, height: 176, birthplace: "Gavar",
        car: "BMW 320", accountBalance: 890000, maritalStatus: "married",
        children: 3, isEmployed: true
    },
    {
        id: 15, name: "Lia", exit: true, age: 22, height: 161, birthplace: "Spitak",
        car: null, accountBalance: 15000, maritalStatus: "single",
        children: 0, isEmployed: false
    },
    {
        id: 16, name: "Arsen", exit: false, age: 36, height: 185, birthplace: "Ijevan",
        car: "Lexus RX350", accountBalance: 1400000, maritalStatus: "married",
        children: 2, isEmployed: true
    },
    {
        id: 17, name: "Tatev", exit: false, age: 26, height: 166, birthplace: "Yeghvard",
        car: "Volkswagen Golf", accountBalance: 265000, maritalStatus: "single",
        children: 0, isEmployed: true
    },
    {
        id: 18, name: "Samvel", exit: false, age: 45, height: 181, birthplace: "Alaverdi",
        car: "Toyota RAV4", accountBalance: 780000, maritalStatus: "married",
        children: 4, isEmployed: true
    },
    {
        id: 19, name: "Rima", exit: false, age: 31, height: 164, birthplace: "Masis",
        car: null, accountBalance: 56000, maritalStatus: "single",
        children: 1, isEmployed: false
    },
    {
        id: 20, name: "Narek", exit: true, age: 20, height: 177, birthplace: "Kasakh",
        car: "VAZ 2107", accountBalance: 22000, maritalStatus: "single",
        children: 0, isEmployed: true
    },{
        id: 21,
        name: "Elina",
        exit: false,
        age: 32,
        height: 164,
        birthplace: "Artik",
        car: "Hyundai Tucson",
        accountBalance: 345000,
        maritalStatus: "married",
        children: 1,
        isEmployed: true
    },
    {
        id: 22,
        name: "Rafael",
        exit: false,
        age: 38,
        height: 179,
        birthplace: "Ararat",
        car: null,
        accountBalance: 125000,
        maritalStatus: "single",
        children: 0,
        isEmployed: false
    },
    {
        id: 23,
        name: "Silva",
        exit: true,
        age: 27,
        height: 160,
        birthplace: "Martuni",
        car: "Ford Fiesta",
        accountBalance: 47000,
        maritalStatus: "single",
        children: 1,
        isEmployed: true
    },
    {
        id: 24,
        name: "Ashot",
        exit: false,
        age: 50,
        height: 182,
        birthplace: "Berd",
        car: "Mercedes E300",
        accountBalance: 1620000,
        maritalStatus: "married",
        children: 3,
        isEmployed: true
    },
    {
        id: 25,
        name: "Milena",
        exit: false,
        age: 23,
        height: 167,
        birthplace: "Hrazdan",
        car: null,
        accountBalance: 52000,
        maritalStatus: "single",
        children: 0,
        isEmployed: true
    },
    {
        id: 26,
        name: "Arthur",
        exit: false,
        age: 41,
        height: 185,
        birthplace: "Gyumri",
        car: "Toyota Corolla",
        accountBalance: 298000,
        maritalStatus: "married",
        children: 2,
        isEmployed: true
    },
    {
        id: 27,
        name: "Marine",
        exit: true,
        age: 36,
        height: 162,
        birthplace: "Sisian",
        car: "Renault Megane",
        accountBalance: 88000,
        maritalStatus: "married",
        children: 2,
        isEmployed: false
    },
    {
        id: 28,
        name: "Eduard",
        exit: false,
        age: 30,
        height: 175,
        birthplace: "Abovyan",
        car: null,
        accountBalance: 41000,
        maritalStatus: "single",
        children: 0,
        isEmployed: true
    },
    {
        id: 29,
        name: "Tamara",
        exit: false,
        age: 34,
        height: 170,
        birthplace: "Vanadzor",
        car: "Mazda 6",
        accountBalance: 335000,
        maritalStatus: "married",
        children: 2,
        isEmployed: true
    },
    {
        id: 30,
        name: "Karen",
        exit: false,
        age: 22,
        height: 180,
        birthplace: "Yerevan",
        car: "Opel Astra",
        accountBalance: 67000,
        maritalStatus: "single",
        children: 0,
        isEmployed: false
    }
];


const filter = {
    isCar: false,
    children: null,
    isEmployed: null,
    isMarital:null,
    isExit: null,
    ageMin: 0,
    ageMax: 65,
    city:null

}

const $ = (s) => document.querySelector(s)
const listEl = $('.list')

printView(lists)

function printView(data) {
    listEl.innerHTML = ''
    data.forEach((info) => {
        listEl.innerHTML += ` 
 <div class="card">
        <h3>${info.name}</h3>
        <p><span>City</span> ${info.birthplace}</p>
        <p><span>Age</span> ${info.age}</p>
        <p>Marital <span>${info.maritalStatus==='single' ? 'ամուսնացած է':'չամուսնացած է'}</span></p>
        <p>exit <span>${info.exit ? 'լքել':'Չլքել'}</span></p>
        <p>car <span>${info.car ?? 'Չունի'}</span></p>
        <p>Աշխատանք <span>${info.isEmployed ? 'ունի' : 'Չունի'}</span></p>
        <p>Երեխա <span>${info.children || 'Չունի'}</span></p>
        <p>accountBalance <span>${info.accountBalance}</span></p>
    </div>`

    })
}


$('#hasCar').oninput = function (e) {
    filter.isCar = e.target.checked

    filterList()

}
$('#children').oninput = function (e) {
    filter.children = e.target.value === 'all' ? null : +e.target.value

    filterList()

}
$('#isEmployed').oninput = function (e) {
    filter.isEmployed = e.target.value === 'all' ? null : Boolean(+e.target.value)
    filterList()
}
$('#isExit').oninput=function (e){
    filter.isExit=e.target.value==='all'?null:Boolean(+e.target.value)
    filterList()
}
$('#maritalStatus').oninput=function (e){
    filter.isMarital=e.target.value==='all'?null:e.target.value
    filterList()
}
$('#birthplace').oninput=function (e){
    filter.city=e.target.value==='all'?null:e.target.value
    filterList()
}
$('#minAge').oninput=function (e){
    filter.ageMin= +e.target.value
    filterList()
}
$('#maxAge').oninput=function (e){
    filter.ageMax= +e.target.value
    filterList()
}
function filterList() {
    const data = lists.filter(res => (
               (!filter.isCar || res.car)
            && (filter.children === null || res.children === filter.children)
            && (filter.isEmployed === null || res.isEmployed === filter.isEmployed)
        &&(filter.isExit===null || res.exit===filter.isExit)
        &&(filter.isMarital===null || res.maritalStatus===filter.isMarital)
        &&(filter.city===null || res.birthplace===filter.city)
        &&(!filter.ageMin || res.age>=filter.ageMin)
        &&(!filter.ageMax || res.age<=filter.ageMax)

        )
    )

    printView(data)
}


//է։Գտի՛ր՝ կա՞ արդյոք գոնե մեկ անչափահաս
// let result=lists.some(res=>res.age<21)
// console.log(result)

//Գտի՛ր առաջին օգտագործողին, balance > 10000
// let balance=lists.find(res=>res.accountBalance>10000)
// console.log(balance)

//Ի՞նչ ինդեքս ունի առաջինը, ում balance-ը հավասար է 0-ի (եթե չկա՝ պետք է ստանաս -1)
// let balanceIndex=lists.findIndex(res=>res.accountBalance===0)
// console.log(balanceIndex)

// Գոյություն ունի՞ գոնե մեկը, ով աշխատում է, բայց մեքենա չունի։
// let car=lists.find(res=>res.isEmployed&&!res.car)
// console.log(car)

// Կա՞ գոնե մեկը, ով 40+ տարիքով է և չի աշխատում, բայց ունի մեքենա։
// let age=lists.some(res=>res.age>40 && !res.isEmployed&&res.car)
// console.log(age)

//Գտի՛ր առաջին ամուսնացած, բայց չաշխատող օգտատիրոջը
// let result=lists.find(res=>res.maritalStatus==='married'&&!res.isEmployed)
// console.log(result)

//Ի՞նչ ինդեքս ունի առաջինը, ում անունը սկսվում է “A”-ով և ունի մեքենա։
// let result=lists.findIndex(res=>res.name[0]==='A'&& res.car)
//     console.log(result)

//Ստուգի՛ր՝ բոլո՞ր աշխատողները 18-ից բարձր են։
// let result=lists.filter(res=>res.isEmployed)
// console.log(result.every(res=>res.age>17))

// Կա՞ մեկը, ով միաժամանակ isEmployed === true և isMarried === true և balance >= 500000
// let result=lists.some(res=>res.isEmployed&&res.maritalStatus&&res.accountBalance>=50000)
// console.log(result)

// Քանի՞ հոգի կա, ովքեր քաղաքում են "Yerevan", աշխատում են, և balance ≥ 200000.
// let result=lists.filter(res=>res.birthplace==='Yerevan'&&res.accountBalance>=20000)
// console.log(result.length)

//Քանի՞ ամուսնացած օգտատեր կա ընդհանուր.
// let result=lists.filter(res=>res.maritalStatus==='married')
// console.log(result.length)

//Հաշվի՛րա աշխատողների ընդհանուր balance-ի գումարը.
// let result=lists.reduce((previousValue,currentValue)=>{
//     if(currentValue.isEmployed){
//         return previousValue+currentValue.accountBalance
//     }
//     return previousValue
// },0)
// console.log(result)


// Հաշվի՛ր երեխաների ընդհանուր քանակը այն օգտատերերի համար, որոնք չեն աշխատում և balance < 100000.
// let result=lists.reduce((prev,res)=>{
//     if(!res.isEmployed&&res.accountBalance<100000){
//         return prev+res.children
//     }
//     return  prev
// },0)
// console.log(result)

//Վերադարձրու այն օգտատերերը, որոնց անունը գոնե 5 սիմվոլ է և ունի մեծատառ “A” կամ “M”։
// let result=lists.find(res=>res.name.length>=5&&(res.name.includes('A')||res.name.includes('M')))
// console.log(result)

// Հայտնիր բոլոր օգտատերերին, որոնք կամ (age ≥ 30 և ունի մեքենա) կամ (չեն աշխատում և balance < 100000)։
// let result=lists.find(res=>(res.age>=30&&res.car)||(!res.isEmployed&&res.accountBalance<100000))
// console.log(result)


// age>20 ev age<40 avto amusnacac chlini ev lini yerevanic
// let result=lists.filter(res=>res.age>20&&res.age<40&&res.car&&res.maritalStatus==='single'&&res.birthplace==='Yerevan')
// console.log(result)


// ### 🔹 20 տրամաբանական պահանջ
// 1. Տարիքը լինի 20-ից մեծ և 40-ից փոքր, ունենա մեքենա, չլինի ամուսնացած։
// let result=lists.filter(res=>res.age>20&&res.age<40&&res.car&&res.maritalStatus==='single')
// console.log(result)
// 2. Աշխատում է, բայց չունի մեքենա։
// let result=lists.find(res=>res.isEmployed&&!res.car)
// console.log(result)
// 3. Ամուսնացած է, բայց չի աշխատում։
// let result=lists.find(res=>res.maritalStatus==='married'&&!res.isEmployed)
// console.log(result)
// 4. Ունի մեքենա և բալանսը 1,000,000-ից ավել է։
// let result=lists.find(res=>res.car&&res.accountBalance>1000000)
// console.log(result)
// 5. Չունի մեքենա, բայց աշխատում է և բալանսը 200,000-ից ավել է։
// let result=lists.filter(res=>!res.car&&res.isEmployed&&res.accountBalance>200000)
// console.log(result)
// 6. Տարիքը փոքր է 18-ից և չի աշխատում։
// let result=lists.find(res=>res.age<18&&!res.isEmployed)
// console.log(result)
// 7. Աշխատում է և ամուսնացած է, բայց չունի մեքենա։
// let resul=lists.filter(res=>res.isEmployed&&res.maritalStatus==='married'&&!res.car)
// console.log(resul)
// 8. Տարիքը մեծ է 40-ից և ունի մեքենա։
// let result=lists.find(res=>res.age>40&&res.car)
// console.log(result)
// 9. Տարիքը փոքր է 25-ից և balance-ը փոքր է 100,000-ից։
// let result=lists.find(res=>res.age<25&&res.accountBalance<100000)
// console.log(result)
// 10. Ամուսնացած է, ունի մեքենա և balance-ը փոքր է 500,000-ից։
// let result=lists.find(res=>res.maritalStatus==='married'&&res.car&&res.accountBalance<500000)
// console.log(result)
// 11. Չի աշխատում, բայց ունի մեքենա։
// let result=lists.find(res=>!res.isEmployed&&res.car)
// console.log(result)
// 12. Տարիքը մեծ է 30-ից, ամուսնացած չէ և balance > 300,000։
// let result=lists.filter(res=>res.age>30&&res.maritalStatus==='single'&&res.accountBalance>300000)
// console.log(result)
// 13. Աշխատում է, բայց balance-ը փոքր է 100,000-ից։
// let result=lists.find(res=>res.isEmployed&&res.accountBalance<100000)
// console.log(result)
// 14. Ունի մեքենա և աշխատում է, բայց տարիքով 30-ից փոքր է։
// let result=lists.filter(res=>res.car&&res.isEmployed&&res.age<30)
// console.log(result)
// 15. Տարիքը 25–35-ի սահմաններում է և ամուսնացած չէ։
// let result=lists.filter(res=>res.age>25&&res.age<35&&res.maritalStatus==='single')
// console.log(result)
// 16. Չի աշխատում և չունի մեքենա։
// let result=lists.find(res=>!res.isEmployed&&!res.car)
// console.log(result)
// 17. Ամուսնացած է, աշխատում է, բայց balance-ը փոքր է 200,000-ից։
// let result=lists.filter(res=>res.maritalStatus==='married'&&res.isEmployed&&res.accountBalance<200000)
// console.log(result)
// 18. Տարիքը մեծ է 45-ից և չի աշխատում։
// let result=lists.filter(res=>res.age>45&&!res.isEmployed)
// console.log(result)
// 19. Տարիքը փոքր է 20-ից և ունի մեքենա։
// let result=lists.find(res=>res.age<20&&res.car)
// console.log(result)
// 20. Աշխատում է, ունի մեքենա, բայց ամուսնացած չէ։
// let result=lists.find(res=>res.isEmployed&&res.car&&res.maritalStatus==='single')
// console.log(result)
















