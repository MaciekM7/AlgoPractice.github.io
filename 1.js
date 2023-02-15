let integer = "";
const input = document.querySelector("#input");
const resultArea = document.querySelector("#resultArea");

function evenOrOdd() {
  integer = input.value;
  if (integer === "") {
    resultArea.value = "You didn't input anything.";
  } else if (Number.isInteger(Number(integer)) === true) {
    if (integer % 2 === 0) {
      resultArea.value = `${input.value} is an even number.`;
      input.value = "";
    } else {
      resultArea.value = `${input.value} is an odd number.`;
      input.value = "";
    }
  } else if (isNaN(integer) === true) {
    resultArea.value = `Your input is not a number.\nYou had one job.`;
    input.value = "";
  } else {
    resultArea.value = `The number you have submitted is not an integer.`;
    input.value = "";
  }
}
