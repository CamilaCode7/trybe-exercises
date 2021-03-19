/*   Primeiro
let paragraph = document.getElementById("paragraph");
paragraph.innerHTML = 'As Cronicas do Matador do Rei';
paragraph.style.fontSize = '30px';
let segundoParagraph = document.getElementById('second-paragraph');
segundoParagraph.innerHTML = 'Livro que conta sobre um garoto e como ele aprendeu a chamar o nome do vento'; 
segundoParagraph.style.backgroundColor = 'teal';
let subtitulo = document.getElementById('subtitle');
subtitulo.innerHTML = 'Resenha do Livro 1';
let livro = document.getElementById('page-title');
livro.innerHTML = 'Livro Preferido';
livro.style.fontSize = '40px';
let nameLivro = document.querySelector('.nameLivro');
nameLivro.style.backgroundColor = 'teal';
  Segundo 
let title = document.getElementById('header-container')
title.style.backgroundColor = 'green';
let rodape = document.getElementById('footer-container');
rodape.style.backgroundColor = 'teal'
let primeiraSection = document.querySelector('.emergency-tasks');
primeiraSection.style.backgroundColor = 'rgb(238, 129, 214)';
primeiraSection.style.border = 'dotted';
let segundaSection = document.querySelector('.no-emergency-tasks');
segundaSection.style.backgroundColor = 'rgb(105, 231, 210)';
segundaSection.style.border = 'dotted';
   Terceiro */  
/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
3. Crie uma função que mude a cor do quadrado vermelho para branco.
4. Crie uma função que corrija o texto da tag <h1>.
5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/
function p () {
    let paragraph = document.getElementsByTagName('p')[1];
    paragraph.innerHTML = 'Me vejo formada na trybe e pagando o curso';
    }
p();
function color() {
    let colorGreen = document.getElementsByClassName('main-content')[0];
    colorGreen.style.backgroundColor = 'rgb(76,164,109)';
}
color();
function squareCenter() {
    let colorRed = document.getElementsByClassName('center-content')[0];
    colorRed.style.backgroundColor = 'white';
}
squareCenter();
function corrigiText() {
    let titulo = document.getElementsByClassName('title')[0];
    titulo.innerHTML = 'Exercicio 5.1 - JavaScript'
}
corrigiText();
function textMaiusculo() {
    let tagp = document.getElementsByTagName('p')[0];
    tagp.innerHTML = tagp.innerHTML.toUpperCase();
}
textMaiusculo();
function consoleExib() {
    let text = document.getElementsByTagName('p');
    for(let index = 0; index < text.length; index += 1);{
    console.log(text[index].innerHTML);
    }
}
consoleExib();