var Usernumber = 10;
var counter = 0;
var MaxTries = 5; //Max attempt user can guess 

// Generate a random number
var RandomNumber = Math.floor(Math.random() * Usernumber) +1; 


while ( Attempts != RandomNumber ){
    var Attempts = prompt("pick a number between 1 and " + Usernumber);
    counter += 1;

if (counter > MaxTries) {
    document.write("YOU LOST! Refresh to play again");
    break
    
}

if (Attempts == RandomNumber){
document.write("congrats! you got it!");

document.write("<p>The Random number was" + RandomNumber + "</p>");

document.write("<p> it took you" + Counter + "Attempts to get the correct Number</p>");
 
 }

}
