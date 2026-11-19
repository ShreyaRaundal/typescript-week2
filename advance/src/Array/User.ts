interface User{
    firstName:string;
    lastName:string;
    age:number;
}

// function filterUsers(users: User[]){
//     return users.filter((user)=>user.age>18);
// }

function filterUsers(users:User[]){
    let ans=[]
    for(let i=0;i<users.length;i++){
        if(users[i].age>18){
            ans.push(users[i])
        }
    }
    return ans;
}


const filteredUsers = filterUsers([{
    firstName:"shreya",
    lastName:"Raundal",
    age:11
}])

console.log(filterUsers);