var balls = document.querySelector('.balls');
var quant = document.querySelectorAll('.slides .image');
var atual = 0;
var imagem = document.getElementById('atual');
var rolar = true;
var intElemOffsetHeight = imagem.offsetHeight;

for (let i = 0; i < quant.length; i++) {
  var div = document.createElement('div');
  div.id = i;
  balls.appendChild(div);
}
document.getElementById('0').classList.add('imageAtual');

var pos = document.querySelectorAll('.balls div');

for (let i = 0; i < pos.length; i++) {
  pos[i].addEventListener('click', () => {
    atual = pos[i].id;
    rolar = false;
    slide()
  })
}

function slide() {
  if (atual >= quant.length) {
    atual = 0;
  }
  else if (atual < 0) {
    atual = quant.length--;
  }
  document.querySelector('.imageAtual').classList.remove('imageAtual');
  imagem.style.marginBottom = -intElemOffsetHeight * atual + 'px';
  document.getElementById(atual).classList.add('imageAtual');
}
setInterval(() => {
  if (rolar) {
    atual++;
    slide();
  }
  else {
    rolar = true;
  }
}, 4000);


const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);