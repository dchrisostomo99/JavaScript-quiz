var i = 1;
var listItem = ' ';

function processInput() {
    if(i <= 5) {
       listItem = 'item' + i;
       document.getElementById(listItem).innerHTML = document.getElementById('toolBox').value;
       document.getElementById("toolBox").value = '';
       //Nested if statement 
       if(i === 5) {
        document.getElementById('resultsFin').innerHTML = 'Thanks for the suggestions';
       }//Ends nested if statement

       i++;
    }//Ends if statement
    
    document.getElementById('button').addEventListener('click', processInput);
  
}//Ends processInput function

