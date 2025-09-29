// ======== MINES HELPER ========
// Funções iniciais e navegação básica

// Seleciona a área principal do site
const app = document.getElementById('app');

// Função para mostrar a tela inicial
function showHome() {
  app.innerHTML = `
    <div style="text-align:center; padding:20px;">
      <h1>💡 Mines Helper</h1>
      <p>Escolha uma das funções abaixo:</p>
      <button onclick="showAviator()" style="margin:10px; padding:10px 20px;">📈 Analisar Aviator</button>
      <button onclick="showMines()" style="margin:10px; padding:10px 20px;">💣 Probabilidade Mines</button>
      <button onclick="showHistorico()" style="margin:10px; padding:10px 20px;">📊 Histórico & Sugestões</button>
    </div>
  `;
}

// Função para Análise Aviator
function showAviator() {
  app.innerHTML = `
    <div style="padding:20px;">
      <h2>📈 Análise Aviator</h2>
      <p>Aqui você vai inserir os dados ou gráficos do Aviator para análise.</p>
      <button onclick="showHome()">⬅ Voltar</button>
    </div>
  `;
}

// Função para Probabilidade Mines
function showMines() {
  app.innerHTML = `
    <div style="padding:20px;">
      <h2>💣 Calculadora de Probabilidade - Mines</h2>
      <p>Insira o número de minas e tente sua sorte:</p>
      <input type="number" id="numMines" placeholder="Nº de minas (1–24)" min="1" max="24" style="padding:5px; width:200px;">
      <button onclick="calcProbabilidade()" style="margin-left:5px;">Calcular</button>
      <p id="resultado" style="margin-top:10px;"></p>
      <button onclick="showHome()">⬅ Voltar</button>
    </div>
  `;
}

// Função para Histórico & Sugestões
function showHistorico() {
  app.innerHTML = `
    <div style="padding:20px;">
      <h2>📊 Histórico & Sugestões</h2>
      <p>Essa seção mostrará o histórico de resultados e sugestões baseadas nos padrões.</p>
      <button onclick="showHome()">⬅ Voltar</button>
    </div>
  `;
}

// Função para calcular probabilidade Mines
function calcProbabilidade() {
  const numMines = parseInt(document.getElementById('numMines').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(numMines) || numMines < 1 || numMines > 24) {
    resultado.innerText = "⚠️ Informe um número entre 1 e 24.";
    return;
  }

  const chances = ((25 - numMines) / 25) * 100;
  resultado.innerText = `🧮 Chance de acerto na primeira jogada: ${chances.toFixed(2)}%`;
}

// Inicializa o site
showHome();
