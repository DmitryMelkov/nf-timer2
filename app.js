const btn = document.querySelector('.btn-js');
const time = document.querySelector('.time-js');
const timeSpan = document.querySelector('.time-span-js');
const link = document.querySelector('.link-js');
const linkCopy = document.querySelector('.link-btn-copy-js ');
let count = timeSpan.innerHTML;

btn.addEventListener('click', () => {
  time.classList.add('active');
  btn.classList.add('active');
  const timer = setInterval(() => {
    count = count - 1;
    timeSpan.innerHTML = count;
    if (count == 0) {
      clearInterval(timer);
      time.classList.remove('active');
      link.classList.add('active');
    }
  }, 1000);
});

//копирование содержимого ссылки
const copy = () => {
  const linkValue = document.querySelector('.link-value-js');
  linkValue.select();
  document.execCommand('copy');
};

linkCopy.addEventListener('click', (e) => {
  e.preventDefault();
  copy();
});

const animMonkey = bodymovin.loadAnimation({
  container: document.querySelector('.anim-monkey__btn'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './img-js/nft-monkey.json',
});

const animAsteroid = bodymovin.loadAnimation({
  container: document.querySelector('.asteroid'),
  renderer: 'svg',
  loop: 1,
  autoplay: true,
  path: './img-js/asteroid-exploration.json',
});

setTimeout(() => {
  const animBoom = bodymovin.loadAnimation({
    container: document.querySelector('.boom'),
    renderer: 'svg',
    loop: 1,
    autoplay: true,
    path: './img-js/particle-explosion.json',
  });
}, 3000);

const animMonkeyBtn = document.querySelector('.anim-monkey');
const animMonkeyBtnClose = document.querySelector('.anim-monkey__btn-close');
const animBoomEvent = document.querySelector('.boom-js');
const animAsteroidEvent = document.querySelector('.asteroid-js');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 500) {
    animMonkeyBtn.classList.add('active');
    animAsteroidEvent.classList.add('active');
    animBoomEvent.classList.add('active');
  }
});

const monkeyInner = document.querySelector('.anim-monkey__inner');
const monkeyContent = document.querySelector('.anim-monkey__content');

animMonkeyBtn.addEventListener('mouseover', () => {
  monkeyInner.classList.add('active');
  monkeyContent.classList.add('active');
});

animMonkeyBtn.addEventListener('mouseout', () => {
  monkeyInner.classList.remove('active');
  monkeyContent.classList.remove('active');
});

animMonkeyBtnClose.addEventListener('click', () => {
  animMonkeyBtn.classList.remove('active');
});

const modalClose = document.querySelector('.modal__close');
const modalWindow = document.querySelector('.modal');
const modalMore = document.querySelector('.anim-monkey__content-btn');

modalMore.addEventListener('click', () => {
  modalWindow.classList.add('open');
});

modalClose.addEventListener('click', () => {
  modalWindow.classList.remove('open');
});
