console.log("Don't Kill The Cat");

/* == MVP == */

// 20+ commits
// Working game

// User story names their pet and clicks start the game begins and new content box pops up.
// Content box has 3 buttons - Feed, Pet, and a Light toggle.
// Feed decreases hunger variable
// Pet decreases Boredom variable
// light toggle decreases sleepiness variable
// All variables (except age) start at 5 and increase every 30s
// Age starts at 1 and increases every minute by 1.
// At Ages 3, 6, and 9, cat grows bigger 

// All variables increase as time increment increases between corresponding button clicks. Except age increases continually unless game ends.

// Game over when any variable reaches 10.
// User wins when age reaches 10



class Cat {
    constructor(name) {
        this.name = name;
        this.age = 1;
        this.hungerScore = 5;
        this.bordomScore = 5;
        this.sleepScore = 5;
    }
    ageIncrease() {
        setInterval(() => {
            this.age ++;
        }, 60000);
    }
    
    hungerIncrease() {
        setInterval(() => {
            this.hungerScore ++;
        }, 10000);
    }

    sleepinessIncrease() {
        setInterval(() => {
            this.sleepScore ++;
        }, 10000);
    }

    boredomIncrease() {
        setInterval(() => {
            this.bordomScore --;
        }, 10000);
    }

    feed() {
        this.hungerScore --;
    }

    toggleLight() {
        this.sleepScore --; 
    }

    pet() {
        this.bordomScore --;
    }

    didCatDie() {
        if (this.hungerScore === 10 || this.sleepScore == 10 || this.bordomScore === 10) {
            return true;
        }
        else return false;
    }

}

$(function() {
    $("#name").click(function() {
        return false; // prevents game from starting without field being filled out, hopefully
    });
        
        
});