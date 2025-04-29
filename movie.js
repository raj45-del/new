var SeatType;
(function (SeatType) {
    SeatType["Regular"] = "Regular";
    SeatType["Premium"] = "Premium";
    SeatType["VIP"] = "VIP";
})(SeatType || (SeatType = {}));
function discountCalculate(ticket) {
    var Discount = 0;
    if (ticket.seatType === SeatType.Premium) {
        Discount = 0.10;
    }
    else if (ticket.seatType === SeatType.VIP) {
        Discount = 0.20;
    }
    return ticket.price - (ticket.price * Discount);
}
