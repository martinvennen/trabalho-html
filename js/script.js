
const links = document.querySelectorAll("nav a");

links.forEach(link => {

    if(link.href === window.location.href){

        link.classList.add("ativo");

    }

});

// ================================
// SCROLL SUAVE
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ================================
// BOTÃO VOLTAR AO TOPO
// ================================

const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "⬆";

botaoTopo.id = "topo";

document.body.appendChild(botaoTopo);

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 300){

        botaoTopo.classList.add("mostrar");

    }else{

        botaoTopo.classList.remove("mostrar");

    }

});

botaoTopo.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

// ================================
// ANIMAÇÃO AO ROLAR
// ================================

const elementos = document.querySelectorAll("section, .card, .game");

const revelar = ()=>{

    elementos.forEach(el=>{

        const topo = el.getBoundingClientRect().top;

        if(topo < window.innerHeight - 100){

            el.classList.add("visivel");

        }

    });

}

window.addEventListener("scroll", revelar);

revelar();

// ================================
// DATA AUTOMÁTICA NO RODAPÉ
// ================================

const ano = document.querySelector("#ano");

if(ano){

    ano.textContent = new Date().getFullYear();

}

// ================================
// QUIZ
// ================================

const formulario = document.querySelector("#quizForm");

if(formulario){

formulario.addEventListener("submit",(e)=>{

e.preventDefault();

let pontos = 0;

const respostas = {

q1:"b",
q2:"a",
q3:"c",
q4:"d",
q5:"b"

};

for(let pergunta in respostas){

const resposta = document.querySelector(`input[name="${pergunta}"]:checked`);

if(resposta){

if(resposta.value === respostas[pergunta]){

pontos++;

}

}

}

const resultado = document.querySelector("#resultado");

if(resultado){

resultado.innerHTML =
`<h2>Você acertou ${pontos} de 5 questões!</h2>`;

}

});

}

// ================================
// CONTADOR
// ================================

const contador = document.querySelector("#contador");

if(contador){

let numero = 0;

const intervalo = setInterval(()=>{

numero++;

contador.innerHTML = numero;

if(numero>=100){

clearInterval(intervalo);

}

},20);

}

// ================================
// GALERIA
// ================================

const imagens = document.querySelectorAll(".galeria img");

imagens.forEach(img=>{

img.addEventListener("click",()=>{

const modal = document.createElement("div");

modal.className="modal";

modal.innerHTML=`

<div class="modal-content">

<img src="${img.src}">

</div>

`;

document.body.appendChild(modal);

modal.addEventListener("click",()=>{

modal.remove();

});

});

});

// ================================
// EFEITO NOS CARDS
// ================================

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

// ================================
// MENSAGEM
// ================================

console.log("IA Games carregado com sucesso!");