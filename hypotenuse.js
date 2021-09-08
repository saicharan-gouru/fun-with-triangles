const sides = document.querySelectorAll(".side");
const btnCalculate = document.querySelector("#btn-calculate");
const output = document.querySelector("#output");


function calculateSumOfSquares(side1, side2) {
    return (side1 * side1) + (side2 * side2);
}

function calculateHypotenuse() {
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const hypotenuse = Math.sqrt(sumOfSquares);
    output.innerText = "Length Of Hypotenuse = " + hypotenuse;
}







btnCalculate.addEventListener("click", calculateHypotenuse);