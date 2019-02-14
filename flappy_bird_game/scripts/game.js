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
foregr.src = 'images/flappy_bird_fgpng';
pipe_top.src = 'images/flappy_bird_pipe_top.png';
pipe_bottom.src = 'images/flappy_bird_pipe_bottom.png';

// functions

function draw() {
    // draws image on the canvas (img variable , pos x, pos y)
    context.drawImage(backgr, 0, 0);
}