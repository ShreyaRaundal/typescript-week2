enum OrderStatus{
    PENDING="pending",
    PROCCESS="process",
    SHIPPING="shipping",
    DELIVERED="delivered"
}

function updateOrder(status:OrderStatus):void{
    console.log(status);
}
updateOrder(OrderStatus.PENDING);