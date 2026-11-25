type Employee ={
    name:string;
    email?:string;
};

const employee:Employee={
    name:"shubham"
}

const email=employee.email ??"No email provide";
console.log(email);

