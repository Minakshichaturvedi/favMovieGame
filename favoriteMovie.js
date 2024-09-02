const favMovie = 'Dangal';
let guess = prompt("guess my favorite movie");

while((guess != favMovie) && guess != "quit") {
 console.log('wrong');
 guess = prompt("wrong guess please try again");
}
if(guess == favMovie){
    console.log('congrats ! you win');
}