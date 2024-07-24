function calculateCoins() {
  const amount = parseFloat(document.getElementById('amount').value) * 100; // Conversao para centavos
  const coins = [100, 50, 25, 10, 5, 1]; // set das moedas
  const coinNames = ["1 real", "50 centavos", "25 centavos", "10 centavos", "5 centavos", "1 centavo"];
  let remaining = amount;
  let result = {};

  for (let i = 0; i < coins.length; i++) {
      result[coinNames[i]] = Math.floor(remaining / coins[i]);
      remaining %= coins[i];
  }

  let resultText = 'Moedas necessárias:<br>';
  for (let [coin, count] of Object.entries(result)) {
      resultText += `${coin} = ${count}<br>`;
  }

  document.getElementById('result').innerHTML = resultText;
}
