type Logger=(message:string)=>void;
type ErrorLogger=(error:Error)=>void;
type combinedLogger=Logger & ErrorLogger;

const log:combinedLogger=(value:string | Error)=>{
    console.log(value);
};

log("Application started");

log(new Error("Something went wrong"));