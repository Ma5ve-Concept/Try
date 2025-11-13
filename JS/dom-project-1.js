function subFunction() {

      const buttonElememt = document.querySelector('.subscribed-btn');

      if (buttonElememt.innerHTML === 'Subscribe') {
        buttonElememt.innerHTML = 'Subscribed';
        buttonElememt.classList.add('is-subscribed')
      } else  {
        buttonElememt.innerHTML = 'Subscribe';
        buttonElememt.classList.remove('is-subscribed');
      };
    };