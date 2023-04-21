const tj_1 = document.querySelector('.tj-1');
const tj_2 = document.querySelector('.tj-2');
const tj_3 = document.querySelector('.tj-3');
const tj_4 = document.querySelector('.tj-4');

tj_1.addEventListener('mouseover', (e) => {
  tj_1.classList.add('hovered-main');
});


tj_2.addEventListener('mouseover', (e) => {
  tj_2.classList.add('hovered-card');
  tj_1.classList.remove('no-hovered-main');
});

tj_2.addEventListener('mouseleave', (e) => {
  tj_2.classList.remove('hovered-card');
});

tj_3.addEventListener('mouseover', (e) => {
  tj_3.classList.add('hovered-card');
  tj_1.classList.remove('no-hovered-main');
});

tj_3.addEventListener('mouseleave', (e) => {
  tj_3.classList.remove('hovered-card');
});

tj_4.addEventListener('mouseover', (e) => {
  tj_4.classList.add('hovered-card');
  tj_1.classList.remove('no-hovered-main');
});

tj_4.addEventListener('mouseleave', (e) => {
  tj_4.classList.remove('hovered-card');
});

