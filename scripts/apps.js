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
        this.ageScore = 1;
        this.hungerScore = 5;
        this.bordomScore = 5;
        this.sleepScore = 5;
        // this.timer = 0;
    }

    // timerIncrease() {
    //     setInterval(() => {
    //         this.timer ++;
    //     }, 1000)
    // }
    ageIncrease() {
        setInterval(() => {
            this.ageScore ++;
        }, 1000);
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
    
    age() {
        this.ageScore ++;
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
        else if (this.ageScore === 10) {
            
        }
        return false;
    }

}

// timer: null,
// startTimer() {
//     this.timer = setInterval(this.increaseTime, 1000);
// };
// increaseTime() {
//     Cat.time ++;
//     $("#timer").text(`timer: ${Cat.time}s`);
//     if (Cat.time >= 10000) {
        
//     }
// }

$(function() {
    $("#name").submit(function(event) {
        event.preventDefault() // prevents game from starting without field being filled out, hopefully
    });

    $("#values").show();
    $("#name_box").hide();
    
    let name = $("#name_your_cat").val();

    let catName = new Cat(name);

        // Callback to score variables, 
        $("#hungerScore").text(catName.hungerScore);
        $("#sleepScore").text(catName.sleepScore);
        $("#boredomScore").text(catName.bordomScore);
        $("age").text(catName.age);
        catName.boredomIncrease();
        catName.hungerIncrease();
        catName.sleepinessIncrease();
        catName.ageIncrease();

        $(".displayName").text(catName.name);

        let scoreInterval = setInterval(function() {
            $("#hungerScore").text(catName.hungerScore);
            $("#sleepScore").text(catName.sleepScore);
            $("#boredomScore").text(catName.bordomScore);

            if (catName.didCatDie()) {
                
                $("#death").show();
                $("#values").hide();
                clearInterval(scoreInterval);
            }
        }, 2000);

        $("#feed").click(function() {
            catName.feed();
        })
        
        $("#pet").click(function(){
            catName.pet();
        })
      
        $("#sleep").click(function(){
            catName.toggleLight();
        })

        $("#reset").click(function() {
            $("death").hide();
            $("#values").show();
        });


});