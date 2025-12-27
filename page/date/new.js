// let dateApp=new Date()

// dateApp.setDate(30)
// dateApp.setHours(23)
// dateApp.setMonth(5)

//
// console.log(dateApp.getDate())
// console.log(dateApp.getDay())
// let monthNameFull = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December"
// ];
//
// console.log(monthNameFull[dateApp.getMonth()],dateApp.getMonth()+1)
// console.log(dateApp.getHours())
// console.log(dateApp.getMinutes())
// console.log(dateApp.getTime())
//
// console.log(dateApp)


let dateApp=new Date('1989-12-16 ')
let your=dateApp.getTime()
let nowTime=Date.now()
let interval=nowTime-your
const sec = Math.floor(interval / 1000);

const years  = Math.floor(sec / (365 * 24 * 3600));
const months = Math.floor((sec % (365 * 24 * 3600)) / (30 * 24 * 3600));
const days   = Math.floor((sec % (30 * 24 * 3600)) / (24 * 3600));
const hours  = Math.floor((sec % (24 * 3600)) / 3600);
const mins   = Math.floor((sec % 3600) / 60);
const secs   = sec % 60;

console.log(`${years} տարի, ${months} ամիս, ${days} օր, ${hours} ժամ, ${mins} րոպե, ${secs} վայրկյան`);




const personLists = [
    { id: 1, name: "Arno", birthday: "1987-09-19", die: "2025-12-20" },
    { id: 2, name: "Robin", birthday: "1963-02-04", die: "2024-09-01" },
    { id: 3, name: "Jack", birthday: "2001-03-03", die: null },
    { id: 4, name: "Elizabeth", birthday: "1995-08-23", die: null },
    { id: 5, name: "Sean", birthday: "1980-09-23", die: "2006-02-16" },
    { id: 6, name: "Liam", birthday: "1983-07-15", die: null },
    { id: 7, name: "Sophia", birthday: "1990-05-28", die: "2015-03-10" },
    { id: 8, name: "Emma", birthday: "2007-11-10", die: null },
    { id: 9, name: "Oliver", birthday: "1974-01-05", die: "2023-07-20" },
    { id: 10, name: "Ava", birthday: "1998-06-25", die: null },
    { id: 11, name: "Mason", birthday: "1985-03-14", die: "2010-12-31" },
    { id: 12, name: "Isabella", birthday: "1991-10-20", die: null },
    { id: 13, name: "Jacob", birthday: "1967-02-12", die: "2018-08-07" },
    { id: 14, name: "Emily", birthday: "2002-04-18", die: null },
    { id: 15, name: "Lucas", birthday: "1996-08-11", die: null },
    { id: 16, name: "Mia", birthday: "1979-12-30", die: "2014-05-15" },
    { id: 17, name: "Noah", birthday: "1989-03-19", die: null },
    { id: 18, name: "Charlotte", birthday: "1994-07-02", die: null },
    { id: 19, name: "Elijah", birthday: "2000-09-08", die: null },
    { id: 20, name: "Amelia", birthday: "1981-06-12", die: "2008-01-22" },
    { id: 21, name: "James", birthday: "1975-11-30", die: "2016-09-13" },
    { id: 22, name: "Evelyn", birthday: "1988-10-05", die: null },
    { id: 23, name: "Logan", birthday: "1993-01-14", die: null },
    { id: 24, name: "Lily", birthday: "2006-04-27", die: null },
    { id: 25, name: "Benjamin", birthday: "1976-08-18", die: "2021-11-05" },
    { id: 26, name: "Ella", birthday: "2003-05-03", die: null },
    { id: 27, name: "Henry", birthday: "1984-02-17", die: null },
    { id: 28, name: "Aiden", birthday: "1997-12-08", die: null },
    { id: 29, name: "Scarlett", birthday: "1978-09-25", die: "2022-10-30" },
    { id: 30, name: "Victoria", birthday: "1992-11-15", die: null },
    { id: 31, name: "Matthew", birthday: "1982-01-01", die: "2019-07-12" },
    { id: 32, name: "Layla", birthday: "2004-06-21", die: null },
    { id: 33, name: "Harper", birthday: "2008-03-09", die: null },
    { id: 34, name: "Jack", birthday: "1977-12-22", die: "2020-06-25" },
    { id: 35, name: "Liam", birthday: "1999-08-01", die: null },
    { id: 36, name: "Zoe", birthday: "1990-04-04", die: null },
    { id: 37, name: "Chloe", birthday: "1986-10-11", die: null },
    { id: 38, name: "Hannah", birthday: "1973-02-27", die: "2017-02-14" },
    { id: 39, name: "Ryan", birthday: "1980-07-30", die: null },
    { id: 40, name: "Abigail", birthday: "2005-01-19", die: null },
];



// console.log(personLists);
// 1. Հաշվել անձանց ապրած տարիների միջին թիվը
// let sum=0
// personLists.forEach(res=>{
//     let now=new Date()
//     let birthday=parseInt(res.birthday)
//     let currentYear=now.getFullYear()
//     if (res.die){
//         currentYear=parseInt(res.die)
//     }
//
//     sum+=currentYear-birthday
//
// })
//
// console.log(sum/personLists.length)

//_______________v2________________________
// let sum=0
// personLists.forEach(res=>{
//     let birthday=year(res.birthday)
//     let currentYear=year()
//     if (res.die){
//         currentYear=year(res.die)
//     }
//
//     sum+=currentYear-birthday
//
// })
// function year(val){
//     let date
// if(val){
//      date=new Date(val)
// }else{
//     date=new Date()
//
// }
//
//     return date.getFullYear()
// }
// let avg=sum/personLists.length
// console.log(parseInt(avg))
// console.log(sum/personLists.length)




// 2. Ստեղծել խմբեր ըստ ծննդյան տասնամյակների

//
// let year="2004"
//
// let mnacord=year%10
// console.log(year-mnacord)
// let peopleList={}
// personLists.forEach(res=>{
//     let year=parseInt(res.birthday)
//     let avg=year%10
//    year=year-avg
//
//     if(!peopleList[year]){
//         peopleList[year]=[]
//     }
//     peopleList[year].push(res)
//
//
//
// })
// console.log(peopleList)
let peopleList={}
personLists.forEach(res=>{
    let year=parseInt(res.birthday)
    let avg=year%10
   year=year-avg

    if(!peopleList[year]){
        peopleList[year]=0
    }
    peopleList[year]++



})
console.log(peopleList)






// 3. Գտնել ամենաերիտասարդ և ամենատարեց մարդուն
//
// let age={
//     min:Infinity,
//     max:0
// }
// personLists.forEach(res=>{
//     let curr=parseInt(res.birthday)
//     let date=new Date()
//     let now=date.getFullYear()
//     let ageYear=now-curr
//
//     if(ageYear>age.max){
//         age.max=ageYear
//     }
//     if (ageYear<age.min){
//         age.min=ageYear
//     }
// })
// console.log(age)








// 4. Սորտավորել ըստ տարիքի
// let list=personLists.toSorted((a,b)=>a.birthday.localeCompare(b.birthday))
// console.log(list)





// 5. Հաշվել ժամանակի տարբերությունը ծննդյան և մահվան միջև
// personLists.forEach(res=>{
//     if(res.die){
//         let curr=parseInt(res.birthday)
//         let die=parseInt(res.die)
//         let dieYear=die-curr
//         console.log(dieYear)
//     }else {
//         console.log('no')
//     }
//
// })

// 6. Հաշվել օրերի քանակը մինչև ամենահաջորդ ծննդյան օր



// personLists.forEach(res=>{
//
//
//     let date=new Date(res.birthday)
//
//        let distance=Date.now()-date.getTime()
//   let day=Math.floor(distance/(1000*60*60*24))
//
//     console.log(day)
// })
// 7. Գտնել ծնված մարդկանց տվյալ ամսվա մեջ
// let num=5
// let list=personLists.filter(res=>{
//     let month=new Date(res.birthday)
//     return month.getMonth()===num
// })
// console.log(list)

//8. Հաշվել մահացած մարդկանց ընդհանուր թիվը
// let result=personLists.filter(res=>res.die)
// console.log(result.length)


// 9․ Հաշվել, թե քանի օր է անցել յուրաքանչյուրի մահվանից

// personLists.forEach(res=>{
//
//     if(res.die){
//         let curr=new Date(res.die)
//         console.log(curr)
//         let currTime=curr.getTime()//1970-2025=> 6
//         let nowTime=Date.now()// 7
//         let distance=nowTime-currTime
//         let day=Math.floor(distance/(1000*60*60*24))
//         console.log(day)
//
//
//
//     }
// })


        //
        // let curr=new Date("2025-10-20 17:00")
        // console.log(curr.getTime()-Date.now())