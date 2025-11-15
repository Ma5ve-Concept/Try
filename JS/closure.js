// closure is a function inside another function, the inner function has access to the variables and scope of the outer function.

//closure allow for private variables and state maintainace used frequently in javascript frameworks: react, VUE Angular.

//closure is a form of global variable scope formed in a function inside another function. 

function outerfunction() {
  let message = 'Hello'
  function innerfunction() {
    console.log(message);
  }

  innerfunction();
};

outerfunction();