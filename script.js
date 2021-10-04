//Things to do today if you dont know what to do

//greeting
const greeting = (firstName, lastName) =>{
    return console.log(`Hello ${firstName} ${lastName}! This is what you should do today!`);
}

//quotes

const actions = ["Go to the beach", "Visit your friends", "Learn something new", "Read a book", "Watch a movie", "Do charity", "Do Yoga", "Finish your favorite serie", "Grab the keys and drive far away", "Play your favorite song at max volumen"];
const activities = ["grab some beers", "turn on the grill", "cook some appetizers", "ask a delivery for your favorite dish", "play soccer", "ride in a harley-davidson", "play poker"];
const finishers = ["buy your favorite shoes.", "get up to the car and grab your crush.", "have fun.", "go to fish in a boat.", "do kyak in the river.", "take photos.", "record all the moments.", "dance with your friends."];

//ramdom function

const randomStuff = array => {
    let arrayLength = array.length;
    let randomIndex = Math.floor(Math.random() * arrayLength);
    return array[randomIndex];
}

//console.log(randomStuff(actions)); --Test working

//object generator
const activitiesForToday = (actions, activities, finishers) =>{
    return{
        actions,
        activities,
        finishers
    }
}

//activities object generated
const toDo = activitiesForToday(randomStuff(actions), randomStuff(activities), randomStuff(finishers));

//output
greeting("Ricardo", "Atoche");
console.log(`${toDo.actions}, ${toDo.activities} and ${toDo.finishers}`);