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

//

// functions
function draw() {
    // draws image on the canvas (img variable , pos x, pos y)
    context.drawImage(backgr, 0, 0);
    context.drawImage(foregr, 0, canv.height - foregr.height);
    context.drawImage(pipe_top, 100, 0);
    context.drawImage(pipe_bottom, 100, 0 + pipe_top.height + gap);
    context.drawImage(pipe_top, 100, 0);
    context.drawImage(bird, 10, 150);
}

// Calls 'draw' function when pipe_bottom loads
pipe_bottom.onload = draw();