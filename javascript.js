var ans;
var playing = false;
var score;
var action;
var timeremaining;
//if we click on the start/reset button
document.getElementById("startreset").onclick =
    function(){
    //if we are playing
    if(playing == true){
        //reload page
        location.reload();
    }
    //if not playing
    else{
        //turn playing mode to true
        playing = true;
        //change button to reset game
        document.getElementById("startreset").innerHTML = "Reset Game";
        //set score to 0
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        //show countdown box
        show("timeremaining");
        timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        
        //Hide game over
        hide("gameover");
        //reduce time by 1 second in loops
        startCountdown();


        //generate new math question
        generateQuestion();
    }

}
//if we click on the answer box
for(var i = 1; i<5; i++){
document.getElementById("box"+i).onclick = function(){
    //check if we are playing
    if(playing == true){
        //if answer correct
        if(this.innerHTML == ans){
            score++;
            document.getElementById("scorevalue").innerHTML = score;  
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            },  1000);
            generateQuestion();
        }
        else{
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            }, 1000);        
        }
            //show correct box for 1 sec
            //generate new math question
        //if answer wrong
            //show try again box for 1 sec
    }
}
}
function startCountdown(){
    action = setInterval(function(){
        timeremaining -= 1;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if(timeremaining == 0){ // game over
            stopCountdown();
            show("gameover");
            document.getElementById("gameover").innerHTML = "<p>GAME OVER!</p>" + "<p>YOUR SCORE IS " + score + "</p>";
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";
        }
    }, 1000);
}
function stopCountdown(){
    clearInterval(action);
}
function hide(id){
    document.getElementById(id).style.display = "none";
}
function show(id){
    document.getElementById(id).style.display = "block";
}
function generateQuestion(){
    var x = 1+Math.round(Math.random()*9);
    var y = 1+Math.round(Math.random()*9);
    var boxans = 1+Math.round(Math.random()*3);
    document.getElementById("question").innerHTML = x + "x" + y;
    ans = x*y;
    var randnums = [(x*y+1),(x*y-1),(x+y)];
    var counter = 0;
    document.getElementById("box"+boxans).innerHTML = ans;
    for(var i = 1; i<5; i++){
        if(i == boxans){
            continue;
        }
        document.getElementById("box"+i).innerHTML = randnums[counter];
        counter++;
    }
    
}