const $=s=>document.querySelector(s)
const projects=[
    {
        id:1,
        title:'Students filter',
        to:'page/Barev/index.html',
        image:'assets/images/student.jpeg',
        githubUrl:''
    }, {
        id:2,
        title:'Counter App',
        to:'page/Counter/index.html',
        image:'assets/images/counter.jpg',
        githubUrl:''
    }, {
        id:3,
        title:'Word Scramble',
        to:'page/css-generator/index.html',
        image:'assets/images/generator.jpg',
        githubUrl:''
    },{
        id:4,
        title:'Employees Dashboard',
        to:'page/Employees/index.html',
        image:'assets/images/worker.jpg',
        githubUrl:''
    },{
        id:5,
        title:'X/o',
        to:'page/css-generator/index.html',
        image:'assets/images/generator.jpg',
        githubUrl:''
    },{
        id:6,
        title:'Milionner',
        to:'page/css-generator/index.html',
        image:'assets/images/generator.jpg',
        githubUrl:''
    },{
        id:6,
        title:'Traffic Lights',
        to:'page/css-generator/index.html',
        image:'assets/images/generator.jpg',
        githubUrl:''
    },{
        id:7,
        title:'Css Generator',
        to:'page/css-generator/index.html',
        image:'assets/images/generator.jpg',
        githubUrl:''
    },
]
const projectsEl=$('#projectsGrid')
projects.forEach(obj=>{
    projectsEl.innerHTML+=`
     <article class="project">
                <img src="${obj.image}" class="cover" alt="">
                <div class="content">
                    <h4>${obj.title}</h4>
                    <div class="sub">Pastel գույներով նուրբ լենդինգ՝ hero, features, contact բաժիններով։</div>
                    <div class="tabs" role="tablist" aria-label="Տեսք/Կոդ">
                        <a href="${obj.to}" class="tab active" role="tab" aria-selected="true" data-tab="view">Տեսք</a>
                        <div class="tab" role="tab" aria-selected="false" data-tab="code">Կոդ</div>
                    </div>
                    <div class="view active" data-view="view">
                        <div class="sub">Սա տեղապահ պատկեր է․ բուն նախադիտումը կտեղադրեք ձեր սքրինշոթով / live հղմամբ։</div>
                    </div>
                    <div class="view" data-view="code">
             
                        <div class="links">
                            <button class="btn ghost">Պատճենել կոդը</button>
                            <a href="https://github.com/ani-mirzakhanyan/bloom-landing" 
                            target="_blank" rel="noopener">GitHub ռեպո</a>
                        </div>
                    </div>
                    <div class="links">
                        <span class="tag">#landing</span><span class="tag">#html</span><span class="tag">#css</span>
                    </div>
                </div></article>
    `
})
