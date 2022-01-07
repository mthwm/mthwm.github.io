let clickCount = 0;
let lukyClip = new Audio("/assets/menyhlava.mp3");

let luky = () => {
  clickCount++;
  console.log("ahoj");
  lukyClip.play();

  if (clickCount == 5) {
    clickCount = 0;
  }
  console.log(clickCount);
};
