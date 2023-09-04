//defis n°1
let message = "There is no war in Ba Sing Se";
let words = message.split(" ").length;

console.log(`The message contains ${words} words.`);
// defis N°2
let countries = ['China','Japan','South Korea','Vietnam','Malaysia'];
let capitals = ['Beijing','Tokyo','Seoul','Hanoï','Kuala Lumpur'];

for (let i = 0; i < countries.length; i++) {
    console.log(`Your country: ${countries[i]} has the capital named: ${capitals[i]}.`);
}
//defi n°3
let randomizer = Math.floor(Math.random() * 4);
let fate;

if (randomizer === 0) {
    fate = "A certain victory";
} else if (randomizer === 1) {
    fate = "Not so certain victory";
} else if (randomizer === 2) {
    fate = "An uneasy victory";
} else {
    fate = "Your fate is unclear, ô chosen undead";
}

console.log(`Your fate: ${fate}`);
//defis n°4
function checkSeason(month) {
    if (month >= 3 && month <= 5) {
        return "Spring";
    } else if (month >= 6 && month <= 8) {
        return "Summer";
    } else if (month >= 9 && month <= 11) {
        return "Autumn";
    } else {
        return "Winter";
    }
}

// Example usage:
let currentMonth = 7; // Change this to the current month (1-12)
let currentSeason = checkSeason(currentMonth);
console.log(`You are in ${currentSeason}.`);

