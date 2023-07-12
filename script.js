
const allSoundEffects = {
    boom: {
      audio: new Audio("./sounds/boom.wav"),
      button: document.getElementById("boomButton"),
      key: "1",
    },
    clap: {
      audio: new Audio("./sounds/clap.wav"),
      button: document.getElementById("clapButton"),
      key: "2",
    },
    hihat: {
      audio: new Audio("./sounds/hihat.wav"),
      button: document.getElementById("hihatButton"),
      key: "3",
    },
    kick: {
      audio: new Audio("./sounds/kick.wav"),
      button: document.getElementById("kickButton"),
      key: "4",
    },
    openhat: {
      audio: new Audio("./sounds/openhat.wav"),
      button: document.getElementById("openhatButton"),
      key: "5",
    },
    ride: {
      audio: new Audio("./sounds/ride.wav"),
      button: document.getElementById("rideButton"),
      key: "6",
    },
    snare: {
      audio: new Audio("./sounds/snare.wav"),
      button: document.getElementById("snareButton"),
      key: "7",
    },
    tink: {
      audio: new Audio("./sounds/tink.wav"),
      button: document.getElementById("tinkButton"),
      key: "8",
    },
    tom: {
      audio: new Audio("./sounds/tom.wav"),
      button: document.getElementById("tomButton"),
      key: "9",
    },
  };
  
  const playSound = (sound) => {
    sound.audio.currentTime = 0;
    sound.audio.play();
  }
  
  
  const setupSoundEffect = (drumSound) => {
    drumSound.button.addEventListener("click", () => playSound(drumSound));
    document.addEventListener("keydown", (event) => {
      if (event.key === drumSound.key) {
        playSound(drumSound);
        drumSound.button.classList.add("keyPush")
        setTimeout(() => {
            drumSound.button.classList.remove("keyPush")
          },150);
      }
    });
  }
  
  for (const key in allSoundEffects) {
    setupSoundEffect(allSoundEffects[key]);
  }
