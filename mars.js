alert(`Starting you Mars Adventure!`);
alert(`Booting up...`);
alert(`All systems go!`);
alert(`Let's Start`);

const username = prompt(`Hi there. What's your name?`);

alert(`Hi ${username} --- Welcome to The Mars Adventrue Game.`);
alert(`Yesterday, you received a call from your good friend at NASA,`);
alert(`They ned someone to go to Mars this weekend, and YOU'VE been choosen!!`);

let excited = prompt(`Are you excited? (Type Y or N)`);

excited = excited.toLowerCase().trim();


if (excited.startsWith('y')) {
    alert(`I knew you'd say that. It's so cool that you're going to Mars!`);
} else if (excited.startsWith('n')) {
    alert(`Well, it's too late to back out now.`);
}

alert(`It's time to pack for your trip to Mars.`);
let numSuitcases = prompt(`How many suitcases do you plan to bring?`);

numSuitcases = Number(numSuitcases);

if (numSuitcases > 2) {
    alert(`That's way too many. You'll have to pack more lightly.`);
    alert(`Please try to fit your stuff into 2 suitcases.`);
} else {
    alert(`Perfect. You'll certainly fit in the spaceship!`);
}

alert(`You're allowed to bring one companion animal with you.`);

let companionType = prompt(`What kind of companion animal would you like to bring?`);
let companionName = prompt(`What is your companion's name?`);

let firstLetter = companionName[0];
firstLetter = firstLetter.toUpperCase();
let otherLetters = companionName.slice(1);
otherLetters = otherLetters.toLocaleLowerCase();
companionName = firstLetter + otherLetters;

alert(`Cool, so you're bringing ${companionName} the ${companionType}.`);

alert(`NASA has an interior design team offering to outfit your space ship.`);
alert(`You have a couple of options for the interior decor of your ship. Your options are:
    A   Sleek, modern minimalism
    B   Retro/vintage space age
    C   Victorian-era steampunk
    D   Farmhouse
    E   Mediterranean
`);

let decorChoice = prompt(`Which would you like? (A, B, or C)`);
decorChoice = decorChoice.toUpperCase();
let decor;
if (decorChoice === 'A') {
    decor = 'modern minimalist';
} else if (decorChoice === 'B') {
    decor = 'retro/vintage space age';
} else if (decorChoice === 'C') {
    decor = 'victorian-era steampunk';
} else if (decorChoice === 'D') {
    decor = 'farmhouse';
} else if (decorChoice === 'E') {
    decor = 'mediterranean';
}

alert(`Ok, ${username}, you can bring one more companion animal if you'd like.`);
let secondCompanionType = prompt(`What kind of animal will your second companion be?`);
let secondCompanionName = prompt(`What is your second companion's name?`);

firstLetter = secondCompanionName[0];
firstLetter = firstLetter.toUpperCase();
otherLetters = secondCompanionName.slice(1);
otherLetters = otherLetters.toLocaleLowerCase();
secondCompanionName = firstLetter + otherLetters;

alert(`So ${secondCompanionName} the ${secondCompanionType} is coming too.`);
alert(`But ${secondCompanionName} will probably need to ride in the cargo bay so that they don't get the ${decor} decor messy.`)

alert(`${username} and ${companionName}, surfing the celestial abyss, in a ${decor} spaceship, With ${secondCompanionName} in the cargo bay.`);

let timer = 5;
while (timer > 0) {
    alert(`${timer}...`);
    timer -= 1;
}
alert(`Houston, we have LIFTOFF!!!`);