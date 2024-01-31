//                //  PIAIC 1st Assignment :

let userInput = +prompt('Enter value')
let result = userInput % 2
if(result == 0) {  
   alert(userInput + ' is not prime number')
}
            
else{
    alert(userInput + ' is prime number')
}
            
//                    //    star task getting help   
            
var input_symbol = prompt("Please insert the symbol you like");
var count = parseInt(prompt("Please insert row count"));
var input_symbol_with_space= " "+input_symbol
            
for (i = 1; i <=count ; i++){
     var added_spaces=" "
        for (a=1;a<=count-i; a++){
            added_spaces=added_spaces +' '
        }
    console.log(added_spaces + input_symbol_with_space);
    input_symbol_with_space=input_symbol_with_space+ " " +input_symbol
}
            
//                           //  I won this task:
            
let symbol =  prompt("Enter symbol that's you want")
let symbol2 = symbol
let rowCount = +prompt(" Enter row count ")
            
for (let i = 1; i <= rowCount; i++) {
    document.write(symbol2 + '<br>')
    symbol2 += symbol    
}
            
//                           //   end of that task.
            
document.write('<h1>' + 'Loop start' + '</h1>')
for(let i = 0; i <= rowCount; i++) {
    for (let j = 0; j < rowCount; j++) {
        console.log(star + '<br>')
        star += star
    }
}
            