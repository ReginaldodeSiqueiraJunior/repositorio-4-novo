const url="https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json";

async function visualizarInformacoesGlobais(){
    const resposta = await fetch (url);
    let dados = await resposta.json();

const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
const horas = parseInt(dados.tempo_medio)
const minutos = Math.round((dados.tempo_medio - horas) * 60)

const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo) * 100).toFixed(2);


    console.log(dados);

    const paragrafo = document.createElement("p");
    paragrafo.classList.add("graficos-container__texto");
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo}</span> bilhões de pessoas e que aproximadamente <span>${pessoasConectadas}</span> bilhões estão conectadas em alguma rede social e passam em média <span>${horas} horas</span> e <span>${minutos} minutos</span> conectadas.<br>Isso significa que aproximadamente <span>${porcentagemConectada}%</span> pessoas conectadas em alguma rede social.`
    
paragrafo.innerHTML = ` Cerca de 38% das mais de <span>${pessoasNoMundo}</span> de pessoas do mundo estão no
          mercado de trabalho, ou seja, aproximadamente 3 bilhões de
          trabalhadores.tal de trabalhadores, ⅔ deles (67%) precisam de
          transporte para o trabalho. Dessa forma, uma porcentagem bastante
          relevante (os outros 34%) estão em teletrabalho ou moram perto do
          trabalho, de forma a não precisar de deslocamento. Entre os que
          precisam de transporte, o tempo necessário para isso é de cerca de 54
          minutos. Esse tempo pode ser utilizado para ouvir PodCasts ou
          videoaulas, caso o transporte seja público ou por aplicativo. Um
          serviço que pode ser oferecido é o de Podcasts com duração compatível
          com esse tempo de deslocamento.  bilhões de pessoas e que aproximadamente <span>${pessoasConectadas}</span> bilhões estão conectadas em alguma rede social e passam em média <span>${horas} horas</span> e <span>${minutos} minutos</span> conectadas.<br>Isso significa que aproximadamente <span>${porcentagemConectada}%</span> pessoas conectadas em alguma rede social.`

    const container = document.getElementById("graficos-container");
    container.appendChild(paragrafo);
}
visualizarInformacoesGlobais();