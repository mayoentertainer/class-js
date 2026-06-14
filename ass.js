//write a function that converts temperature in degree fahrenheit to degree celsius
//  and also from degree celsius to degree fahrenheit

function fahrenheit_to_celsius(F){
  let results = (F - 32) * 5/9;
  console.log(results)
}
fahrenheit_to_celsius(68)


function celsius_to_fahrenheit(C){
  let resultss = (C * 9/5) + 32;
  console.log(resultss)
}
celsius_to_fahrenheit(20)


function checkEntry(age, isVIP) {
    if (isVIP === true){
        return "Acess Granted, Welcome VIP";
    }
    else if(age < 21){
        return "Acess Denied, Too young";
    }
    else{
        return "Acess Granted, Enjoy the night";
    }
    
    
}
