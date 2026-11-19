interface Address{
        city:string;
        country:string;
        pincode:number;
    
};
interface User{
    name:"shreya" | "shubham";
    age:number;
    address:Address;
}

let user:User={
    name:"shreya",
    age:23,
    address:{
        city:"pune",
        country:"India",
        pincode:12345,
    },
}

function isLegal(user:User):boolean{
    if(user.age>=18){
        return true
    }else{
        return false
    }
}

const ans=isLegal(user);
if(ans){
    console.log("I am Legal");
}else{
    console.log("I am not a illegal");
}