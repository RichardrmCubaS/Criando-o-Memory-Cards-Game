// Arreglo de iamgens //
const emojis = [
"🐱",
"🐱",
"🐺",
"🐺",
"🐶",
"🐶",
"🐵",
"🐵",
"🐯",
"🐯",
"🐮",
"🐮",
"🦁",
"🦁",
"🐰",
"🐰",
"🐴",
"🐴",
"🐔",
"🐔",
"🐼",
"🐼",
"🐷",
"🐷"
];

let openCards = [];

// oragnização aleatoria dos Cards
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

// ciclo para presentar iamgens na tela //
for(let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);    
}

// Função de sons do jogo.
function playSound(nomeAudio) {
    let audio = new Audio(`./src/sounds/${nomeAudio}.mp3`);
    audio.volume = 0.4;
    audio.play();
}

// Funçaõ de manejo do click acima de imagens //
function handleClick() {
    if(openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }
    if(openCards.length == 2) {
        setTimeout(checkMatch, 500);
    }
}

// Funçaõ comparação de Cards //
function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
        playSound("hit");
    }else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");        
    }
    openCards = [];
    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        gameOver();        
    }
}

// Função de finalizaçaõ do jogo.
function gameOver(){
    const imageUrl='./src/images/gameover.fw.png';    
    playSound("gameover");
    swal.fire({
        title: 'Game Over, Good Job',
        text: 'Congratulations!!!',
        icon: imageUrl
      })
      .then(()=>{
          window.location.reload();
      })
    }
