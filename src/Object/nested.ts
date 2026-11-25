const client:{
    name:string;
    company:string;
    address:{
        city:string;
        pincode:number;
    };
}={
    name:"shreya",
    company:"diamond pvt limited",
    address:{
        city:"pune",
        pincode:123456
    }
};
console.log(client);
console.log(client.name);
console.log(client.address);