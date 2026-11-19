interface Employee{
    name:string;
    age:number;
}

class Person{
    constructor(public id:number){}

    display(){
        console.log(this.id);
    }
}

class Manager extends Person implements Employee{
    constructor(id:number,public name:string,public age:number){
        super(id);
    }
}

const manager=new Manager(101,"shreya",23);

// manager.displayId();
console.log(manager.name);
console.log(manager.age);