
enum SeatType {
    REGULAR = "Regular",
    PREMIUM = "Premium",
    VIP = "VIP"
}

interface Ticket {
    movieName: string;
    seatNumber: number;
    seatType: SeatType;
    price: number;
}

function calculateDiscount(ticket: Ticket): number {
    let discount = 0;
    if (ticket.seatType === SeatType.PREMIUM) {
        discount = 0.10;
    } else if (ticket.seatType === SeatType.VIP) {
        discount = 0.20;
    }
    return ticket.price - (ticket.price * discount);
}

const ticket1: Ticket = { movieName: "Inception", seatNumber: 12, seatType: SeatType.PREMIUM, price: 100 };
console.log(`Final price after discount: $${calculateDiscount(ticket1)}`);