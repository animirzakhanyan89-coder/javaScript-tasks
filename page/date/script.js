const personLists = [
    {id: 1, name: "Arno", birthday: "1987-12-24", die: "2025-12-20"},
    {id: 2, name: "Robin", birthday: "1963-02-04", die: "2024-09-01"},
    {id: 3, name: "Jack", birthday: "2001-03-03", die: null},
    {id: 4, name: "Elizabeth", birthday: "1995-08-23", die: null},
    {id: 5, name: "Sean", birthday: "1980-09-23", die: "2006-02-16"},
    {id: 6, name: "Liam", birthday: "1983-07-15", die: null},
    {id: 7, name: "Sophia", birthday: "1990-05-28", die: "2015-03-10"},
    {id: 8, name: "Emma", birthday: "2007-11-10", die: null},
    {id: 9, name: "Oliver", birthday: "1974-01-05", die: "2023-07-20"},
    {id: 10, name: "Ava", birthday: "1998-06-25", die: null},
    {id: 11, name: "Mason", birthday: "1985-03-14", die: "2010-12-31"},
    {id: 12, name: "Isabella", birthday: "1991-10-20", die: null},
    {id: 13, name: "Jacob", birthday: "1967-02-12", die: "2018-08-07"},
    {id: 14, name: "Emily", birthday: "2002-04-18", die: null},
    {id: 15, name: "Lucas", birthday: "1996-08-11", die: null},
    {id: 16, name: "Mia", birthday: "1979-12-30", die: "2014-05-15"},
    {id: 17, name: "Noah", birthday: "1989-03-19", die: null},
    {id: 18, name: "Charlotte", birthday: "1994-07-02", die: null},
    {id: 19, name: "Elijah", birthday: "2000-09-08", die: null},
    {id: 20, name: "Amelia", birthday: "1981-06-12", die: "2008-01-22"},
    {id: 21, name: "James", birthday: "1975-11-30", die: "2016-09-13"},
    {id: 22, name: "Evelyn", birthday: "1988-10-05", die: null},
    {id: 23, name: "Logan", birthday: "1993-01-14", die: null},
    {id: 24, name: "Lily", birthday: "2006-04-27", die: null},
    {id: 25, name: "Benjamin", birthday: "1976-08-18", die: "2021-11-05"},
    {id: 26, name: "Ella", birthday: "2003-05-03", die: null},
    {id: 27, name: "Henry", birthday: "1984-02-17", die: null},
    {id: 28, name: "Aiden", birthday: "1997-12-08", die: null},
    {id: 29, name: "Scarlett", birthday: "1978-09-25", die: "2022-10-30"},
    {id: 30, name: "Victoria", birthday: "1992-11-15", die: null},
    {id: 31, name: "Matthew", birthday: "1982-01-01", die: "2019-07-12"},
    {id: 32, name: "Layla", birthday: "2004-06-21", die: null},
    {id: 33, name: "Harper", birthday: "2008-03-09", die: null},
    {id: 34, name: "Jack", birthday: "1977-12-22", die: "2020-06-25"},
    {id: 35, name: "Liam", birthday: "1999-08-01", die: null},
    {id: 36, name: "Zoe", birthday: "1990-04-04", die: null},
    {id: 37, name: "Chloe", birthday: "1986-10-11", die: null},
    {id: 38, name: "Dodosh", birthday: "1973-02-27", die: "2025-12-20"},
    {id: 39, name: "Ryan", birthday: "1980-07-30", die: null},
    {id: 40, name: "Abigail", birthday: "2005-01-19", die: null},
];
const $ = s => document.querySelector(s)

function print(values) {
    let kpi = {
        count: values.length,
        die: 0,
        ageSum: 0,
        yang:{
            name:'',
            age:0
        },
        old:{
            name:'',
            age:0
        },
    }


    $('#tbody').innerHTML = values.map(res => {
        if (res.die) {
            kpi.die++
        }
        let age = getYear(res.birthday)
        kpi.ageSum += age
        if(kpi.yang.age===0 ||  kpi.yang.age>age){
            kpi.yang.age=age
            kpi.yang.name=res.name
        }
        if (kpi.old.age<age){
            kpi.old.age=age
            kpi.old.name=res.name

        }

        return `<tr>
                            <td class="mono text-muted">${res.id}</td>
                            <td class="fw-bold">${res.name}</td>
                            <td class="mono">${res.birthday}</td>
                            <td><span class="pill ${res.die ? 'dead' : ''}">● ${res.die ? 'Մահացած' : '-'}</span></td>
                            <td class="text-end mono">${age}</td>
                            <td class="text-end mono">${getLifeDay(res)}</td>
                            <td class="text-end mono">${stayDays(res.birthday)}</td>
                            <td class="text-end mono">${dieDay(res.die)}</td>
                        </tr>`


    })
    updateKpi(kpi)
}

function getYear(date) {
    let d = new Date(date)
    let now = new Date()
    return now.getFullYear() - d.getFullYear()

}

print(personLists)

function getLifeDay(val) {
    let endTime
    if (val.die) {
        let d = new Date(val.die)
        endTime = d.getTime()
    } else {
        endTime = Date.now()
    }
    let birthday = new Date(val.birthday)
    let bGetTime = birthday.getTime()
    let distance = endTime - bGetTime
    return parseInt(distance / (1000 * 3600 * 24) / 365)
}

function stayDays(val) {
    let birthDay = new Date(val + ' 00:01')
    let today = new Date()


    let nextBirthday = new Date(today.getFullYear(), birthDay.getMonth(), birthDay.getDate())
    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1)

    }

    let deff = nextBirthday.getTime() - today.getTime()
    return (Math.ceil(deff / (1000 * 3600 * 24)))

}

function dieDay(val) {
    if (!val) {
        return '-'
    }
    let date = new Date(val + ' 00:01')
    let difernce = Date.now() - date
    return Math.ceil(difernce / (1000 * 3600 * 24))
}

$('#searchInput').oninput = function (e) {
    let peopleList = personLists.filter(res => res.name.toLowerCase().includes(e.target.value.toLowerCase()))
    print(peopleList)
}
$('#monthSelect').oninput = function (e) {
    if (e.target.value === '') {
        return print(personLists)
    }
    let month = personLists.filter(res => {
        let day = new Date(res.birthday)
        return ((day.getMonth() + 1) === +e.target.value)
    })

    print(month)
}
$('#sortSelect').oninput = function (e) {
    if (e.target.value === 'age_asc') {
        personLists.sort((a, b) => a.birthday.localeCompare(b.birthday))
    } else if (e.target.value === 'age_desc') {
        personLists.sort((a, b) => b.birthday.localeCompare(a.birthday))
    } else if (e.target.value === 'name_asc') {
        personLists.sort((a, b) => a.name.localeCompare(b.name))
    } else if (e.target.value === 'nextbday_asc') {
        let values = personLists.filter(res => {
            let d = new Date()
            let current = new Date(res.birthday)
            let bday = new Date(d.getFullYear(), current.getMonth(), current.getDate())

            d.setDate(d.getDate() + 10)


            return (parseInt((d - bday) / (1000 * 3600 * 24)) < 10)
        })
        return print(values)
    } else if (e.target.value === 'died_recent') {
        let val = personLists.filter(res => {
            if (!res.die) {
                return false;
            }
            return dieDay(res.die) < 10
        })
        return print(val)
    }
    print(personLists)
}

$('#onlyDeadSwitch').onchange = function (e) {
    let die = personLists.filter(res => {
        if (e.target.checked) {
            return res.die
        }
        return true

    })

    print(die)

}

function updateKpi(value) {
    $('#kpiTotal').innerHTML = value.count
    $('#kpiDead').innerHTML = value.die
    $('#kpiAlive').innerHTML = value.count-value.die
    $('#kpiAvgYears').innerHTML = parseInt(value.ageSum/value.count)
    $('#todayText').innerHTML=new Date().toLocaleDateString()
    $('#youngestText').innerHTML=`${value.yang.name} (${value.yang.age})`
    $('#oldestText').innerHTML=`${value.old.name} (${value.old.age})`
}

$('#btnRecalc').onclick=function (e){
   let q= $('#searchInput').value
   let month= $('#monthSelect').value
   let onlyDeadSwitch= $('#onlyDeadSwitch').checked

    let values=personLists.filter(res=>(
        (!q ||res.name.toLowerCase().includes(q))
        &&
        (!month || (new Date(res.birthday).getMonth()+1)=== +month)
        &&
        (!onlyDeadSwitch || res.die)
    ))
    print(values)


}
function updateTen(){
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
  $('#decadeGroups').innerHTML=Object.entries(peopleList).map(arr=>{
      return`<span class="pill"><span class="mono">${arr[0]}</span> · ${arr[1]}</span>`
  }).join('')
}

updateTen()






