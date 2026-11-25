type EmployeeId = number | string;

interface Employee{
    id:EmployeeId;
    name:string;
    department:string;

}
function getEmployee(id:EmployeeId):Employee {
    console.log("Fetching employee: ",id);

    return {
        id:id,
        name:"shreya",
        department:"Engineering"
    };
}
getEmployee(101);
getEmployee("EMP101");