type User =
    |{
        email:string;
        password:string;
    } |{
        mobile:number;
        otp:string;
    };

    function login(user:User):void{
        if("email" in user){
            console.log(user.email);
        }else{
            console.log(user.mobile);
        }
    }
