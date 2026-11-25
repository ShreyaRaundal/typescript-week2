function proccessUser(
    name:string,
    callback:(message:string)=>void
):void{
    callback(`Welcome ${name}`);
}

proccessUser("Shreya",(message)=>{
    console.log(message);
})