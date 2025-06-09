// Code your solutions in this file

// Looping Lab

//>Introduction
//>>programming without "for" loop <<<inefficient
/* const gifts = ["teddy bear", "drone", "doll"];

function wrapGift(gift) {
    console.log(`Wrapped ${gift} and added a bow!`);
}

wrapGift(gifts[0]);
wrapGift(gifts[1]);
wrapGift(gifts[2]); */


//>The "for" loop
/* for ([initialization]; [condition]; [iteration]) {
    [loop body]
} */

//>>Examples
/* for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
} */


//> Using "for" with Arrays
/* const gifts = ["teddy bear", "drone", "doll"];

function wrapGift(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGift(gifts); */ 


//>Assignment

function writeCards(names, event) {
    const msgs = [];

    for (let n = 0; n < names.length; n++) {
        const msg = `Thank you, ${names[n]}, for the wonderful ${event} gift!`;
        msgs.push(msg);
    }
    return msgs;
}


//>The "while" loop
/* while ([condition]) {
    [loop body]
} */

/* const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    let i = 0; //the initialization moves OUTSIDE the body of the loop!
    while (i < gifts.length) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i++; // the iteration moves INSIDE the boody of the loop!
    }

    return gifts;
}

wrapGifts(gifts);
// LOG: Wrapped teddy bear and added a bow!
// LOG: Wrapped drone and added a bow!
// LOG: Wrapped doll and added a bow!
// => ["teddy bear", "drone", "doll"] */

/* function plantGarden() {
    let keepWorking = true;
    while (keepWorking) {
        chooseSeedLocation();
        plantSeed();
        waterSeed();
        keepWorking = checkForMoreSeeds();
    }
} */


//>When to Use "for" and "while"
/* let countup = 0;
while(countup < 10) {
    console.log(countup++);
} */

/* for (let countup = 0; countup < 10; countup++) {
    console.log(countup);
} */


//>Assignment

function countDown(n) {
    while(n >= 0) {
        console.log(n--);
    }
}



