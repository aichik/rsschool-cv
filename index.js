const btn = document.querySelector('.burger');
const nav = document.querySelector('.nav');

function switchMenu() {
  nav.classList.toggle('switch');

}
btn.addEventListener('click', switchMenu);

