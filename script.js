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
  'Tým se měl originálně jmenovat "cute gays uwu", ale kvůli potenciálním kontroverzím se název změnil',
  'Inspirace na jméno vznikla díky steam komentáři pod profilem našeho spoluhráče, kde bylo "+rep cute gay uwu"',
  "Náš tým vyhrál SpojeCup bez ztráty jediné mapy",
  "MVP turnaje se stal těsně hráč Ace Effect, který hrál konzistentně každou hru",
  "Ačkoliv to bude šok, většina z nás nejsou weebové",
  "Tým má vlastního manažéra (Adama Náděje), který před každým zápasem poskytoval psychickou podporu",
  "Není dobrý nápad proti nám hrát mirage",
  "Tradicí týmu před každým turnajovým zápasem je prohrát faceit hru",
  "V roster kartě hráče Čenda je napsáno, že byl faceit 8, ale není to pravda, programátor stránky byl podplacen, aby to tam uvedl",
  "Ace Effect doopravdy nedupe své přítelkyni na hlavu",
  "Je lehčí vyhrát Major, než najít Ghadenovu fotku s jeho obličejem",
  "mthwm kupuje discord nitro náhodným ženám na internetu",
  "Havelos a Čenda nejsou rasisti, to slovo na n je pouze navykové říkat",
  "Ace Effect rád trashtalkuje své protivníky",
  "mthwm je nejvíce reportovaný hráč týmu",
  'Velký vliv na naše vítězství v zápasech je "Havel pauza"',
  "Nejvíce banovaná mapa týmu je cache",
  "Za celý SpojeCup cute boys uwu nikdy neprohráli ani jednou CT side polovinu",
  "V průběhu SpojeCup cute boys uwu preferovali AUG oproti M4",
  "Tým trénuje den a noc na SpojeCup 2",
];

let getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

let toggleFacts = () => {
  //
};
