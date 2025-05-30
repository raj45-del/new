function calculateArea(width: number, height: number): number {
  return width * height;
}

// Valid call
const area = calculateArea(5, 10);
console.log("Area:", area);

//  Invalid call examples (will cause TypeScript errors)
// const wrongArea1 = calculateArea("5", 10);     
// const wrongArea2 = calculateArea(5);          
