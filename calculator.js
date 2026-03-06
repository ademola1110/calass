let output2 = document.getElementById("output2");

function addInput(input) {
  output2.value += input;
}

function clearInput() {
  output2.value = "";
}
function calculate() {
  output2.value = eval(output2.value);
}
