

let x = 3
let y = 2

z = Math.pow(x,y);
console.log(z)

let a; 
let b;
let c;


// a = window.prompt("Enter side A");
// a = Number(a);

// b = window.prompt("Enter side B");
// b = Number(b);

// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

// console.log("side C:, c");


document.getElementById("submitButton").onclick = function(){


    
    a = document.getElementById("aTextbox").value;
    a = Number(a);

    b = document.getElementById("bTextbox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)); 

    document.getElementById("clabel").innerHTML = "SIDE C: " + c;
}
   

let count = 0;

document.getElementById("decreaseBtn").onclick = function() {
    count-=1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetBtn").onclick = function() {
    count=0;
    document.getElementById("countLabel").innerHTML = 0;
}

document.getElementById("increaseBtn").onclick = function() {
    count+=1;
    document.getElementById("countLabel").innerHTML = count;
}