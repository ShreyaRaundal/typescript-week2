type TransactionStatus=
| "PENDING"
| "SUCCESS"
| "FAILED"

function assertNever(value:never):never{
    throw new Error('Unexpected status: ${value}');
}

function handleTransaction(status:TransactionStatus){
    switch(status){
        case "PENDING":
            return "Transaction processing";
        case "SUCCESS":
            return "Payment completed";

        case "FAILED":
            return "Payment failed";
    }
}