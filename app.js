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

const getCookie = (name) => {
  let match = document.cookie.match(RegExp('(?:^|;\\s*)' + name + '=([^;]*)'));
  return match ? match[1] : null;
};

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

window.addEventListener('scroll', () => {
  let cookieADSCard = getCookie('ADS_card');
  if (cookieADSCard == null) {
    if (window.pageYOffset > 500) {
      animMonkeyBtn.classList.add('active');
    } else {
      animMonkeyBtn.classList.remove('active');
    }
  } else {
    console.log('cookies');
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

animMonkeyBtnClose.addEventListener('click', () => {
  animMonkeyBtn.classList.remove('active');
  let d = new Date();
  let dateString =
    d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes();

  let cookie = document.cookie;
  cookie = dateString;
  createCookie('ADS_card', cookie, 1);
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

//card-block
const myAtropos = Atropos({
  el: '.card-block-js',
  activeOffset: 10,
  alwaysActive: true,
  rotateXMax: 50,
  rotateYMax: 50,
  activeOffset: 30,
  highlight: true,
});
