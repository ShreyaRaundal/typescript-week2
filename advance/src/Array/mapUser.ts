interface User{
    firstName:string;
    lastName:string;
    age:number;
}

const users:User[]=[
    {firstName:"shreya",lastName:"Raundal",age:23},
    {firstName:"shubham",lastName:"Aditya",age:23}
];

const userName:string[]=users.map(user=>user.firstName);
console.log(userName);

