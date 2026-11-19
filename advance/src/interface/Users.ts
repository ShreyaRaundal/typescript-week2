interface Users{
    name:string;
    age:number;
}

class Manager implements Users{
     name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
}


const m=new Manager("shreya",21);
console.log(m.name);
console.log(m.age);