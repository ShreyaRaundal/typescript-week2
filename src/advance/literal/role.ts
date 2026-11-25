type UserRole = "admin" | "user" | "guest";
function login(role:UserRole):void{
    console.log("Logged in as:",role);
}

login("admin");
login("user");
// login("manager");