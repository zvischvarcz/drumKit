
const boomAudio = new Audio("./sounds/boom.wav");
const clapAudio = new Audio("./sounds/clap.wav");
const hihatAudio = new Audio("./sounds/hihat.wav");
const kickAudio = new Audio("./sounds/kick.wav");
const openhatAudio = new Audio("./sounds/openhat.wav");
const rideAudio = new Audio("./sounds/ride.wav");
const snareAudio = new Audio("./sounds/snare.wav");
const tinkAudio = new Audio("./sounds/tink.wav");
const tomAudio = new Audio("./sounds/tom.wav");


const boomButton = document.getElementById("boomButton");
const clapButton = document.getElementById("clapButton");
const hihatButton = document.getElementById("hihatButton");
const kickButton = document.getElementById("kickButton");
const openhatButton = document.getElementById("openhatButton");
const rideButton = document.getElementById("rideButton");
const snareButton = document.getElementById("snareButton");
const tinkButton = document.getElementById("tinkButton");
const tomButton = document.getElementById("tomButton");


function playBoom() {
    boomAudio.play();
}
const playClap = () => {
    clapAudio.play();
}
const playHihat = () => {
    hihatAudio.play();
}
const playKick = () => {
    kickAudio.play();
}
const playOpenhat = () => {
    openhatAudio.play();
}
const playRide = () => {
    rideAudio.play();
}
const playSnare = () => {
    snareAudio.play();
}
const playTink = () => {
   tinkAudio.play();
}
const playTom = () => {
    tomAudio.play();
}

boomButton.addEventListener("click", playBoom)
document.addEventListener("keydown", (event) => {
    if (event.key == "1") {
        playBoom();
    }
})

clapButton.addEventListener("click", playClap)
document.addEventListener("keydown", (event) => {
    if (event.key == "2") {
        playClap();
    }
})

hihatButton.addEventListener("click", playHihat)
document.addEventListener("keydown", (event) => {
    if (event.key == "3") {
        playHihat();
    }
})

kickButton.addEventListener("click", playKick)
document.addEventListener("keydown", (event) => {
    if (event.key == "4") {
        playKick();
    }
})

openhatButton.addEventListener("click", playOpenhat)
document.addEventListener("keydown", (event) => {
    if (event.key == "5") {
        playOpenhat();
    }
})

rideButton.addEventListener("click", playRide)
document.addEventListener("keydown", (event) => {
    if (event.key == "6") {
        playRide();
    }
})

snareButton.addEventListener("click", playSnare)
document.addEventListener("keydown", (event) => {
    if (event.key == "7") {
        playSnare();
    }
})

tinkButton.addEventListener("click", playTink)
document.addEventListener("keydown", (event) => {
    if (event.key == "8") {
        playTink();
    }
})

clapButton.addEventListener("click", playTom)
document.addEventListener("keydown", (event) => {
    if (event.key == "9") {
        playTom();
    }
})



