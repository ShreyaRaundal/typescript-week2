type Employee{
    id:number;
    name:string;
    salary:number;

}

type Manager{
    dep:string;
    teamsize:number;
}

type EmployeeManger=Employee & Manager
const manager:EmployeeManger={
    id:101,
    name:"shreya",
    salary:2345,
    dep:"Manger",
    teamsize:12

};
console.log(manager);