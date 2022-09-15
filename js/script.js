const mario = document.querySelector('.mario');
const fantamas = document.querySelector('.fantamas');
const bala = document.querySelector('.bala');
const pipe = document.querySelector('.pipe');
const score = document.querySelector('.score');
textStart = document.querySelector('text-start')
textNovo = document.querySelector('text-novo')
audioStart = new Audio('./audio/theme.mp3')
audioGameOver = new Audio('./audio/gameover.mp3')

let count = 0;

const jump = () => {
     mario.classList.add('jump')

     setTimeout(() => {
        mario.classList.remove('jump')

     }, 700);

}
const move = () => {
    mario.classList.add('move')

    setTimeout(() => {

    }, 700);

}
const start = () => {
    

    document.getElementById("text-start").style.color = "rgb(236, 236, 236)";
    document.getElementById("text-novo")

    pipe.classList.add('pipe-animation');

    audioStart.play();
}

document.addEventListener('keydown', start);

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 93) {
        

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src="./img/game-over.png"
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        function stopAudioStart(){
            audioStart.pause();
            }stopAudioStart();

        audioGameOver.play();

        function stopAudio(){
            audioGameOver.pause();
            }setTimeout(stopAudio, 8000);

            document.getElementById("text-start").style.color = "black";
            document.getElementById("text-start").innerHTML="<strong>GAME OVER</strong>";
            document.getElementById("text-novo").innerHTML="<strong>Aperte F5 para começar de Novo</strong>";

        alert(`Game Over! Seu Score Foi: ${count}`);
        count = 0;
    
        clearInterval(loop);
    }
        count++;
        score.innerHTML = `SCORE: ${count}`;
    
  }, 10);



  document.addEventListener('keydown', jump);