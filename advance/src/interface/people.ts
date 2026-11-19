interface People{
    name:string;
    age:number;
}

class Manager implements People{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
}

const manager =new Manager("Shreya",23);