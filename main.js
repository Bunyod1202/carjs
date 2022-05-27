const wood = document.getElementById('wood');
const car = document.getElementById('car');

document.addEventListener('keydown', function (event) {
  jump();
});
function jump() {
  if (car.classList != 'jump') {
    car.classList.add('jump');
  }
  setTimeout(function () {
    car.classList.remove('jump');
  }, 4000);
}
