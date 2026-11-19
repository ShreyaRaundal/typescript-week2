interface Employee{
    name:string;
    age:number;
}

interface Manager extends Employee{
    department:string;
    teamSize:number;
}

const manager:Manager={
    name:"Shreya",
    age:23,
    department:"Engineering",
    teamSize:10
};