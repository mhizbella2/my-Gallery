function calculateGrade(score) {
    if (score < 0 || score > 100) {
        return "Invalid score";
    } else if (score >= 70) {
        return "A";
    } else if (score >= 60) {
        return "B";
    } else if (score >= 50) {
        return "C";
    } else {
        return "F";
    }
}
console.log("Score 75:" + calculateGrade(75)); // Output: Score 75: A
console.log("Score 65:" + calculateGrade(65)); // Output: Score 65: B
console.log("Score 55:" + calculateGrade(55)); // Output: Score 55: C
console.log("Score 45:" + calculateGrade(45)); // Output: Score 45: F


//Generate a random integer between 1 and 10
function guessingGame() {
    const targetNumber = Math.floor(Math.random() * 10) + 1;
    const maxAttempts =5;

    const guesses = [2, 5, 8, targetNumber];
    console.log("--- Starting Guessing Game ---");
    
    for (let attempt =1; attempt <= maxAttempts; attempt++) {
    let currentGuess = guesses[attempt -1];

console.log(`Attempt ${attempt}: Guessed ${currentGuess}`);

if (currentGuess === targetNumber) {
    console.log("Congratulations! You guessed the correct number.");
    return;// Exit the function When won
}else {
    console.log("Wrong guess!");
}
    }
    console.log(`Game Over! The target number was ${targetNumber}`);
}
guessingGame();


//Print FizzBuzz from 1 to 30
console.log("---FizzBuzz---");

for (let i= 1; i <=30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
}
//Check if divided by 3 
else if (i % 3 === 0) {
    console.log("Fizz");
}
//Check if diviided by 5 
else if (i % 5 === 0) {
    console.log("Buzz");
}
//Otherwise, just print the number
else {
    console.log(i);
}
}
