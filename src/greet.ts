function greet(name:string,age?:number):void{
    console.log(name);

    if(age!=undefined){
        console.log(age);
    }
}
greet("Shreys");
greet("shreya",23);