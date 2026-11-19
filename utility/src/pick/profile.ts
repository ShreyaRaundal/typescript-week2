interface Profile{
    id:number;
    firstName:string;
    email:string;
    password:string;

}

type ProfileProps=Pick<Profile,"firstName" | "email">;

function Profile({firstName,email}:ProfileProps){
    return `${firstName}-${email}`;
}