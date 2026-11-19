
type Employee={
    id: number;
    name: string;
    salary: number;
};

type Manager={
    id: number;
    teamSize: number;
    dept: string;
};

type EmployeeOrManager =Employee | Manager;

const person1:EmployeeOrManager = {
    id: 101,
    name: "Shreya",
    salary: 50000
};

const person2:EmployeeOrManager = {
    id: 102,
    teamSize: 10,
    dept: "Engineering"
};

function displayPerson(person: EmployeeOrManager) {
    console.log(person.name);
}

displayPerson(person1);
displayPerson(person2);
