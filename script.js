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

let clickCount = 0;
var factsSound = new Audio("assets/facts.mp3");

let tatoFunkceNicNedela = () => {
  clickCount++;
  fetch("https://api.countapi.xyz/update/Super_Stranka/ZULUL/?amount=1");

  if (clickCount == 50) {
    factsSound.play();
    clickCount = 0;
  }
};

// PopUp s faktama o CuteBoysUwU

const facts = [
  '(1) Tým se měl originálně jmenovat "cute gays uwu", ale kvůli potenciálním kontroverzím se název změnil',
  '(2) Inspirace na jméno vznikla díky steam komentáři pod profilem našeho spoluhráče, kde bylo "+rep cute gay uwu"',
  "(3) Náš tým vyhrál SpojeCup bez ztráty jediné mapy",
  "(4) MVP turnaje se stal těsně hráč Ace Effect, který hrál konzistentně každou hru",
  "(5) Ačkoliv to bude šok, většina z nás nejsou weebové",
  "(6) Tým má vlastního manažéra (Adama Náděje), který před každým zápasem poskytoval psychickou podporu",
  "(7) Není dobrý nápad proti nám hrát mirage",
  "(8) Tradicí týmu před každým turnajovým zápasem je prohrát faceit hru",
  "(9) V roster kartě hráče Čenda je napsáno, že byl faceit 8, ale není to pravda, programátor stránky byl podplacen, aby to tam uvedl",
  "(10) Ace Effect doopravdy nedupe své přítelkyni na hlavu",
  "(11) Je lehčí vyhrát Major, než najít Ghadenovu fotku s jeho obličejem",
  "(12) mthwm kupuje discord nitro náhodným ženám na internetu",
  "(13) Havelos a Čenda nejsou rasisti, to slovo na n je pouze navykové říkat",
  "(14) Ace Effect rád trashtalkuje své protivníky",
  "(15) mthwm je nejvíce reportovaný hráč týmu",
  '(16) Velký vliv na naše vítězství v zápasech je "Havel pauza"',
  "(17) Nejvíce banovaná mapa týmu je cache",
  "(18) Za celý SpojeCup cute boys uwu nikdy neprohráli ani jednou CT side polovinu",
  "(19) V průběhu SpojeCup cute boys uwu preferovali AUG oproti M4",
  "(20) Tým trénuje den a noc na SpojeCup 2",
];

let toggleFacts = () => {
  const factsShowButton = document.getElementById("factsToggle");
  factsShowButton.style.right = "-5rem";

  const factsDiv = document.createElement("div");
  const closeFacts = document.createElement("div");
  const factsSkip = document.createElement("div");
  const nextFact = document.createElement("div");
  const previousFact = document.createElement("div");
  const fact = document.createElement("div");
  closeFacts.onclick = () => {
    factsDiv.style.width = "0";
    factsDiv.style.right = "-5rem";
    fact.innerHTML = "";
    setTimeout(function () {
      factsShowButton.style.right = "4rem";

      var x = window.matchMedia("(max-width: 935px)");
      myFunction(x);
      x.addListener(myFunction);

      function myFunction(x) {
        if (x.matches) {
          factsShowButton.style.right = "1rem";
        } else {
          factsShowButton.style.right = "4rem";
        }
      }
    }, 250);
  };
  document.body.appendChild(factsDiv);
  factsDiv.appendChild(closeFacts);
  factsDiv.appendChild(fact);
  factsDiv.appendChild(factsSkip);
  factsSkip.appendChild(previousFact);
  factsSkip.appendChild(nextFact);
  closeFacts.innerHTML = '<i class="fas fa-chevron-right"></i>';
  nextFact.innerHTML = '<i class="fas fa-chevron-right"></i>';
  previousFact.innerHTML = '<i class="fas fa-chevron-left"></i>';
  closeFacts.className = "closeFacts";
  factsDiv.className = "factsDiv";
  factsSkip.className = "factsSkip";
  nextFact.className = "nextFact";
  fact.className = "fact";
  previousFact.className = "previousFact";
  factsDiv.style.width = "0vw";
  factsDiv.style.right = "-5rem";
  factsDiv.style.bottom = "0";
  var currentFact = 0;

  nextFact.onclick = () => {
    currentFact++;

    if (currentFact == 20) {
      currentFact = 0;
    }

    fact.innerHTML = facts[currentFact];
  };

  previousFact.onclick = () => {
    currentFact--;

    if (currentFact == -1) {
      currentFact = 19;
    }

    fact.innerHTML = facts[currentFact];
  };

  setTimeout(function () {
    factsDiv.style.right = "0";

    function myFunction(x) {
      if (x.matches) {
        factsDiv.style.width = "100vw";

        factsDiv.style.height = "15vh";
      } else {
        factsDiv.style.width = "30vw";
      }
    }

    var x = window.matchMedia("(max-width: 935px)");
    myFunction(x);
    x.addListener(myFunction);

    setTimeout(function () {
      fact.innerHTML = facts[0];
    }, 200);
  }, 250);
};
