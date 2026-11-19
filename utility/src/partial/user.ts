interface User{
    id:string;
    firstName:string;
    email:string;
    password:string;
}

function updateUser(id:number,updates:Partial<User>):void{
    console.log("Updating user:",id,updates);
}

updateUser(1,{email:"shreya@gmail.com"});

updateUser(1,{
    firstName:"shreya"
});