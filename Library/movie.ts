enum SeatType{
    Regular= "Regular",
    Premium= "Premium",
    VIP= "VIP"
}

type Ticket =  {
    movieName: string
    seatNumber: number
    seatType: SeatType
    price: number
    
};

function discountCalculate(ticket: Ticket): number{
    let Discount=0;
    if(ticket.seatType===SeatType.Premium){
        Discount= 0.10
    }
    else if(ticket.seatType===SeatType.VIP){
        Discount= 0.20
    }
    return ticket.price - (ticket.price * Discount);
}