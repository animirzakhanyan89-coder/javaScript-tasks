// server
const base=[
    {
        id:1,
        name:"Ani",
        mail:"Ani@mail.ru",
        psw:'123456'
    },  {
        id:2,
        name:"Karen",
        mail:"Karen@mail.ru",
        psw:'123456'
    },  {
        id:3,
        name:"Artak",
        mail:"Artak@mail.ru",
        psw:'123456'
    },  {
        id:4,
        name:"Nanar",
        mail:"Nanar@mail.ru",
        psw:'123456'
    },
]





function Authorization(){
    this.user=null
}
Authorization.prototype.login=function (login,password){
    let data=base.find(res=>res.mail.toLowerCase()===login.toLowerCase()&&res.psw===password)
    if(data){
        this.user={
            id:data.id,
            name:data.name,
            email:data.mail
        }
        return true
    }else{
        return false
    }
}
Authorization.prototype.register=function (name,mail,password){

    if(!name|| !mail || !password){
        return false
    }
    let data={
        id:Date.now(),
        name:name,
        mail,
        psw:password

    }
    base.push(data)
    this.user={
        id:data.id,
        name,mail
    }

    return true

}

function AA(){
    this.user={
        name:"asdf",
        mail:'sdfvbg'
    }
}

function Account(authInstance) {

    if (!(authInstance instanceof Authorization)) {
        console.log("❌ Ձեր մուտքը արգելված է. Սա Authorization instance չի");
        throw new Error("Access denied");
    }
    //
    if (!authInstance.user) {
        console.log("❌ Դուք login չեք եղել");
        throw new Error("No user logged in");
    }
    //
    this.auth = authInstance.user

}

let authorizationApp=new Authorization()


let newuser=authorizationApp.register('Daniel','daniel@mail.ru','123456')
if(newuser){
    let accountApp=new Account(authorizationApp)
    console.log(accountApp)
}

console.log(newuser)
console.log(base)

// let result=authorizationApp.login('Ani@mail.ru','123456')


// console.log(result)
console.log(authorizationApp)
