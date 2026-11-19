interface People{
    name:string;
    age:number;
    // greet:()=>string,
}
class Manager implements People{
    name:string;
    age:number;
    number:string;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
        this.number="12345654321"

    }
}

let user=new Manager("John",30);
console.log(user.age);
