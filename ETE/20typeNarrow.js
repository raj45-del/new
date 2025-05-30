function printValue(value) {
    if (typeof value === "string") {
        console.log("Uppercase:", value.toUpperCase());
    }
    else if (typeof value === "number") {
        console.log("Doubled:", value * 2);
    }
}
// Example usage:
printValue("hello"); // Uppercase: HELLO
printValue(7); // Doubled: 14
