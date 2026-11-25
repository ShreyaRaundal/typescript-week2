enum EmployeeRole{
    Admin="ADMIN",
    Developer="DEVELOPER",
    Tester="TESTER"
}

interface Employee{
    id:number;
    name:string;
    role:EmployeeRole;
}

function displayEmployee(employee:Employee):void{
    console.log("Employee:",employee.name);
    console.log("Role:",employee.role);
}

const employee:Employee={
    id:101,
    name:"Shreya",
    role:EmployeeRole.Developer

};
displayEmployee(employee);