interface Employee{
    id:number;
    name:string;
}

function displayEmployee(employee:Readonly<Employee>):void{
    console.log(employee.name);
}