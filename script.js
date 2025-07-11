const tabela = document.querySelector("tbody");
const totalFooter = document.getElementById("footer-total");
const regionFilter = document.getElementById("filter-region");
const bonusSelector = document.getElementById("bonus-multiplicador");

const ginásios = [
["Kanto", "Pewter", "Pedra", "Água Grama Lutador", 8632],
["Kanto", "Cerulean", "Água", "Elétrico Grama", 8736],
["Kanto", "Vermilion", "Elétrico", "Terra", 8840],
["Kanto", "Celadon", "Grama", "Fogo Gelo Voador Inseto", 8944],
["Kanto", "Fuchsia", "Veneno", "Psíquico Terra", 9048],
["Kanto", "Saffron", "Psíquico", "Fantasma Inseto Sombrio", 9152],
["Kanto", "Cinnabar", "Fogo", "Água Terra Rocha", 9256],
["Kanto", "ELITE FOUR", "Elite4", "Misto", 66000],
["Kanto", "Ilha 5 - Resort Gorgeous - Lady Jacki", "Treinador", "Treinador", 4080],
["Kanto", "Ilha 5 - Resort Gorgeous - Lady Gillian", "Treinador", "Treinador", 4080],
["Kanto", "Ilha 7 - Tanoby Ruins - Gentleman Clifford", "Treinador", "Treinador", 3360],
["Kanto", "Rota 13 - Beauty Grace", "Treinador", "Treinador", 2688],
["Kanto", "Rota 13 - Beauty Sheila", "Treinador", "Treinador", 2688],
["Kanto", "Rota 13 - Beauty Lola", "Treinador", "Treinador", 2688],
["Hoenn", "Rustboro", "Pedra", "Água Grama Lutador", 8632],
["Hoenn", "Dewford", "Lutador", "Psíquico Voador Fada", 8736],
["Hoenn", "Mauville", "Elétrico", "Terra", 8840],
["Hoenn", "Lavaridge", "Fogo", "Água Terra Rocha", 8944],
["Hoenn", "Petalburg", "Normal", "Lutador", 9048],
["Hoenn", "Fortree", "Voador", "Elétrico Gelo Pedra", 9152],
["Hoenn", "Mossdeep", "Psíquico", "Fantasma Sombrio Inseto", 9256],
["Hoenn", "Sootopolis", "Água", "Elétrico Grama", 9360],
["Hoenn", "ELITE FOUR", "Elite4", "Misto", 66000],
["Hoenn", "Rota 214 - PI Carlos", "Treinador", "Treinador", 6000],
["Hoenn", "Rota 104 - Lady Cindy", "Treinador", "Treinador", 3995],
["Hoenn", "Rota 104 - Rich Boy Winston", "Treinador", "Treinador", 4080],
["Hoenn", "Rota 110 - PokeFan Isabel", "Treinador", "Treinador", 3360],
["Hoenn", "Rota 110 - Collector Edwin", "Treinador", "Treinador", 3360],
["Hoenn", "Rota 108 - Abandoned Ship - Beauty Thalia", "Treinador", "Treinador", 3360],
["Hoenn", "Rota 111 - Ruin - Maniac Dusty", "Treinador", "Treinador", 3360],
["Hoenn", "Rota 111 - Cool - Trainer Brooke", "Treinador", "Treinador", 3360],
["Hoenn", "Rota 114 - PokeManiac Steve", "Treinador", "Treinador", 3360],
["Sinnoh", "Oreburgh", "Pedra", "Água Grama Lutador", 8632],
["Sinnoh", "Eterna", "Grama", "Fogo Gelo Voador Inseto", 8736],
["Sinnoh", "Hearthome", "Fantasma", "Fantasma Sombrio", 8840],
["Sinnoh", "Veilstone", "Lutador", "Psíquico Voador Fada", 8944],
["Sinnoh", "Pastoria", "Água", "Elétrico Grama", 9048],
["Sinnoh", "Canalave", "Aço", "Fogo Lutador Terra", 9152],
["Sinnoh", "Snowpoint", "Gelo", "Fogo Pedra Lutador", 9256],
["Sinnoh", "Sunyshore", "Elétrico", "Terra", 9360],
["Sinnoh", "ELITE FOUR", "Elite4", "Misto", 66000],
["Sinnoh", "Rota 214 - PI Carlos", "Treinador", "Treinador", 6000],
["Sinnoh", "Rota 210 - Belle & Pa", "Treinador", "Treinador", 5264],
["Unova", "Striaton-Grama", "Grama", "Fogo Gelo Voador Inseto", 8632],
["Unova", "Striaton-Fogo", "Fogo", "Água Terra Rocha", 8632],
["Unova", "Striaton-Água", "Água", "Grama Lutador", 8632],
["Unova", "Nacrene", "Normal", "Lutador", 8736],
["Unova", "Castelia", "Inseto", "Fogo Voador Pedra", 8840],
["Unova", "Nimbasa", "Elétrico", "Terra", 8944],
["Unova", "Driftveil", "Terra", "Água Gelo Grama", 9048],
["Unova", "Mistralton", "Voador", "Elétrico Gelo Pedra", 9152],
["Unova", "Icirrus", "Gelo", "Fogo Pedra Lutador", 9256],
["Unova", "Opelucid", "Dragão", "Gelo Fada Dragão", 9360],
["Unova", "Castelia", "Misto", "Gelo Fada Dragão", 9360],
["Unova", "ELITE FOUR", "Elite4", "Misto", 66000],
["Unova", "Rota 13 - Undella - Socialite Marian", "Treinador", "Treinador", 5400],
["Unova", "Rota 13 - Undella - Gentleman Yan", "Treinador", "Treinador", 5400],
["Unova", "Rota 9 - Mall - Rich Boy Manuel", "Treinador", "Treinador", 4080],
["Unova", "Rota 9 - Mall - Lady Isabel", "Treinador", "Treinador", 4080],
["Unova", "Castelia - Morimoto", "Treinador", "Treinador", 15660],
["Unova", "Undella - Cynthia", "Treinador", "Treinador", 16560],
["Johto", "Violet", "Voador", "Elétrico Gelo Rocha", 8632],
["Johto", "Azalea", "Inseto", "Fogo Voador Pedra", 8736],
["Johto", "Goldenrod", "Normal", "Lutador", 8840],
["Johto", "Ecruteak", "Fantasma", "Fantasma Sombrio", 8944],
["Johto", "Cianwood", "Lutador", "Psíquico Voador Fada", 9048],
["Johto", "Olivine", "Aço", "Fogo Lutador Terra", 9152],
["Johto", "Mahogany", "Gelo", "Fogo Pedra Lutador", 9256],
["Johto", "Blackthorn", "Dragão", "Gelo Fada Dragão", 9360],
["Johto", "ELITE FOUR", "Elite4", "Misto", 66000],
["Johto", "Mt. Silver - Red", "Treinador", "Treinador", 110400],
["Johto", "Lighthouse - Olivine - Gentleman Alfred", "Treinador", "Treinador", 4300],
["Johto", "Rota 38 - Ecruteak - Gentleman Milton", "Treinador", "Treinador", 4300]
];

function salvarDados(dados) {
  localStorage.setItem("ginasioData", JSON.stringify(dados));
}
function carregarDados() {
  return JSON.parse(localStorage.getItem("ginasioData")) || {};
}
let salvos = carregarDados();

function renderTabela() {
  tabela.innerHTML = "";
  const regiaoSelecionada = regionFilter.value;

  ginásios.forEach(([regiao, cidade, tipo, fraqueza, valor]) => {
    if (regiaoSelecionada && regiao !== regiaoSelecionada) return;

    const id = `${regiao}-${cidade}`;
    const tr = document.createElement("tr");
    tr.classList.add(`region-${regiao}`);
    tr.dataset.id = id; // Adiciona o id à linha para fácil acesso

    const tempoRestante = salvos[id]?.tempo || 0;
    const expirado = tempoRestante <= Date.now();
    const marcado = salvos[id]?.marcado && !expirado;

    // Se a linha estava marcada e o tempo expirou, remove-a dos salvos
    if (expirado && salvos[id]?.marcado) {
      delete salvos[id];
    }
    // Adiciona a classe 'checked-row' se estiver marcada (e não expirada)
    if (marcado) {
      tr.classList.add("checked-row");
    }

    const segundosRestantes = Math.max(0, Math.floor((tempoRestante - Date.now()) / 1000));
    const timerText = expirado ? "Aberto" : formatarTempo(segundosRestantes);
    const valorComBonus = valor + Math.floor((valor * parseInt(bonusSelector.value)) / 100);

    // Normaliza o tipo para criar a classe CSS
    const tipoClass = `tipo-${tipo}`;

    const tdTimer = document.createElement("td");
    tdTimer.classList.add("timer", "align-center");
    tdTimer.dataset.id = id;
    tdTimer.textContent = timerText;

    if (expirado) {
      tdTimer.classList.add("text-green");
      tdTimer.classList.remove("text-red");
    } else {
      tdTimer.classList.add("text-red");
      tdTimer.classList.remove("text-green");
    }

    tr.innerHTML = `
      <td class="align-center">${regiao}</td>
      <td class="align-left">${cidade}</td>
      <td class="align-center"><span class="tipo ${tipoClass}">${tipo}</span></td>
      <td class="align-left">${fraqueza.split(' ').map(f => `<span class="tipo tipo-${f}">${f}</span>`).join(' ')}</td>
      <td class="valor align-center" data-base="${valor}">$ ${valorComBonus.toLocaleString()}</td>
    `;
    tr.appendChild(tdTimer); // Adiciona o tdTimer criado dinamicamente

    // Adiciona o event listener para a linha inteira
    tr.addEventListener("click", () => {
      // Toggle o estado da linha (marcado/desmarcado)
      const isMarked = salvos[id]?.marcado;
      toggleRow(id, tipo, !isMarked);
    });

    tabela.appendChild(tr);
  });

  atualizaTotal();
}

// Função para lidar com o toggle da linha
function toggleRow(id, tipo, shouldMark) {
  if (shouldMark) {
    // Define o tempo de cooldown com base no tipo
    // Adicionado 'Elite4' à condição para ter 6 horas de cooldown
    const cooldownHours = (tipo === "Treinador" || tipo === "Misto" || tipo === "Elite4") ? 6 : 18;
    const tempo = Date.now() + cooldownHours * 60 * 60 * 1000;
    salvos[id] = { marcado: true, tempo };
  } else {
    delete salvos[id];
  }
  salvarDados(salvos);
  atualizaTotal();
  renderTabela(); // Chama renderTabela para atualizar a cor da linha imediatamente
}


function formatarTempo(segundos) {
  const h = String(Math.floor(segundos / 3600)).padStart(2, '0');
  const m = String(Math.floor((segundos % 3600) / 60)).padStart(2, '0');
  const s = String(segundos % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

function atualizaTimers() {
  const agora = Date.now();
  let alterou = false;
  document.querySelectorAll(".timer").forEach(el => {
    const id = el.dataset.id;
    const tempo = salvos[id]?.tempo || 0;
    if (tempo <= agora && salvos[id]) {
      delete salvos[id];
      alterou = true;
      el.textContent = "Aberto";
      el.classList.add("text-green");
      el.classList.remove("text-red");
    } else {
      const restante = Math.floor((tempo - agora) / 1000);
      if (restante > 0) {
        el.textContent = formatarTempo(restante);
        el.classList.add("text-red");
        el.classList.remove("text-green");
      } else {
        el.textContent = "Aberto";
        el.classList.add("text-green");
        el.classList.remove("text-red");
      }
    }
  });
  if (alterou) {
    salvarDados(salvos);
    renderTabela();
  }
  atualizaTotal();
}

function atualizaTotal() {
  let total = 0;
  const bonus = parseInt(bonusSelector.value);
  document.querySelectorAll("tbody tr").forEach(tr => {
    const id = tr.dataset.id; // Pega o id da linha
    const base = parseInt(tr.querySelector(".valor").dataset.base);
    // Verifica se a linha está marcada nos dados salvos
    if (salvos[id]?.marcado && !isNaN(base)) {
      const valorFinal = base + Math.floor((base * bonus) / 100);
      total += valorFinal;
    }
  });
  document.getElementById("total-value").textContent = `$ ${total.toLocaleString()}`;
  totalFooter.textContent = `TOTAL ARRECADADO: $ ${total.toLocaleString()}`;
}

function resetProgresso() {
  // Substitui confirm() por um modal personalizado
  showCustomConfirm("Deseja limpar todo o progresso?", () => {
    localStorage.removeItem("ginasioData");
    location.reload();
  });
}

// Função para exibir um modal de confirmação personalizado
function showCustomConfirm(message, onConfirm) {
  const modalHtml = `
    <div id="customConfirmModal" style="
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    ">
      <div style="
        background: white;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        text-align: center;
        max-width: 400px;
        width: 90%;
      ">
        <p style="font-size: 1.1rem; margin-bottom: 20px;">${message}</p>
        <button id="confirmYes" style="
          background-color: #28a745;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          margin-right: 15px;
          font-size: 1rem;
        ">Sim</button>
        <button id="confirmNo" style="
          background-color: #dc3545;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1rem;
        ">Não</button>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);

  document.getElementById('confirmYes').onclick = () => {
    onConfirm();
    document.getElementById('customConfirmModal').remove();
  };
  document.getElementById('confirmNo').onclick = () => {
    document.getElementById('customConfirmModal').remove();
  };
}


bonusSelector.addEventListener("change", renderTabela);
regionFilter.addEventListener("change", renderTabela);
setInterval(atualizaTimers, 1000);

renderTabela();