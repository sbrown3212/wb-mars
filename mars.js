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

