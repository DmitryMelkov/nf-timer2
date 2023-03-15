//таймер
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

//появление карточки
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

//ховер карточки
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

//куки
const createCookie = (name, value, days) => {
  let expires;
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toGMTString();
  } else {
    expires = '';
  }
  document.cookie = name + '=' + value + expires + '; path=/';
};

animMonkeyBtnClose.addEventListener('click', () => {
  animMonkeyBtn.classList.remove('active');
  let d = new Date();
  let dateString =
    d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes();

  let cookie = document.cookie;
  cookie = dateString;

  console.log(cookie);

  createCookie('ADS_card', cookie, 5);
});

//модалка
const modalClose = document.querySelector('.modal__close');
const modalWindow = document.querySelector('.modal');
const modalMore = document.querySelector('.anim-monkey__content-btn');

modalMore.addEventListener('click', () => {
  modalWindow.classList.add('open');
});

modalClose.addEventListener('click', () => {
  modalWindow.classList.remove('open');
});
