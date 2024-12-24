const currrencyEl_one = document.getElementById('currency-one');    
const amountEl_one = document.getElementById ('amount-one');
const currencyEl_two = document.getElementById ('currency-two');
const amountEl_two = document.getElementById ('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

//Fetch exchange rates and also update DOM
function calculate() {
      const currency_one = currrencyEl_one.value;
      const currency_two = currencyEl_two.value;

      fetch(`htps://api.exchangerate-api.com/v4/latest/${currency_one}`) 
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        const rate = data.rates [currency_two];
        console.log(rate);
      });

}

//Event listeners
currrencyEl_one.addEventlistener('change', calculate);
amountEl_one.addEventlistener('input', calculate);
currencyEl_two.addEventlistener('change', calculate);
amountEl_two.addEventlistener('input', calculate);

calculate();