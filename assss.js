/*Create a function named checkEntry.
​It should accept two parameters: age (a number) and isVIP (a boolean: true or false).
​Rule 1: If isVIP is true, return "Access Granted: Welcome VIP!" immediately.
​Rule 2: If they are not a VIP, they must be 21 or older. If they are under 21, return "Access Denied: Too young!".
​Rule 3: If they pass both checks, return "Access Granted: Enjoy the night!".*/



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