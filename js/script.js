const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');



const jump = () => {
mario.classList.add('jump');

setTimeout(()=>{
    
    mario.classList.remove('jump')

},500);
}

const loop = setInterval(() => {

    console.log('loop')
    
const pipePosition = pipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px' , '');

console.log(marioPosition);

if(pipePosition <= 70 && pipePosition > 0 && marioPosition < 90){



    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`

    mario.style.animation = 'none';
    mario.style.left = `${marioPosition}px`

    mario.src = './imagens/SMAS_SMB_Mario_Death_Sprite.webp'
    mario.style.width = '80px'
    mario.style.marginLeft = '-5px'

    clearInterval(loop);
}


}, 10);


document.addEventListener('keydown', jump);

let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");

let interval = null;
let playerScore = 0;


let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;
}


let result = setInterval(() => {
    let playerBottom = parseInt(getComputedStyle(mario).getPropertyValue("bottom"));
    //    console.log("playerBottom" + playerBottom);

    let blockLeft = parseInt(getComputedStyle(pipe).getPropertyValue("left"));
    //    console.log("BlockLeft" + blockLeft);

    if (playerBottom <= 90 && blockLeft >= 20 && blockLeft <= 145) {
        //        console.log("Game Over");

        gameOver.style.display = "block";
        pipe.classList.remove("blockActive");
        road.firstElementChild.style.animation = "none";
        cloud.firstElementChild.style.animation = "none";
        clearInterval(interval);
        playerScore = 0;
    }
}, 10);