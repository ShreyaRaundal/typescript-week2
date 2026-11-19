function findUser(users:User[],id:number):User | undefined{
    for(let i=0;i<users.length;i++){
        if(users[i].id===id){
            return users[i];
        }
    }
    return undefined;
}