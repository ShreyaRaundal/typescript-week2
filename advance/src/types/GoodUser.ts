type GoodUser={
    name:string;
    gifts:string;
}

type BadUser={
    name:string;
    ip:string;
}

type User=GoodUser  & BadUser;

const user:User ={
    name:"shreya",
    gifts:"car"
}