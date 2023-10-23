var drumButtons = document.querySelectorAll(".drum");

for (var j = 0; j < drumButtons.length; j++) {
  drumButtons[j].addEventListener("click", function() {
    var buttonStyle = this.innerHTML;
    playSound(buttonStyle);
    // animation(buttonStyle);
  });
}

document.addEventListener("keypress", function(event) {
  var key = event.key.toLowerCase();
  if (["w", "a", "s", "d", "j", "k", "l"].includes(key)) {
    playSound(key);
    // animation(key);
  }
});

function playSound(key) {
  var sound;
  switch (key) {
    case "w":
      sound = new Audio('./sounds/tom-1.mp3');
      break;
    case "a":
      sound = new Audio('./sounds/tom-2.mp3');
      break;
    case "s":
      sound = new Audio('./sounds/tom-3.mp3');
      break;
    case "d":
      sound = new Audio('./sounds/tom-4.mp3');
      break;
    case "j":
      sound = new Audio("./sounds/kick-bass.mp3");
      break;
    case "k": 
      sound = new Audio("./sounds/crash.mp3");
      break;
    case "l":
      sound = new Audio("./sounds/kick-bass.mp3");
      break;
    default:
      console.log(key);
      return;
  }
  sound.play();
}

// function animation(currentKey) {
//   var activeButton = document.querySelector("." + currentKey);
//   activeButton.classList.add("animation");
//   setTimeout(function() {
//     activeButton.classList.remove("animation");
//   }, 100);
// }
