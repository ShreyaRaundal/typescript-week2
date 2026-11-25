interface PersonInfo{
    name:String;
    age:Number;
}

interface professionalInfo{
    empId:number;
    department:string;
}

type Employee=PersonInfo & professionalInfo;
const employee:Employee={
    name:"shreya",
    age:23,
    empId:101,
    department:"developer"

}
