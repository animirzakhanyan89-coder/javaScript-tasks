const employees = [
    { id: 1,  name: "Aram",   age: 24, city: "Yerevan", dept: "Engineering", salary: 420000, isRemote: true,  hiredAt: "2023-02-15", skills: ["JS","React"],         projects: 2,  performance: 86, managerId: 11, contacts: { email: "aram@acme.am",   phone: "091-000001" } },
    { id: 2,  name: "Mane",   age: 31, city: "Gyumri",  dept: "Design",      salary: 380000, isRemote: false, hiredAt: "2021-09-01", skills: ["Figma","Illustrator"], projects: 5,  performance: 92, managerId: 12, contacts: { email: "mane@acme.am",   phone: "093-000002" } },
    { id: 3,  name: "Suren",  age: 27, city: "Vanadzor",dept: "Engineering", salary: 510000, isRemote: true,  hiredAt: "2020-06-10", skills: ["JS","Node","SQL"],     projects: 7,  performance: 74, managerId: 11, contacts: { email: "suren@acme.am",  phone: "095-000003" } },
    { id: 4,  name: "Lilit",  age: 22, city: "Yerevan", dept: "HR",          salary: 260000, isRemote: false, hiredAt: "2024-03-20", skills: ["Excel","Hiring"],      projects: 1,  performance: 81, managerId: 13, contacts: { email: "lilit@acme.am",  phone: "094-000004" } },
    { id: 5,  name: "Tigran", age: 35, city: "Yerevan", dept: "Sales",       salary: 600000, isRemote: true,  hiredAt: "2019-11-05", skills: ["Negotiation","CRM"],   projects: 9,  performance: 88, managerId: 14, contacts: { email: "tigran@acme.am", phone: "044-000005" } },
    { id: 6,  name: "Sona",   age: 29, city: "Ijevan",  dept: "Design",      salary: 340000, isRemote: true,  hiredAt: "2022-01-12", skills: ["Figma","Branding"],    projects: 3,  performance: 69, managerId: 12, contacts: { email: "sona@acme.am",   phone: "096-000006" } },
    { id: 7,  name: "Davit",  age: 41, city: "Yerevan", dept: "Engineering", salary: 900000, isRemote: false, hiredAt: "2017-04-18", skills: ["Go","K8s","Cloud"],    projects: 11, performance: 95, managerId: 11, contacts: { email: "davit@acme.am",  phone: "099-000007" } },
    { id: 8,  name: "Anna",   age: 26, city: "Gyumri",  dept: "Support",     salary: 220000, isRemote: false, hiredAt: "2024-07-08", skills: ["Helpdesk","English"],  projects: 1,  performance: 78, managerId: 15, contacts: { email: "anna@acme.am",   phone: "098-000008" } },
    { id: 9,  name: "Karen",  age: 33, city: "Yerevan", dept: "Marketing",   salary: 480000, isRemote: true,  hiredAt: "2020-01-30", skills: ["SEO","Content"],       projects: 6,  performance: 83, managerId: 16, contacts: { email: "karen@acme.am",  phone: "091-000009" } },
    { id:10,  name: "Rita",   age: 28, city: "Hrazdan", dept: "Marketing",   salary: 370000, isRemote: false, hiredAt: "2021-03-25", skills: ["SMM","Copy"],          projects: 4,  performance: 72, managerId: 16, contacts: { email: "rita@acme.am",   phone: "093-000010" } },
    { id:11,  name: "Narek",  age: 39, city: "Yerevan", dept: "Engineering", salary: 1100000,isRemote: true,  hiredAt: "2015-10-02", skills: ["Architecture","JS"],   projects: 12, performance: 90, managerId: null, contacts: { email: "narek@acme.am", phone: "055-000011" } },
    { id:12,  name: "Mariam", age: 36, city: "Yerevan", dept: "Design",      salary: 700000, isRemote: true,  hiredAt: "2018-05-11", skills: ["UX","Figma"],          projects: 8,  performance: 93, managerId: null, contacts: { email: "mariam@acme.am",phone: "043-000012" } },
    { id:13,  name: "Artur",  age: 45, city: "Abovyan", dept: "HR",          salary: 520000, isRemote: false, hiredAt: "2016-08-22", skills: ["Org","Policy"],        projects: 5,  performance: 80, managerId: null, contacts: { email: "artur@acme.am", phone: "041-000013" } },
    { id:14,  name: "Ella",   age: 32, city: "Yerevan", dept: "Sales",       salary: 650000, isRemote: true,  hiredAt: "2019-02-14", skills: ["CRM","Pitch"],         projects: 10, performance: 87, managerId: null, contacts: { email: "ella@acme.am",  phone: "077-000014" } },
    { id:15,  name: "Levon",  age: 30, city: "Vanadzor",dept: "Support",     salary: 280000, isRemote: true,  hiredAt: "2022-10-05", skills: ["Helpdesk","SQL"],      projects: 2,  performance: 76, managerId: null, contacts: { email: "levon@acme.am", phone: "070-000015" } },
    { id:16,  name: "Hasmik", age: 25, city: "Yerevan", dept: "Design",      salary: 310000, isRemote: false, hiredAt: "2023-11-29", skills: ["Figma","Motion"],      projects: 2,  performance: 85, managerId: 12, contacts: { email: "hasmik@acme.am", phone: "093-000016" } },

    { id:17,  name: "Gor",      age: 33, city: "Dilijan", dept: "Sales",       salary: 303000, isRemote: false, hiredAt: "2023-08-12", skills: ["React","Helpdesk"],            projects: 11, performance: 96, managerId: 15, contacts: { email: "gor@acme.am",      phone: "043-633726" } },
    { id:18,  name: "Nane",     age: 27, city: "Vanadzor",dept: "Design",      salary: 360000, isRemote: true,  hiredAt: "2022-04-05", skills: ["Figma","UX"],                   projects: 4,  performance: 88, managerId: 12, contacts: { email: "nane@acme.am",     phone: "091-402805" } },
    { id:19,  name: "Hayk",     age: 38, city: "Hrazdan", dept: "Finance",     salary: 520000, isRemote: false, hiredAt: "2019-11-19", skills: ["Excel","SQL"],                 projects: 6,  performance: 82, managerId: 13, contacts: { email: "hayk@acme.am",     phone: "050-686140" } },
    { id:20,  name: "Lusine",   age: 29, city: "Gyumri",  dept: "Support",     salary: 270000, isRemote: true,  hiredAt: "2021-02-10", skills: ["Helpdesk","English"],          projects: 3,  performance: 79, managerId: 15, contacts: { email: "lusine@acme.am",   phone: "050-794381" } },
    { id:21,  name: "Araks",    age: 26, city: "Yerevan", dept: "Marketing",   salary: 410000, isRemote: true,  hiredAt: "2020-09-23", skills: ["SEO","Content"],              projects: 5,  performance: 84, managerId: 16, contacts: { email: "araks@acme.am",    phone: "073-463398" } },
    { id:22,  name: "Karlen",   age: 34, city: "Hrazdan", dept: "Operations",  salary: 450000, isRemote: false, hiredAt: "2018-07-17", skills: ["Excel","Org"],                projects: 7,  performance: 81, managerId: 13, contacts: { email: "karlen@acme.am",   phone: "068-538792" } },
    { id:23,  name: "Sofya",    age: 32, city: "Abovyan", dept: "HR",          salary: 350000, isRemote: true,  hiredAt: "2021-05-09", skills: ["Hiring","Policy"],             projects: 4,  performance: 83, managerId: 13, contacts: { email: "sofya@acme.am",    phone: "051-967787" } },
    { id:24,  name: "Vazgen",   age: 41, city: "Yerevan", dept: "Engineering", salary: 780000, isRemote: true,  hiredAt: "2017-03-03", skills: ["JS","Node","SQL"],            projects: 9,  performance: 89, managerId: 11, contacts: { email: "vazgen@acme.am",   phone: "098-251719" } },
    { id:25,  name: "Anahit",   age: 30, city: "Kapan",   dept: "Support",     salary: 260000, isRemote: false, hiredAt: "2023-01-20", skills: ["Helpdesk","English"],          projects: 2,  performance: 77, managerId: 15, contacts: { email: "anahit@acme.am",   phone: "094-855390" } },
    { id:26,  name: "Eric",     age: 24, city: "Kapan",   dept: "Design",      salary: 320000, isRemote: true,  hiredAt: "2022-06-14", skills: ["Figma","Branding"],           projects: 3,  performance: 80, managerId: 12, contacts: { email: "eric@acme.am",     phone: "041-248703" } },
    { id:27,  name: "Silva",    age: 35, city: "Ijevan",  dept: "Marketing",   salary: 470000, isRemote: true,  hiredAt: "2020-10-28", skills: ["SMM","Copy"],                 projects: 6,  performance: 86, managerId: 16, contacts: { email: "silva@acme.am",    phone: "081-839772" } },
    { id:28,  name: "Artyom",   age: 39, city: "Dilijan", dept: "Engineering", salary: 900000, isRemote: false, hiredAt: "2018-04-11", skills: ["Go","Cloud","K8s"],           projects: 10, performance: 92, managerId: 11, contacts: { email: "artyom@acme.am",   phone: "079-390836" } },
    { id:29,  name: "Marine",   age: 31, city: "Ijevan",  dept: "Sales",       salary: 520000, isRemote: true,  hiredAt: "2019-09-05", skills: ["Negotiation","CRM"],         projects: 8,  performance: 85, managerId: 14, contacts: { email: "marine@acme.am",   phone: "060-759611" } },
    { id:30,  name: "Stepan",   age: 45, city: "Abovyan", dept: "Finance",     salary: 640000, isRemote: false, hiredAt: "2016-12-02", skills: ["Excel","SQL"],                 projects: 9,  performance: 88, managerId: 13, contacts: { email: "stepan@acme.am",   phone: "060-903971" } },
    { id:31,  name: "Lia",      age: 28, city: "Hrazdan", dept: "HR",          salary: 300000, isRemote: true,  hiredAt: "2022-08-19", skills: ["Hiring","Excel"],              projects: 2,  performance: 79, managerId: 13, contacts: { email: "lia@acme.am",      phone: "082-468893" } },
    { id:32,  name: "Edgar",    age: 42, city: "Dilijan", dept: "Engineering", salary: 830000, isRemote: true,  hiredAt: "2017-01-15", skills: ["JS","React","Node"],          projects: 11, performance: 93, managerId: 11, contacts: { email: "edgar@acme.am",    phone: "085-099624" } },
    { id:33,  name: "Tatev",    age: 27, city: "Sevan",   dept: "Design",      salary: 330000, isRemote: false, hiredAt: "2023-05-07", skills: ["Figma","Motion"],             projects: 2,  performance: 82, managerId: 12, contacts: { email: "tatev@acme.am",    phone: "042-518392" } },
    { id:34,  name: "Ruben",    age: 37, city: "Yerevan", dept: "Operations",  salary: 540000, isRemote: true,  hiredAt: "2019-03-29", skills: ["Org","Policy"],               projects: 7,  performance: 84, managerId: 13, contacts: { email: "ruben@acme.am",    phone: "071-927444" } },
    { id:35,  name: "Gayane",   age: 29, city: "Artashat",dept: "Marketing",   salary: 390000, isRemote: false, hiredAt: "2021-10-12", skills: ["SEO","SMM"],                  projects: 4,  performance: 80, managerId: 16, contacts: { email: "gayane@acme.am",   phone: "094-726118" } },
    { id:36,  name: "Hakob",    age: 33, city: "Vanadzor",dept: "Support",     salary: 290000, isRemote: true,  hiredAt: "2020-06-22", skills: ["Helpdesk","SQL"],             projects: 3,  performance: 78, managerId: 15, contacts: { email: "hakob@acme.am",    phone: "089-647522" } },
    { id:37,  name: "Irina",    age: 26, city: "Gyumri",  dept: "Design",      salary: 310000, isRemote: true,  hiredAt: "2022-11-03", skills: ["Figma","Branding"],           projects: 2,  performance: 83, managerId: 12, contacts: { email: "irina@acme.am",    phone: "093-371254" } },
    { id:38,  name: "Samvel",   age: 40, city: "Yerevan", dept: "Sales",       salary: 620000, isRemote: false, hiredAt: "2018-08-09", skills: ["Negotiation","CRM"],         projects: 9,  performance: 87, managerId: 14, contacts: { email: "samvel@acme.am",   phone: "098-431209" } },
    { id:39,  name: "Margarit", age: 31, city: "Sevan",   dept: "HR",          salary: 320000, isRemote: true,  hiredAt: "2021-01-21", skills: ["Hiring","Policy"],             projects: 3,  performance: 81, managerId: 13, contacts: { email: "margarit@acme.am", phone: "071-119382" } },
    { id:40,  name: "Varduhi",  age: 36, city: "Abovyan", dept: "Finance",     salary: 560000, isRemote: false, hiredAt: "2019-04-27", skills: ["Excel","SQL"],                 projects: 6,  performance: 88, managerId: 13, contacts: { email: "varduhi@acme.am",  phone: "076-208399" } },
    { id:41,  name: "Areg",     age: 28, city: "Yerevan", dept: "Engineering", salary: 610000, isRemote: true,  hiredAt: "2020-02-14", skills: ["JS","React"],                 projects: 5,  performance: 86, managerId: 11, contacts: { email: "areg@acme.am",     phone: "055-903842" } },
    { id:42,  name: "Meri",     age: 25, city: "Ijevan",  dept: "Marketing",   salary: 340000, isRemote: true,  hiredAt: "2023-03-19", skills: ["SMM","Copy"],                 projects: 2,  performance: 79, managerId: 16, contacts: { email: "meri@acme.am",     phone: "041-608933" } },
    { id:43,  name: "Alen",     age: 32, city: "Kapan",   dept: "Support",     salary: 300000, isRemote: false, hiredAt: "2021-07-06", skills: ["Helpdesk","English"],          projects: 4,  performance: 82, managerId: 15, contacts: { email: "alen@acme.am",     phone: "082-734910" } },
    { id:44,  name: "Nerses",   age: 39, city: "Dilijan", dept: "Operations",  salary: 530000, isRemote: true,  hiredAt: "2018-09-10", skills: ["Org","Policy"],               projects: 7,  performance: 84, managerId: 13, contacts: { email: "nerses@acme.am",   phone: "070-836291" } },
    { id:45,  name: "Siran",    age: 27, city: "Gyumri",  dept: "Design",      salary: 320000, isRemote: false, hiredAt: "2022-04-01", skills: ["Figma","UX"],                  projects: 3,  performance: 81, managerId: 12, contacts: { email: "siran@acme.am",    phone: "092-716384" } },
    { id:46,  name: "Arpi",     age: 30, city: "Yerevan", dept: "Marketing",   salary: 400000, isRemote: true,  hiredAt: "2020-11-23", skills: ["SEO","Content"],              projects: 5,  performance: 83, managerId: 16, contacts: { email: "arpi@acme.am",     phone: "093-943128" } },
    { id:47,  name: "Tiko",     age: 24, city: "Sevan",   dept: "Support",     salary: 250000, isRemote: false, hiredAt: "2023-09-04", skills: ["Helpdesk","English"],          projects: 1,  performance: 76, managerId: 15, contacts: { email: "tiko@acme.am",     phone: "047-261935" } },
    { id:48,  name: "Nika",     age: 29, city: "Artashat",dept: "Sales",       salary: 480000, isRemote: true,  hiredAt: "2021-02-18", skills: ["Negotiation","CRM"],         projects: 6,  performance: 86, managerId: 14, contacts: { email: "nika@acme.am",     phone: "050-539210" } },
    { id:49,  name: "Milena",   age: 26, city: "Vanadzor",dept: "Design",      salary: 310000, isRemote: true,  hiredAt: "2022-12-07", skills: ["Figma","Branding"],           projects: 2,  performance: 82, managerId: 12, contacts: { email: "milena@acme.am",   phone: "071-712684" } },
    { id:50,  name: "Arthur",   age: 42, city: "Yerevan", dept: "Engineering", salary: 880000, isRemote: false, hiredAt: "2017-06-12", skills: ["JS","Node","Cloud"],          projects: 10, performance: 91, managerId: 11, contacts: { email: "arthur@acme.am",   phone: "077-395284" } },
    { id:51,  name: "Gohar",    age: 33, city: "Abovyan", dept: "HR",          salary: 340000, isRemote: true,  hiredAt: "2020-05-26", skills: ["Hiring","Excel"],              projects: 4,  performance: 80, managerId: 13, contacts: { email: "gohar@acme.am",    phone: "041-529377" } },
    { id:52,  name: "Seda",     age: 31, city: "Ijevan",  dept: "Marketing",   salary: 380000, isRemote: false, hiredAt: "2021-09-02", skills: ["SMM","Copy"],                 projects: 5,  performance: 82, managerId: 16, contacts: { email: "seda@acme.am",     phone: "059-762914" } },
    { id:53,  name: "Mark",     age: 28, city: "Kapan",   dept: "Support",     salary: 270000, isRemote: true,  hiredAt: "2022-08-13", skills: ["Helpdesk","SQL"],             projects: 3,  performance: 79, managerId: 15, contacts: { email: "mark@acme.am",     phone: "070-128394" } },
    { id:54,  name: "Lana",     age: 27, city: "Sevan",   dept: "Design",      salary: 320000, isRemote: true,  hiredAt: "2023-01-09", skills: ["Figma","UX"],                  projects: 2,  performance: 83, managerId: 12, contacts: { email: "lana@acme.am",     phone: "073-629401" } },
    { id:55,  name: "Diana",    age: 35, city: "Abovyan", dept: "Sales",       salary: 520000, isRemote: false, hiredAt: "2019-10-22", skills: ["Negotiation","CRM"],         projects: 7,  performance: 87, managerId: 14, contacts: { email: "diana@acme.am",    phone: "062-283735" } },
    { id:56,  name: "Arno",     age: 29, city: "Artashat",dept: "Finance",     salary: 450000, isRemote: true,  hiredAt: "2020-12-01", skills: ["Excel","SQL"],                 projects: 5,  performance: 84, managerId: 13, contacts: { email: "arno@acme.am",     phone: "066-884939" } },
    { id:57,  name: "Grigor",   age: 32, city: "Abovyan", dept: "Engineering", salary: 700000, isRemote: true,  hiredAt: "2018-07-15", skills: ["JS","React","Node"],          projects: 9,  performance: 90, managerId: 11, contacts: { email: "grigor@acme.am",   phone: "085-891407" } },
    { id:58,  name: "Eva",      age: 30, city: "Artashat",dept: "Marketing",   salary: 390000, isRemote: true,  hiredAt: "2021-06-19", skills: ["SEO","SMM"],                  projects: 4,  performance: 81, managerId: 16, contacts: { email: "eva@acme.am",      phone: "097-028048" } },
    { id:59,  name: "Lusya",    age: 39, city: "Artashat",dept: "HR",          salary: 360000, isRemote: false, hiredAt: "2019-03-07", skills: ["Hiring","Policy"],             projects: 5,  performance: 82, managerId: 13, contacts: { email: "lusya@acme.am",    phone: "075-382644" } },
    { id:60,  name: "Araksya",  age: 34, city: "Yerevan", dept: "Design",      salary: 350000, isRemote: true,  hiredAt: "2022-02-28", skills: ["Figma","Branding"],           projects: 3,  performance: 84, managerId: 12, contacts: { email: "araksya@acme.am",  phone: "082-407725" } },
    { id:61,  name: "Tamar",    age: 26, city: "Yerevan", dept: "Support",     salary: 280000, isRemote: false, hiredAt: "2023-04-16", skills: ["Helpdesk","English"],          projects: 2,  performance: 78, managerId: 15, contacts: { email: "tamar@acme.am",    phone: "064-437049" } },
    { id:62,  name: "Sevak",    age: 38, city: "Dilijan", dept: "Sales",       salary: 610000, isRemote: true,  hiredAt: "2018-11-11", skills: ["Negotiation","CRM"],         projects: 8,  performance: 89, managerId: 14, contacts: { email: "sevak@acme.am",    phone: "088-231159" } },
    { id:63,  name: "Hripsime", age: 37, city: "Abovyan", dept: "Operations",  salary: 480000, isRemote: false, hiredAt: "2019-09-30", skills: ["Org","Excel"],                projects: 6,  performance: 83, managerId: 13, contacts: { email: "hripsime@acme.am", phone: "054-793048" } },
    { id:64,  name: "Simon",    age: 43, city: "Sevan",   dept: "Finance",     salary: 590000, isRemote: true,  hiredAt: "2017-05-21", skills: ["Excel","SQL"],                 projects: 7,  performance: 86, managerId: 13, contacts: { email: "simon@acme.am",    phone: "097-591576" } },
    { id:65,  name: "Haykuhi",  age: 29, city: "Sevan",   dept: "Design",      salary: 330000, isRemote: true,  hiredAt: "2022-06-03", skills: ["Figma","UX"],                  projects: 3,  performance: 82, managerId: 12, contacts: { email: "haykuhi@acme.am",  phone: "093-279179" } },
    { id:66,  name: "Rima",     age: 28, city: "Yerevan", dept: "HR",          salary: 310000, isRemote: false, hiredAt: "2021-12-27", skills: ["Hiring","Excel"],              projects: 3,  performance: 80, managerId: 13, contacts: { email: "rima@acme.am",     phone: "072-319332" } },
    { id:67,  name: "Artak",    age: 40, city: "Abovyan", dept: "Engineering", salary: 760000, isRemote: true,  hiredAt: "2018-03-08", skills: ["JS","Node","Cloud"],          projects: 9,  performance: 90, managerId: 11, contacts: { email: "artak@acme.am",    phone: "087-865467" } },
    { id:68,  name: "Elena",    age: 27, city: "Gyumri",  dept: "Marketing",   salary: 360000, isRemote: true,  hiredAt: "2022-09-14", skills: ["SEO","Content"],              projects: 3,  performance: 81, managerId: 16, contacts: { email: "elena@acme.am",    phone: "048-540932" } },
    { id:69,  name: "Rafayel",  age: 33, city: "Vanadzor",dept: "Support",     salary: 300000, isRemote: true,  hiredAt: "2020-04-09", skills: ["Helpdesk","SQL"],             projects: 4,  performance: 79, managerId: 15, contacts: { email: "rafayel@acme.am",  phone: "071-293847" } },
    { id:70,  name: "Mika",     age: 29, city: "Kapan",   dept: "Engineering", salary: 650000, isRemote: false, hiredAt: "2019-01-18", skills: ["JS","React"],                 projects: 6,  performance: 87, managerId: 11, contacts: { email: "mika@acme.am",     phone: "059-648321" } },
    { id:71,  name: "Sofi",     age: 26, city: "Yerevan", dept: "Design",      salary: 320000, isRemote: true,  hiredAt: "2023-02-22", skills: ["Figma","Branding"],           projects: 2,  performance: 82, managerId: 12, contacts: { email: "sofi@acme.am",     phone: "096-193845" } },
    { id:72,  name: "Gevorg",   age: 38, city: "Dilijan", dept: "Sales",       salary: 600000, isRemote: true,  hiredAt: "2018-10-05", skills: ["Negotiation","CRM"],         projects: 8,  performance: 88, managerId: 14, contacts: { email: "gevorg@acme.am",   phone: "055-489302" } },
    { id:73,  name: "Mary",     age: 31, city: "Artashat",dept: "HR",          salary: 330000, isRemote: false, hiredAt: "2020-07-13", skills: ["Hiring","Policy"],             projects: 4,  performance: 81, managerId: 13, contacts: { email: "mary@acme.am",     phone: "043-903728" } },
    { id:74,  name: "Sona2",    age: 27, city: "Ijevan",  dept: "Support",     salary: 280000, isRemote: true,  hiredAt: "2022-03-25", skills: ["Helpdesk","English"],          projects: 2,  performance: 79, managerId: 15, contacts: { email: "sona2@acme.am",    phone: "048-286591" } },
    { id:75,  name: "Armine",   age: 29, city: "Gyumri",  dept: "Design",      salary: 340000, isRemote: true,  hiredAt: "2021-09-30", skills: ["Figma","UX"],                  projects: 3,  performance: 83, managerId: 12, contacts: { email: "armine@acme.am",   phone: "070-935184" } },
    { id:76,  name: "Sargis",   age: 36, city: "Yerevan", dept: "Finance",     salary: 580000, isRemote: false, hiredAt: "2019-05-04", skills: ["Excel","SQL"],                 projects: 7,  performance: 87, managerId: 13, contacts: { email: "sargis@acme.am",   phone: "089-625713" } },
    { id:77,  name: "Narine",   age: 33, city: "Vanadzor",dept: "Marketing",   salary: 380000, isRemote: true,  hiredAt: "2021-11-09", skills: ["SEO","SMM"],                  projects: 4,  performance: 82, managerId: 16, contacts: { email: "narine@acme.am",   phone: "092-371640" } },
    { id:78,  name: "Arpi2",    age: 25, city: "Kapan",   dept: "Support",     salary: 260000, isRemote: false, hiredAt: "2023-06-18", skills: ["Helpdesk","English"],          projects: 1,  performance: 77, managerId: 15, contacts: { email: "arpi2@acme.am",    phone: "041-948625" } },
    { id:79,  name: "Lusine2",  age: 30, city: "Sevan",   dept: "Design",      salary: 330000, isRemote: true,  hiredAt: "2022-01-27", skills: ["Figma","Motion"],             projects: 2,  performance: 83, managerId: 12, contacts: { email: "lusine2@acme.am",  phone: "076-284931" } },
    { id:80,  name: "Karen2",   age: 34, city: "Yerevan", dept: "Engineering", salary: 720000, isRemote: true,  hiredAt: "2018-02-16", skills: ["JS","React","Node"],          projects: 9,  performance: 90, managerId: 11, contacts: { email: "karen2@acme.am",   phone: "055-640283" } },
];


const filterList={
    dep:'all',
    city:'all',
    isRemote:'all',
    search:'',
    sort:'asc',


}

const $=s=>document.querySelector(s)


$('#dept').oninput=function (e){
    filterList.dep=e.target.value
    render()
}
$('#city').oninput=function (e){
    filterList.city=e.target.value
    render()
}
$('#remote').oninput=function (e){
    filterList.isRemote=e.target.value
    render()
}
$('#q').oninput=function (e){
    filterList.search=e.target.value
    render()
}
$('#sortBy').oninput=function (e){
    filterList.sort=e.target.value
    render()
}

function render(){
    const kpiResult={
        salary:0,
        count:0,
        avg:0,
        performance:0,
        remote:0
    }
const values=employees.filter(res=>
    {
    let value=(
    (filterList.dep==='all'||res.dept===filterList.dep)&&(
        filterList.city==='all'||res.city===filterList.city)&&(
            filterList.isRemote==='all'||res.isRemote===JSON.parse(filterList.isRemote))&&(
                filterList.search===''||res.name.toLowerCase().includes(filterList.search)||res.skills.some(a=>a.toLowerCase().includes(filterList.search.toLowerCase()))
    ))

     if(value){
         kpiResult.count++
         kpiResult.salary+=res.salary
         kpiResult.performance+=res.performance
         if (res.isRemote){
             kpiResult.remote++
         }
     }
     return value

}
)
    if(filterList.sort==='asc'){
        values.sort((a,b)=>a.name.localeCompare(b.name))
    }else if(filterList.sort==='desc'){
        values.sort((a,b)=>b.name.localeCompare(a.name))

    }else if(filterList.sort==='salary.desc'){
        values.sort((a,b)=>b.salary - a.salary)

    }else if(filterList.sort==='salary.asc'){
        values.sort((a,b)=>a.salary-b.salary)

    }else if(filterList.sort==='performance.desc'){
        values.sort((a,b)=>b.performance-a.performance)
    }else if(filterList.sort==='performance.asc'){
        values.sort((a,b)=>a.performance-b.performance)
    }else if(filterList.sort==='hiredAt.desc'){
        values.sort((a,b)=>b.hiredAt.localeCompare(a.hiredAt))
    }else if(filterList.sort==='hiredAt.asc'){
        values.sort((a,b)=>a.hiredAt.localeCompare(b.hiredAt))
    }
    kpiResult.avg=parseInt(kpiResult.salary/kpiResult.count)
    kpiResult.remote= +(100/kpiResult.count*kpiResult.remote).toFixed(1)
    kpiResult.performance= +(kpiResult.performance/kpiResult.count).toFixed(1)
    kipPrint(kpiResult)
    viewPrint(values)
}
render()

function kipPrint(value) {
    $('#kpi-total').innerHTML=value.salary
    $('#kpi-avg').innerHTML=value.avg
    $('#kpi-median').innerHTML=value.avg
    $('#kpi-remote').innerHTML=value.remote
    $('#kpi-perf').innerHTML=value.performance

}

function viewPrint(values){
    let tBodyEl=$('#tbody')
    tBodyEl.innerHTML=''
    values.forEach(res=>{
        tBodyEl.innerHTML+=` <tr>
                    <td>
                        <div class="fw-semibold">${res.name}</div>
                        <div class="small text-muted">#${res.id} ${res.age}</div>
                    </td>
                    <td>${res.dept}</td>
                    <td>${res.city}</td>
                    <td class="text-end">${res.salary}</td>
                    <td class="text-center"><span class="badge text-bg-secondary">${res.isRemote?'remote':'onside'}</span></td>
                    <td class="text-center">${res.projects}</td>
                    <td class="text-center">${res.performance}</td>
                    <td>${res.hiredAt}<div class="small text-muted"></div></td>
                    <td>
                    ${res.skills.map(sk=>(`<span class="badge rounded-pill badge-skill me-1">${sk}</span>`)).join(' ')}
                    
                    </td>
                    <td class="text-end">
                        <button class="btn btn-sm btn-primary" data-id="8" data-action="detail">
                            <i class="bi bi-eye"></i> Տեսնել
                        </button>
                    </td>
                </tr>`
    })
}





