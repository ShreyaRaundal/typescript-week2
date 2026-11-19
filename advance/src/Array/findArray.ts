interface User{
    id:number;
    firstName:string;
    age:number;
}
const users:User[]=[
    {id:101,firstName:"first", age:23},
    {id:102,firstName:"shunham",age:22},
    {id:102,firstName:"Priya",age:22}

];

const user=users.find((user)=>user.id===102);
console.log(user);