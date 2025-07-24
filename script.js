let angleY = 0;
let autoSpin;
const rotateFalcon = () => {
  anime({
    targets: '#falconContainer',
    rotateY: angleY,
    duration: 800,
    easing: 'easeInOutQuad'
  });
};
const rotateLeft = () => {
  angleY -= 45;
  rotateFalcon();
};
const rotateRight = () => {
  angleY += 45;
  rotateFalcon();
};
const autoRotate = () => {
  autoSpin = setInterval(() => {
    angleY += 2;
    document.getElementById('falconContainer').style.transform = `rotateY(${angleY}deg)`;
  }, 30);
};
const stopRotation = () => {
  clearInterval(autoSpin);
};
