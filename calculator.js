let output2 = document.getElementById("output2");

function addInput(input) {
  output2.value += input;
}

function clearInput(addInput) {
  output2.value = "";
}
function calculate(addInput) {
  output2.value = eval(output2.value);
}
