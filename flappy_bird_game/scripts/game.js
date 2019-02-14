const canv = document.getElementById('canvas');
const context = canv.getContext('2d');

const bird = new Image();
const backgr = new Image();
const foregr = new Image();
const pipe_top = new Image();
const pipe_bottom = new Image();

// images sources
bird.src = 'images/flappy_bird_bird.png';
backgr.src = 'images/flappy_bird_bg.png';
foregr.src = 'images/flappy_bird_fg.png';
pipe_top.src = 'images/flappy_bird_pipe_top.png';
pipe_bottom.src = 'images/flappy_bird_pipe_bottom.png';

// gap between top and bottom pipes
const gap = 90;

// bird position
const bird_x_pos = 10;
let bird_y_pos = 150;
const gravity = 1;

// functions
function draw() {
  // draws image on the canvas (img variable , pos x, pos y)
  context.drawImage(backgr, 0, 0);
  context.drawImage(foregr, 0, canv.height - foregr.height);
  context.drawImage(pipe_top, 100, 0);
  context.drawImage(pipe_bottom, 100, 0 + pipe_top.height + gap);
  context.drawImage(pipe_top, 100, 0);
  context.drawImage(bird, bird_x_pos, bird_y_pos);

  bird_y_pos += gravity;

  // loop for draw function
  requestAnimationFrame(draw);
}

// Calls 'draw' function when pipe_bottom loads
pipe_bottom.onload = draw();

// bird moves up when any key pressed

function moveUp() {
  bird_y_pos -= 20;
}

document.addEventListener('keydown', moveUp);
