 function calculateCost() {
        const totalCostElement = document.getElementById('total-Cost');
        const totalCostValue = totalCostElement.value;
        const number = parseFloat(totalCostValue);
        
        console.log(totalCostValue);
        console.log(typeof number);

        if (totalCostValue < 40) {
          
          document.querySelector('.js-displayCost').innerHTML =`$${totalCostValue}`;
        } else if (totalCostValue >= 40) {
          const plusShipping = number + 10;
          document.querySelector('.js-displayCost').innerHTML =`$${plusShipping}`;

        }
        
      };