type PaymentStatus=
|"pending"
|"successful"
|"fail"


interface Payment{
    transationId:string;
    amount:number;
    status:PaymentStatus;
}

function proccessPayment(payment:Payment):void{
    if(payment.status === "successful"){
        console.log("payment is completed");
    }else if(payment.status ==="pending"){
        console.log("payment is pending");
    }else{
        console.log("payment fail");
    }
}

const payment:Payment={
    transationId:"TNX101",
    amount:5000,
    status:"successful"
};
proccessPayment(payment);