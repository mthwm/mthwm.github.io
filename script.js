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
  document.body.appendChild(factsDiv);
  factsDiv.appendChild(closeFacts);
  closeFacts.innerHTML = '<i class="fas fa-chevron-right"></i>';
  closeFacts.className = "closeFacts";
  factsDiv.className = "factsDiv";
  factsDiv.style.width = "0vw";
  factsDiv.style.right = "-5rem";
  setTimeout(function () {
    factsDiv.style.width = "30vw";
    factsDiv.style.right = "0";

    setTimeout(function () {
      //
    }, 250);
  }, 250);
};
