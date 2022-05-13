let kick = document.getElementById("kick");
let snare = document.getElementById("snare");
let hihat = document.getElementById("hihat");
let crash = document.getElementById("crash");
let pluck = document.getElementById("pluck");
let bell = document.getElementById("bell");

kick.addEventListener("click", playKick)
snare.addEventListener("click", playSnare)
hihat.addEventListener("click", playHiHat)
crash.addEventListener("click", playCrash)
pluck.addEventListener("click", playPluck)
bell.addEventListener("click", playBell)

function playKick() {
    kickSample = new Audio("assets/Kick.wav");
    kickSample.play()
};

function playSnare() {
    snareSample = new Audio("assets/Snare.wav");
    snareSample.play()
};

function playHiHat() {
    hiHatSample = new Audio("assets/HiHat.wav");
    hiHatSample.play()
};

function playCrash() {
    crashSample = new Audio("assets/Crash.wav");
    crashSample.loop = false;
    crashSample.play()

};

function playPluck() {
    pluckSample = new Audio("assets/Pluck.wav");
    pluckSample.play()
};

function playBell() {
    bellSample = new Audio("assets/Bell.wav")
    bellSample.loop = false;
    bellSample.play()

};