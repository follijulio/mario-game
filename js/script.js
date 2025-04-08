const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

const jumpMario = () => {
  mario.classList.add("jump");
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100) {
    stopGame(pipePosition);
    stopMario(marioPosition);
    changeMario();
  }
}, 10);

const stopGame = (pipePosition) => {
  pipe.style.animation = "none";
  pipe.style.left = `${pipePosition}px`;
};

const stopMario = (marioPosition) => {
  mario.style.animation = "none";
  mario.style.bottom = `${marioPosition}px`;
};

const changeMario = () => {
  mario.src = "./images/game-over.png";
  mario.style.width = "75px";
  mario.style.marginLeft = "50px";
};

document.addEventListener("keydown", jumpMario);
