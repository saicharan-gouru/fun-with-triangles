const angles = document.querySelectorAll(".angle");
const btnCheck = document.querySelector("#btn-check");
const output = document.querySelector("#output");


function calculateSumOfAngles(angle1, angle2, angle3) {
    return angle1 + angle2 + angle3;
}

function isTriangle() {
    const sumOfAngles = calculateSumOfAngles(Number(angles[0].value), Number(angles[1].value), Number(angles[2].value));
    if (sumOfAngles === 180) {
        output.innerText = "Yesss....It's a triangle";
    } else {
        output.innerText = "Oh No....It is not a triangle";
    }
}

btnCheck.addEventListener("click", isTriangle);