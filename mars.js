// alert(`Starting you Mars Adventure!`);
// alert(`Booting up...`);
// alert(`All systems go!`);
// alert(`Let's Start`);

// const username = prompt(`Hi there. What's your name?`);

// alert(`Hi ${username} --- Welcome to The Mars Adventrue Game.`);
// alert(`Yesterday, you received a call from your good friend at NASA,`);
// alert(`They ned someone to go to Mars this weekend, and YOU'VE been choosen!!`);

let excited = prompt(`Are you excited? (Type Y or N)`);

excited = excited.toUpperCase();

if (excited === `Y`) {
    alert(`I knew you'd say that. It's so cool that you're going to Mars!`);
} else if (excited === `N`) {
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
const companionType = prompt(`What kind of companion animal would you like to bring?`);
const companionName = prompt(`What is your companion's name?`);
alert(`Cool, so you're bringing ${companionName} the ${companionType}.`);

