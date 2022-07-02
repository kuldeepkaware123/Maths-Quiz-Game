var playing = false;
var score;
var action;
var remaning;
var correctanswer;
// if we click start / reset button
document.getElementById("startreset").onclick =
    function () {
        //if we are playing
        if (playing == true) {
            location.reload();//reload the page
        }
        else {
            //if we are not playing
            playing = true;
            //set score to 0
            score = 0;
            document.getElementById("scorevalue").innerHTML = score;
            //show countdown box
            // timeleft?
            remaning = 20;
            document.getElementById("remaining").innerHTML = remaning;
            show("time");
            hide("gameover")
            //change button to reset
            document.getElementById("startreset").innerHTML = "Reset Game"
            //reduse time by 1sec in loops
            //start countdown
            startcountdown();
            //genrate new Qand A
            genreteQandA();

        }
    }
// functions

//startcountdown
function startcountdown() {
    action = setInterval(function () {
        remaning -= 1;
        document.getElementById("remaining").innerHTML = remaning;
        if (remaning == 0) {
            //game over
            stopcountdown();
            show("gameover");
            document.getElementById("gameover").innerHTML = "<p>Game Over!</p><p>Your score is " + score + "</p>";
            hide("time");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game"
        }
    }, 1000);

}
//stopcountdown
function stopcountdown() {
    clearInterval(action);
}
//hide element
function hide(id) {
    document.getElementById(id).style.display = "none";
}
//show element
function show(id) {
    document.getElementById(id).style.display = "block";
}
//Question and Answer
function genreteQandA() {
    var x = Math.round(Math.random() * 9) + 1;
    var y = Math.round(Math.random() * 9) + 1;
    correctanswer = x * y;
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctposition = Math.round(Math.random() * 3) + 1;
    document.getElementById("box" + correctposition).innerHTML = correctanswer;

    // fill the wrong answer
    var answer = [correctanswer];

    for (i = 1; i < 5; i++) {
        if (i != correctposition) {
            var wronganswer;
            do {
                wronganswer = (Math.round(Math.random() * 9) + 1) * (Math.round(Math.random() * 9) + 1);
                document.getElementById("box" + i).innerHTML = wronganswer;
            } while (answer.indexOf(wronganswer) > -1);
            document.getElementById("box" + i).innerHTML = wronganswer;
            answer.push(wronganswer);
        }
    }
}
for(i=1;i<5;i++){
//if we click on answer box
document.getElementById("box"+i).onclick =
    function () {
        //check if we are playing
        if (playing == true) {
            //correct?
            //yes
            if (this.innerHTML == correctanswer) {
                //correct answer
                //increase score
                score++;
                document.getElementById("scorevalue").innerHTML = score;
                //show correct box for 1sec
                hide("wrong");
                show("correct");
                setTimeout(function () {
                    hide("correct");
                }, 1000);
                 //generate new Q and A
                genreteQandA();
            }
            else {
                hide("correct");
                show("wrong");
                setTimeout(function(){
                    hide("wrong");
                }, 1000);
            }
        }
    }
    
}







     
    //no
      //show try again box for 1sec
