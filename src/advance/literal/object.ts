type User={
    name:string;
    role: "admin" | "customer" | "manager";
    salary:number
    status: "active" | "inactive"
}
const user:User={
    name:"shreya",
    role:"customer",
    salary:70000,
    status:"active"

}
console.log(user)