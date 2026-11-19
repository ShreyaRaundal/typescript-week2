interface Product {
    name: string;
    price: number;
}

const products: Record<number, Product> = {
    101: { name: "Laptop", price: 50000 },
    102: { name: "Mobile", price: 20000 }
};