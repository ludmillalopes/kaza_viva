var balls = document.querySelector('.balls')
var quant = document.querySelectorAll('.slides .image')
var atual = 0
var imagem = document.getElementById('atual')
var rolar = true

for(let i=0; i < quant.length; i++){
    var div = document.createElement('div')
    div.id = i
    balls.appendChild(div)
}
document.getElementById('0').classList.add('imageAtual')

var pos = document.querySelectorAll('.balls div')

for(let i=0; i < pos.length; i++){
    pos[i].addEventListener('click', ()=> {
        atual = pos[i].id
        rolar = false
        slide()
    })
}

function slide(){
    if(atual >= quant.length){
        atual = 0
    }
    else if(atual < 0){
        atual = quant.length--
    }
    document.querySelector('.imageAtual').classList.remove('imageAtual')
    imagem.style.marginBottom = -715*atual+'px'
    document.getElementById(atual).classList.add('imageAtual')
}
setInterval(()=>{
    if(rolar){
        atual++
        slide()
    }
    else{
        rolar = true
    }
},4000)