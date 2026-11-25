interface personalInfo{
    name:string;
    age:number;
}

interface professionalInfo{
    empId:number;
    dep :String;
}
interface AuditInfo{
    createdAt:Date;
    updateAt:Date;
}
type Employee = personalInfo & professionalInfo & AuditInfo;

function createEmployee(employee:Employee):Employee{
    console.log("create employee ",employee.name);
    return employee;
}