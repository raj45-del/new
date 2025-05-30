function calculateArea(width, height) {
    return width * height;
}
// Valid call
var area = calculateArea(5, 10);
console.log("Area:", area);
//  Invalid call examples (will cause TypeScript errors)
// const wrongArea1 = calculateArea("5", 10);     
// const wrongArea2 = calculateArea(5);          
