
function calculate() {
  const principalAmount = document.getElementById("principalAmount");
  const interestRate = document.getElementById("interestRate");
  const years = document.getElementById("years");
  const submitBtn = document.getElementById("submitBtn");
  const resultText = document.getElementById("resultText");

  submitBtn.onclick = function(){

    let pAmount = Number(principalAmount.value);
    let iRate = Number(interestRate.value / 100);
    let y = Number(years.value);

   if(pAmount <= 0 || isNaN(pAmount)){
    resultText.textContent = "Invalid pAmount. Pls input a proper Amount";
    return;
  }

   if(iRate <= 0 || isNaN(iRate)){
    resultText.textContent = "Invalid pAmount. Pls input a proper Amount";
    return;
  }

  if(y <= 0 || isNaN(y)){
    resultText.textContent = "Invalid years. Pls input a valid time."
    return;
  }
    const result = (pAmount * iRate * y) + pAmount;
    resultText.textContent = `Total: $${result.toFixed(1)}`;
  }
}

calculate();
