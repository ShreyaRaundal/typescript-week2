interface User{
    readonly id:number;
    name:string;
}

const user:User={
    id:101,
    name:"shreya"

};
console.log(user.id);
user.id=102;
console.log(user.id);