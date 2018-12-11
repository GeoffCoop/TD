
function drawBombParticleExplosion(elapsedTime,x,y){
    let keepMe = [];
    for (let particle = 0; particle < confettiParticles.length; particle++) {
      confettiParticles[particle].alive += elapsedTime;
      confettiParticles[particle].position.x += (elapsedTime * confettiParticles[particle].speed * confettiParticles[particle].direction.x);
      confettiParticles[particle].position.y += (elapsedTime * confettiParticles[particle].speed * confettiParticles[particle].direction.y);
      confettiParticles[particle].rotation += confettiParticles[particle].speed / .5;
      confettiParticles[particle].fill = rgb();
      if (confettiParticles[particle].alive <= confettiParticles[particle].lifetime) {
        keepMe.push(confettiParticles[particle]);
      }
    }
    for (let particle = 0; particle < Random.nextGaussian(7, 3); particle++) {
      let p = {
        position: { x: 450, y: 500 },
        direction: Random.nextCircleVector(),
        speed: Random.nextGaussian( 0.02, 0.01 ),	// pixels per millisecond
        rotation: 0,
        lifetime: 500,	// milliseconds
        alive: 0,
        size: Random.nextGaussian(5,3),
        fill: 'rgb(255, 255, 255)',
        stroke: 'rgb(0, 0, 0)'
      };
      keepMe.push(p);
    }
    confettiParticles = keepMe;
}

function rgb(){
    let r = Random.nextGaussian(127,127);
    let g = Random.nextGaussian(127,127);
    let b = Random.nextGaussian(127,127);
    r = Math.abs(Math.floor(r));
    g = Math.abs(Math.floor(g));
    b = Math.abs(Math.floor(b));
    return ["rgb(",r,",",g,",",b,")"].join("");
}

function renderConfetti(){
    for (let particle = 0; particle < confettiParticles.length; particle++) {
      drawConfetti(confettiParticles[particle]);
    }
}

function drawConfetti(p) {
    if (p.alive > 100) {
      graphics.context.save();
      graphics.context.translate(p.position.x + p.size / 2, p.position.y + p.size / 2);
      graphics.context.rotate(p.rotation);
      graphics.context.translate(-(p.position.x + p.size / 2), -(p.position.y + p.size / 2));

      graphics.context.fillStyle = p.fill;
      graphics.context.strokeStyle = p.stroke;
      graphics.context.fillRect(p.position.x, p.position.y, p.size, p.size);
      graphics.context.strokeRect(p.position.x, p.position.y, p.size, p.size);

      graphics.context.restore();
    }
}