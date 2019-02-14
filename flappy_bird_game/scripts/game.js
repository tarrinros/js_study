const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const bird = new Image();
const background = new Image();
const foreground = new Image();
const pipe_top = new Image();
const pipe_bottom = new Image();

// images sources
bird.src = 'images/flappy_bird_bird.png';
background.src = 'images/flappy_bird_bg.png';
foreground.src = 'images/flappy_bird_fg.png';
pipe_top.src = 'images/flappy_bird_pipe_top.png';
pipe_bottom.src = 'images/flappy_bird_pipe_bottom.png';

// gap between top and bottom pipes
const gap = 90;

// bird position
const bird_x_pos = 10;
let bird_y_pos = 150;
const gravity = 1;

// blocks
const pipes = [];

pipes[0] = {
  x: canvas.width,
  y: 0
};

// functions
function draw() {
  // draws image on the canvas (img variable , pos x, pos y)
  context.drawImage(background, 0, 0);
  for (let i = 0; i < pipes.length; i++) {

    context.drawImage(pipe_top, pipes[i].x, pipes[i].y);
    context.drawImage(pipe_bottom, pipes[i].x, pipes[i].y + pipe_top.height + gap);
    pipes[i].x--;

    if (pipes[i].x == 120) {
      pipes.push({
        x: canvas.width,
        y: Math.floor(Math.random() * pipe_top.height) - pipe_top.height
      });
    }

    if (bird_x_pos + bird.width >= pipes[i].x
      && bird_x_pos <= pipes[i].x + pipe_top.width
      && (bird_y_pos <= pipes[i].y + pipe_top.height
        || bird_y_pos + bird.height >= pipes[i].y + pipe_top.height + gap)
      || bird_y_pos + bird.height >= canvas.height - foreground.height) {
      location.reload(); // Reloading page
    }

    // if (pipes[i].x == 5) {
    //   score++;
    //   score_audio.play();
    // }
  }

  context.drawImage(foreground, 0, canvas.height - foreground.height);
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
