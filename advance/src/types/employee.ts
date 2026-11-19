type Employee={
    name:string;
    startDate:string;
};

type Manager={
    name:string;
    department:string;
};

type TeamLead=Employee & Manager;

let e:Employee={
    name:"shreya",
    startDate:"21-02-2026",
}

let m:Manager={
     name:"Shreya",
     department:"Engineering"

}

let t:TeamLead={
    name:"shreya",
    startDate:"21 sep 2021",
    department:"eng"
}