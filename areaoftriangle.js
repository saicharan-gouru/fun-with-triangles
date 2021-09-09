const breadth = document.querySelector("#breadth");
const height = document.querySelector("#height");
const btnCalculate = document.querySelector("#btn-calculate");
const output = document.querySelector("#output");



function calculateArea() {
    const area = 0.5 * height.value * breadth.value;
    output.innerText = "Area = " + area;
}









btnCalculate.addEventListener("click", calculateArea);