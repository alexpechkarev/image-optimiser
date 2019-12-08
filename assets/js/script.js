const mainElement = document.querySelector('main');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const NR_PARTICLES = 200;
const PARTICLES = [];
const COLORS = [10, 54, 130, 250, 328];
const cursor = {
  x: 0,
  y: 0,
  r: 50
}
let centerRadius;



const border = {
  x: 0,
  y: 0,
  xMax: window.innerWidth,
  yMax: window.innerHeight
}
let particlePaused = false;

function getRandom(max, min = 0) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function createParticles() {
  for(let i=0; i<NR_PARTICLES; i++) {
    const color = COLORS[getRandom(4)];
    PARTICLES[i] = {
      x: getRandom(canvas.width),
      y: getRandom(canvas.height),
      color: {
        h: 0,
        s: 0,
        l: getRandom(80, 40)
      },
      radius: getRandom(50, 5),
      velocity: {
        x: getRandom(2, -2),
        y: getRandom(2, -2)
      },
      filled: getRandom(2) === 1 ? true : false
    };
  }
}

function drawParticles() {
  PARTICLES.forEach(particle => {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI);
    ctx.closePath();
    const color = `hsl(${particle.color.h}, ${particle.color.s}%, ${particle.color.l}%)`;
    if(particle.filled) {
      ctx.fillStyle = color;
      ctx.fill(); 
    } else {
      ctx.strokeStyle = color;
      ctx.stroke();
    }
  });
}

function drawCursorCircle() {
  ctx.beginPath();
  ctx.arc(cursor.x, cursor.y, cursor.r, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.strokeStyle = '#000000';
  ctx.stroke();
  ctx.fillStyle = '#FFFFFF';
  ctx.fill();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawParticles();
  drawCursorCircle();
}


function keepParticleInBorders(particle) {
  if(particle.x < border.x || particle.x > border.xMax) {
    particle.velocity.x *= -1;
  }
  if(particle.y < border.y || particle.y > border.yMax) {
    particle.velocity.y *= -1;
  }
}

function updateParticles() {
  PARTICLES.forEach(particle => {
    keepParticleInBorders(particle);
    if(!particlePaused) {
      particle.x += particle.velocity.x;
      particle.y += particle.velocity.y; 
    }
  });
}

function setColorToParticles(index) {
  PARTICLES.forEach(particle => {
    particle.color.h = COLORS[index];
    particle.color.s = getRandom(84, 54);
  });
}

function update() {
  updateParticles();
}

function loop() {
  update();
  draw();
  
  requestAnimationFrame(loop);
}

function init() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  centerRadius = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    r: 400
  };
  
  mainElement.addEventListener('mousemove', event => {
    cursor.x = event.clientX;
    cursor.y = event.clientY;
  });
  createParticles();
}

window.onresize = function() {
  init();
}

window.onload = () => {
  init();
  loop();
}


//HERO
const container = document.querySelector('.hero');
const menuLists = [...document.querySelectorAll('.hero-list')];
const clonedMenuList = menuLists[0].cloneNode(true);

container.appendChild(clonedMenuList);

const scroll = new TimelineMax({repeat: -1, paused: true});
const time = 13;

const distance = menuLists[0].offsetWidth + container.offsetWidth;

scroll
  .fromTo(menuLists[0], time, {x: 0}, {x: -menuLists[0].offsetWidth, ease: Linear.easeInOut}, 0)
.fromTo(clonedMenuList, time, {x: 0}, {x: -menuLists[0].offsetWidth, ease: Linear.easeInOut}, 0);

scroll.play();


const texts = [...document.querySelectorAll('.hero-list > div')];
const bgTime = 1;
let currentAnim;

function resetAnimateBg(element) {
  currentAnim.kill();
  currentAnim = null;
  [...element.children].forEach(el => {
    el.style.opacity = 0;
  });
}

texts.forEach(el => {
   el.addEventListener('mouseenter', () => {
     scroll.pause();
     particlePaused = true;
     setColorToParticles(el.dataset.index);
     animateBg(el);
  });
    el.addEventListener('mouseleave', () => {
      scroll.play();
      particlePaused = false;
      resetAnimateBg(el);
  }); 
});

function animateBg(element) {
  currentAnim = new TimelineMax({repeat: -1,  paused: true});
  currentAnim.staggerTo([...element.children, {}], 0, {opacity: 1, ease: Linear.easeNone}, .5).play();
}