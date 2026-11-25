type User = {
  name: string;
  email?: string;
};

const user: User = {
  name: "shreya"
};

if(user.email?.toUpperCase()){
    console.log(user.name);
}else{
    console.log("Email is missing for "+user.name)
}