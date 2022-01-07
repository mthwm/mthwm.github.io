let range = document.getElementById("hodnoceni-range");
let hodnoceniDiv = document.getElementById("hodnoceni");
hodnoceniDiv.innerHTML = "Ubohé";
let hodnoceniOptions = [
  "Ubohé",
  "Fujky",
  "Co to je tyvole?",
  "Klasický Kohoutův student",
  "Nic moc, kámo",
  "Průměrná práce",
  "Ujde to, chlapci",
  "Mňamka",
  "Hodně pog",
  "Velice povedené dílo",
  "CEO tvorby webu",
];

let hodnoceni = () => {
  hodnoceniDiv.innerHTML = hodnoceniOptions[range.value];
};

//PopUp s faktama o CuteBoysUwU

// document.body.onload = addElement;

// const factsheadings = [
//   "tady bude nadpis prvního faktu",
//   "tady bude nadpis druhého faktu",
//   "tady bude nadpis třetího faktu",
//   "tady bude nadpis čtvrtého faktu",
//   "tady bude nadpis pátého faktu",
//   "tady bude nadpis šestého faktu",
//   "tady bude nadpis sedmého faktu",
//   "tady bude nadpis osmého faktu",
//   "tady bude nadpis devátého faktu",
//   "tady bude nadpis desátého faktu",
// ];

// const facts = [
//   "tady bude první fakt",
//   "tady bude druhý fakt",
//   "tady bude třetí fakt",
//   "tady bude čtvrtý fakt",
//   "tady bude pátý fakt",
//   "tady bude šestý fakt",
//   "tady bude sedmý fakt",
//   "tady bude osmý fakt",
//   "tady bude devátý fakt",
//   "tady bude desátý fakt",
// ];

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// function addElement() {
//   let currentFact = getRandomInt(10);

//   const newDiv = document.createElement("div");
//   const newHeading = document.createElement("h1");
//   const newParagraph = document.createElement("p");
//   const newButton = document.createElement("button");

//   let newFactHeading = document.createTextNode(factsheadings[currentFact]);
//   let newFact = document.createTextNode(facts[currentFact]);
//   let newCloseButton = document.createTextNode("×");

//   newHeading.appendChild(newFactHeading);
//   newParagraph.appendChild(newFact);
//   newButton.appendChild(newCloseButton);
//   newDiv.appendChild(newHeading);
//   newDiv.appendChild(newButton);
//   newDiv.appendChild(newParagraph);
//   newDiv.className = "funfact";

//   const currentDiv = document.getElementById("home");
//   document.body.insertBefore(newDiv, currentDiv);

//   newButton.onclick = function closeFacts() {
//     document.body.removeChild(newDiv);
//   };

/**/ let clickCount = 0;
/**/ var easterEgg = new Audio("assets/facts.mp3");

/**/ let tatoFunkceNicNedela = () => {
  /**/ clickCount++;

  /**/ if (clickCount == 50) {
    /**/ easterEgg.play();
    /**/ clickCount = 0;
    /**/
  }
  /**/
};

//   function vygenerovatFakt() {
//     let oldFact = currentFact;
//     currentFact = getRandomInt(10);

//     if (currentFact == oldFact) {
//       currentFact = getRandomInt(10);
//     }

//     newHeading.removeChild(newFactHeading);
//     newParagraph.removeChild(newFact);

//     newFactHeading = document.createTextNode(factsheadings[currentFact]);
//     newFact = document.createTextNode(facts[currentFact]);

//     newHeading.appendChild(newFactHeading);
//     newParagraph.appendChild(newFact);
//   }

//   function updateTimer(pocetProcent) {
//     newDiv.style.setProperty("--timer", `${pocetProcent}%`);
//   }

//   var i = 1;

//   function myLoop() {
//     setTimeout(function () {
//       updateTimer(i);
//       i++;

//       if (i < 100) {
//         myLoop();
//       }
//     }, 100);
//   }

//   function dalsiFakt() {
//     setTimeout(function () {
//       i = 0;
//       vygenerovatFakt();
//       dalsiFakt();
//     }, 10000);

//     myLoop(newDiv);
//   }

//   dalsiFakt();
// }
