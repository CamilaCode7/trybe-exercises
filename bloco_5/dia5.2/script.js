let titulo = document.createElement('h1');
titulo.innerHTML = ' Exercício 5.2 - JavaScript DOM';
document.body.appendChild(titulo)
titulo.className = 'title';

let divPai = document.createElement('div');
document.body.appendChild(divPai);
divPai.className ='main-content';

let divFilho = document.createElement('div');
divPai.appendChild(divFilho);
divFilho.className = 'center-content';

let paragraf = document.createElement('p');
divFilho.appendChild(paragraf);
paragraf.innerHTML = 'Atividade da Trybe';

let divLeft = document.createElement('div');
divLeft.className = 'left-content';
divPai.appendChild(divLeft);


let divRigth = document.createElement('div');
divPai.appendChild(divRigth);
divRigth.className = 'right-content';

let imagem = document.createElement('img');
imagem.className = 'small-image';
imagem.src = 'https://picsum.photos/200';
divLeft.appendChild(imagem);

let listaOl = document.createElement('ol');
divRigth.appendChild(listaOl);
for(let index = 0; index <= 9; index += 1){
	let filhaListaOl = document.createElement('li');
	filhaListaOl[index];
	listaOl.appendChild(filhaListaOl)
}
for(let index = 0; index < 3; index += 1){
let titleH3 = document.createElement('h3');
titleH3.innerHTML = 'Show' + index;
divPai.appendChild(titleH3);
titleH3.className = 'description'
}

let divLeftContent = document.getElementsByClassName('left-content')[0];
divPai.removeChild(divLeftContent)

let divRigthContent = document.getElementsByClassName('right-content')[0];
divRigthContent.style.marginRight = 'auto';

let colorGreen = document.getElementsByClassName('center-content')[0];
colorGreen.style.backgroundColor = 'green'; 

listaOl.lastChild.remove();
listaOl.lastChild.remove();