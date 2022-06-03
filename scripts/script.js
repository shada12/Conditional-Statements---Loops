

// function to display the larger number
function largerNumber() {

  var num1 = parseInt(document.getElementById("num1").value);

var num2 = parseInt(document.getElementById("num2").value);

    if (num1 > num2) {

      document.getElementById("displayLarger").innerHTML = num1;
      
    }
    else if(num1 < num2){

      document.getElementById("displayLarger").innerHTML = num2;
    
    }
    else if(num1 == num2){

      document.getElementById("displayLarger").innerHTML = "Both numbers are equal";
    
    }
}


//Function that checks whether an integer is an even or an odd number
function checkEvenOdd() {

  var number = parseInt(document.getElementById("number").value);

    if (number % 2 == 0) {
        
      document.getElementById("display").innerHTML = number +" is "+"even";
    
    } else {

      document.getElementById("display").innerHTML = number +" is "+"odd";
    }
}
