interface Employee{
    readonly id:number;
    readonly email:string;
    name:string;

}

const employee:Employee={
    id:101,
    email:'shreyaraundal@gmail.com',
    name:'shreya'

}

employee.id=101;
employee.email="shree@gmail.com";
employee.name="shree";
console.log(employee.id);
console.log(employee.email);
console.log(employee.name);