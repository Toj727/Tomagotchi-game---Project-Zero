console.log("Don't Kill The Cat");

/* == MVP == */

// 20+ commits
// Working game

// User story names their pet and clicks start the game begins and new content box pops up.
// Content box has 3 buttons - Feed, Pet, and a Light toggle.
// Feed decreases hunger variable
// Pet decreases Boredom variable
// light toggle decreases sleepiness variable
// All variables (except age) start at 5 and increase every 10s
// Age starts at 1 and increases every minute by 1.
// At Ages 3 and 6 cat grows bigger 

// All variables increase as time increment increases between corresponding button clicks. Except age increases continually unless game ends.

// Game over when any variable (besides age) reaches 10.

let age3Pic = "https://placekitten.com/200/287";
let age6Pic = "https://www.vhv.rs/dpng/d/525-5252943_not-my-art-pusheen-nyan-cat-x3-pixel.png";

class Cat {
    constructor(name) {
        this.name = name;
        this.ageScore = 1;
        this.hungerScore = 5;
        this.bordomScore = 5;
        this.sleepScore = 5;
        this.scoreInterval = null;
    }

  
    ageIncrease() {
        setInterval(() => {
            this.ageScore ++;
        }, 5000);
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
            this.bordomScore ++;
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

console.log(hungerScore)

$(document).ready(function() {
    let name;
    let catName;
 
    $("#values").show();
    
  
    const startGame = function() {
        console.log($("#name").attr("value"), $("#name").val())
        console.log("clicked");
        name = $("#name").val();
        $(".gameBegins").hide();
    console.log(name)
    const catName = new Cat(name);
    $(".displayName").text(catName.name);
        // Callback to score variables, 
        
        $("#hungerScore").text(catName.hungerScore);
        $("#sleepScore").text(catName.sleepScore);
        $("#boredomScore").text(catName.bordomScore);
        $("#age").text(catName.ageScore);
        catName.boredomIncrease();
        catName.hungerIncrease();
        catName.sleepinessIncrease();
        catName.ageIncrease();
    
    
        
        catName.scoreInterval = setInterval(function() {
        $("#age").text(catName.ageScore);
        $("#hungerScore").text(catName.hungerScore);
        $("#sleepScore").text(catName.sleepScore);
        $("#boredomScore").text(catName.bordomScore);
        if (catName.ageScore === 3) {
            $("#age1").attr("src", age3Pic)
        }
        if (catName.ageScore === 6) {
            $("#age1").attr("src", age6Pic)
        }
        if (catName.didCatDie()) {
            
            $("#death").show();
            $("#values").hide();
            clearInterval(scoreInterval);
        }
    }, 1000)
    
   
    console.log(catName)
    

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
        })
       
        
    }  
    $("#newCat").on("click", startGame);
    })



