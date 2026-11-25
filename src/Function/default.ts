function greet(name: string, city: string = "Pune"): string {
    return `Hello ${name} from ${city}`;
}

console.log(greet("Shreya"));
console.log(greet("Rahul", "Mumbai"));