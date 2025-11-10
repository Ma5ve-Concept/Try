function subFunction() {

      const buttonElememt = document.querySelector('.subscribed-btn');

      if (buttonElememt.innerHTML === 'Subscribe') {
        buttonElememt.innerHTML = 'Subscribed';
      } else  {
        buttonElememt.innerHTML = 'Subscribe'
      };
    };