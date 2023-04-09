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