score = 0;
cross = true;

var button = document.getElementById("start");
var highScore = 0;
document.onkeydown = function (e) {
    if (e.keyCode === 38) {
        krish = document.querySelector('.krish');
        krish.classList.add('animateKrish');
        setTimeout(() => {
            krish.classList.remove('animateKrish')
        }, 700);
    }
}

setInterval(() => {
    krish = document.querySelector('.krish');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(krish, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(krish, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    button.addEventListener("click", function startGame() {
        obstacle.classList.add('obstacleAni');
        start.classList.add('hidden');
    })

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    if (offsetX < 100 && offsetY < 60) {
        gameOver.classList.remove('hidden');
        obstacle.classList.remove('obstacleAni');
        krish.style.visibility = "hidden";
        start.classList.remove('hidden');
        
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.01;
            obstacle.style.animationDuration = newDur + 's';
        }, 500);
    }

}, 100);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score:" + score;
    if (score>highScore){
        highScore = score;
    }
    Score.innerHTML = highScore;
}

button.addEventListener("click", function startGame() {
    obstacle.classList.add('obstacleAni');
    start.classList.add('hidden');
    krish.style.visibility = "visible";
    gameOver.classList.add('hidden');
    score = 0;
    scoreCont.innerHTML = "Your Score:" + 0;
})