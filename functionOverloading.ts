
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else {
        return String(a) + String(b);
    }
}

const input1 = document.createElement("input");
const input2 = document.createElement("input");
const button = document.createElement("button");
const resultDiv = document.createElement("div");

input1.type = "text";
input2.type = "text";
button.textContent = "Add";

button.onclick = () => {
    const value1 = input1.value;
    const value2 = input2.value;

    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);

    let result;
    if (!isNaN(num1) && !isNaN(num2)) {
        result = add(num1, num2);
    } else {
        result = add(value1, value2);
    }

    resultDiv.textContent = `Result: ${result}`;
};

document.body.appendChild(input1);
document.body.appendChild(input2);
document.body.appendChild(button);
document.body.appendChild(resultDiv);