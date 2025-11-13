// DADOS DO SITE
const dados = {
    times: [
        {
            id: 1,
            nome: 'Dragon Force',
            emoji: '🐉',
            titulos: 2,
            participacoes: 3,
            jogadores: ['PlayerPro', 'GameMaster', 'SkillKing'],
            kills: 1245,
            mortes: 450,
            winRate: 72.5
        },
        {
            id: 2,
            nome: 'Wolf Pack',
            emoji: '🐺',
            titulos: 1,
            participacoes: 3,
            jogadores: ['AlphaWolf', 'BetaStrike', 'GammaRush'],
            kills: 1089,
            mortes: 512,
            winRate: 68.3
        },
        {
            id: 3,
            nome: 'Lightning Strike',
            emoji: '⚡',
            titulos: 0,
            participacoes: 2,
            jogadores: ['ThunderBolt', 'StormRider', 'VoltageX'],
            kills: 856,
            mortes: 623,
            winRate: 55.2
        },
        {
            id: 4,
            nome: 'Phoenix Rising',
            emoji: '🔥',
            titulos: 1,
            participacoes: 3,
            jogadores: ['FireMaster', 'HeatWave', 'FlameKing'],
            kills: 1102,
            mortes: 498,
            winRate: 69.1
        },
        {
            id: 5,
            nome: 'Shadow Assassins',
            emoji: '🌑',
            titulos: 0,
            participacoes: 2,
            jogadores: ['DarkNinja', 'SilentKiller', 'NightHunter'],
            kills: 923,
            mortes: 567,
            winRate: 61.8
        },
        {
            id: 6,
            nome: 'Cyber Nexus',
            emoji: '💻',
            titulos: 0,
            participacoes: 1,
            jogadores: ['CodeBreaker', 'PixelMaster', 'DataGhost'],
            kills: 678,
            mortes: 712,
            winRate: 48.9
        }
    ],
    
    jogadores: [
        { id: 1, nome: 'PlayerPro', time: 'Dragon Force', kills: 245, mortes: 100, kd: 2.45, mvp: 2 },
        { id: 2, nome: 'AlphaWolf', time: 'Wolf Pack', kills: 198, mortes: 93, kd: 2.12, mvp: 1 },
        { id: 3, nome: 'ThunderBolt', time: 'Lightning Strike', kills: 176, mortes: 93, kd: 1.89, mvp: 0 },
        { id: 4, nome: 'GameMaster', time: 'Dragon Force', kills: 189, mortes: 87, kd: 2.17, mvp: 1 },
        { id: 5, nome: 'SkillKing', time: 'Dragon Force', kills: 167, mortes: 78, kd: 2.14, mvp: 0 },
        { id: 6, nome: 'BetaStrike', time: 'Wolf Pack', kills: 156, mortes: 89, kd: 1.75, mvp: 0 },
        { id: 7, nome: 'FireMaster', time: 'Phoenix Rising', kills: 201, mortes: 95, kd: 2.11, mvp: 1 },
        { id: 8, nome: 'DarkNinja', time: 'Shadow Assassins', kills: 187, mortes: 102, kd: 1.83, mvp: 0 },
        { id: 9, nome: 'StormRider', time: 'Lightning Strike', kills: 154, mortes: 91, kd: 1.69, mvp: 0 },
        { id: 10, nome: 'CodeBreaker', time: 'Cyber Nexus', kills: 132, mortes: 108, kd: 1.22, mvp: 0 }
    ],

    edicoes: [
        { id: 1, nome: 'Season 1', ano: 2023, campeao: 'Phoenix Rising', mvp: 'ShadowKing', partidas: 120, times: 18 },
        { id: 2, nome: 'Season 2', ano: 2024, campeao: 'Wolf Pack', mvp: 'AlphaWolf', partidas: 138, times: 20 },
        { id: 3, nome: 'Season 3', ano: 2025, campeao: 'Dragon Force', mvp: 'PlayerPro', partidas: 156, times: 24 }
    ],

    curiosidades: [
        { id: 1, titulo: 'Maior sequência de vitórias', descricao: 'Dragon Force conquistou 12 vitórias consecutivas na Season 3', categoria: 'Recorde' },
        { id: 2, titulo: 'Jogador mais jovem a vencer MVP', descricao: 'PlayerPro, aos 19 anos, se tornou o jogador mais jovem a conquistar MVP', categoria: 'Jogador' },
        { id: 3, titulo: 'Partida com mais kills', descricao: 'A final da Season 3 registrou 47 kills totais, a maior marca de uma única partida', categoria: 'Partida' },
        { id: 4, titulo: 'Time com melhor defesa', descricao: 'Wolf Pack manteve a melhor taxa de defesa com apenas 512 mortes', categoria: 'Time' },
        { id: 5, titulo: 'Comeback épico', descricao: 'Lightning Strike venceu uma partida estando 0-2 em mapas', categoria: 'Partida' },
        { id: 6, titulo: 'Novo time na competição', descricao: 'Cyber Nexus estreia na Season 3 com performance surpreendente', categoria: 'Time' }
    ]
};

// MENU MOBILE
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            if (nav) {
                nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
            }
        });
    }
});

// BUSCA
function buscar(query) {
    if (!query.trim()) {
        alert('Digite algo para buscar!');
        return;
    }

    const timesEncontrados = dados.times.filter(t => 
        t.nome.toLowerCase().includes(query.toLowerCase())
    );

    const jogadoresEncontrados = dados.jogadores.filter(j => 
        j.nome.toLowerCase().includes(query.toLowerCase()) ||
        j.time.toLowerCase().includes(query.toLowerCase())
    );

    if (timesEncontrados.length > 0 || jogadoresEncontrados.length > 0) {
        alert(`Encontrados:\n- ${timesEncontrados.length} times\n- ${jogadoresEncontrados.length} jogadores`);
    } else {
        alert('Nenhum resultado encontrado!');
    }
}

// BUSCA POR ENTER (ajustado: não impede submit quando o form tem action -> vai para pages/search.html)
const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      const form = document.getElementById('searchForm');
      // se o form tem action (pages/search.html) deixamos o comportamento padrão (navegar)
      if (form && form.action) return;
      // caso contrário, apenas previna o submit e permita que o listener do DOMContentLoaded trate a busca local
      e.preventDefault();
      // não chamar funções aqui para evitar aviso/overlay; a lógica de filtro fica no DOMContentLoaded
    }
  });
}

// BUSCA POR BOTÃO (ajustado: permite submit normal quando action está definido)
const searchBtn = document.getElementById('searchBtn');
if (searchBtn) {
  searchBtn.addEventListener('click', function (e) {
    const form = document.getElementById('searchForm');
    if (form && form.action) {
      // permite que o navegador envie o form para pages/search.html?q=...
      return;
    }
    // caso não haja action, previne comportamento padrão e deixa o handler do DOMContentLoaded mostrar resultados inline
    e.preventDefault();
    // não executar nenhum aviso aqui
  });
}

// FUNÇÃO PARA RENDERIZAR TIMES
function renderizarTimes(container, times = dados.times) {
    if (!container) return;
    
    container.innerHTML = times.map(time => `
        <div class="card">
            <div class="card-emoji">${time.emoji}</div>
            <h3>${time.nome}</h3>
            <p class="card-subtitle">${time.titulos} títulos • ${time.participacoes} participações</p>
            <div class="card-players">
                <strong>Jogadores Principais:</strong>
                <ul>
                    ${time.jogadores.map(j => `<li>${j}</li>`).join('')}
                </ul>
            </div>
            <div style="margin-top: 10px; font-size: 12px; color: #64748b;">
                <p>Kills: ${time.kills} | Mortes: ${time.mortes} | Taxa: ${time.winRate}%</p>
            </div>
        </div>
    `).join('');
}

// FUNÇÃO PARA RENDERIZAR JOGADORES
function renderizarJogadores(container, jogadores = dados.jogadores) {
    if (!container) return;
    
    container.innerHTML = jogadores.map(j => `
        <div class="player-card">
            <div class="player-avatar">${j.nome.charAt(0)}</div>
            <h3>${j.nome}</h3>
            <p class="player-team">${j.time} • MVP x${j.mvp}</p>
            <div class="player-stats">
                <div class="player-stat">
                    <span class="stat-val">${j.kills}</span>
                    <span class="stat-lbl">Kills</span>
                </div>
                <div class="player-stat">
                    <span class="stat-val">${j.kd}</span>
                    <span class="stat-lbl">K/D</span>
                </div>
            </div>
        </div>
    `).join('');
}

// FUNÇÃO PARA RENDERIZAR EDIÇÕES
function renderizarEdicoes(container, edicoes = dados.edicoes) {
    if (!container) return;
    
    container.innerHTML = edicoes.map(e => `
        <div class="card">
            <h3>${e.nome} - ${e.ano}</h3>
            <p class="card-subtitle">Campeão: <strong>${e.campeao}</strong></p>
            <p class="card-subtitle">MVP: <strong>${e.mvp}</strong></p>
            <div style="margin-top: 15px; font-size: 14px; color: #64748b;">
                <p>Partidas: ${e.partidas}</p>
                <p>Times: ${e.times}</p>
            </div>
        </div>
    `).join('');
}

// FUNÇÃO PARA RENDERIZAR CURIOSIDADES
function renderizarCuriosidades(container, curiosidades = dados.curiosidades) {
    if (!container) return;
    
    container.innerHTML = curiosidades.map(c => `
        <div class="card" style="border-left: 4px solid #4f46e5;">
            <h3>${c.titulo}</h3>
            <p style="margin: 10px 0; color: #64748b;">${c.descricao}</p>
            <span style="display: inline-block; background: #f8fafc; padding: 4px 8px; border-radius: 4px; font-size: 12px; color: #4f46e5;">${c.categoria}</span>
        </div>
    `).join('');
}

// EXPORTAR PARA USAR EM OUTRAS PÁGINAS
window.renderizarTimes = renderizarTimes;
window.renderizarJogadores = renderizarJogadores;
window.renderizarEdicoes = renderizarEdicoes;
window.renderizarCuriosidades = renderizarCuriosidades;
window.dados = dados;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('searchForm');
  const input = document.getElementById('searchInput');
  const resultsBox = document.getElementById('searchResults');

  function clearFilter() {
    // mostra todos os cards
    document.querySelectorAll('.cards-grid .card, .players-grid .player-card').forEach(el => {
      el.style.display = '';
    });
    if (resultsBox) resultsBox.style.display = 'none';
    if (input) input.value = '';
  }

  function doFilter(query) {
    const q = query.trim().toLowerCase();
    if (!q) { clearFilter(); return; }

    const teamCards = Array.from(document.querySelectorAll('.cards-grid .card'));
    const playerCards = Array.from(document.querySelectorAll('.players-grid .player-card'));

    let matchCount = 0;
    [...teamCards, ...playerCards].forEach(card => {
      const text = card.textContent.toLowerCase();
      if (text.includes(q)) {
        card.style.display = '';
        matchCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (resultsBox) {
      resultsBox.style.display = 'block';
      if (matchCount > 0) {
        resultsBox.innerHTML = `${matchCount} resultado(s) encontrado(s) para "<strong>${escapeHtml(q)}</strong>". <button id="clearSearch" style="margin-left:8px">Limpar</button>`;
        document.getElementById('clearSearch').addEventListener('click', clearFilter);
      } else {
        resultsBox.innerHTML = `Nenhum resultado para "<strong>${escapeHtml(q)}</strong>". <button id="clearSearch" style="margin-left:8px">Limpar</button>`;
        document.getElementById('clearSearch').addEventListener('click', clearFilter);
      }
    }
  }

  if (form) {
    form.addEventListener('submit', (ev) => {
      // quando é submit local (index) evitamos comportamento padrão e aplicamos filtro na página atual
      // se o form tem action definido (navegar para pages/search.html) o navegador enviará normalmente
      if (!form.action) {
        ev.preventDefault();
        doFilter(input.value);
      }
      // caso action exista, o navegador fará o GET para pages/search.html?q=...
    });
  }

  // opção: limpar ao apagar input
  if (input) {
    input.addEventListener('input', () => {
      if (input.value.trim() === '') clearFilter();
    });
  }

  // pequeno helper para evitar injeção no feedback
  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  // ----- lógica para a página de resultados pages/search.html?q=...
  const params = new URLSearchParams(window.location.search);
  const qParam = params.get('q');
  if (qParam) {
    // se estivermos na página de resultados, procure containers com ids específicos e renderize filtros
    const q = qParam.trim();
    const resultsHeader = document.getElementById('searchHeader');
    if (resultsHeader) resultsHeader.textContent = `Resultados para: "${q}"`;

    // filtrar times e jogadores usando dados existentes
    const filteredTimes = dados.times.filter(t => {
      const txt = `${t.nome} ${t.jogadores.join(' ')} ${t.emoji}`.toLowerCase();
      return txt.includes(q.toLowerCase());
    });

    const filteredPlayers = dados.jogadores.filter(j => {
      const txt = `${j.nome} ${j.time}`.toLowerCase();
      return txt.includes(q.toLowerCase());
    });

    const teamsContainer = document.getElementById('resultsTeams');
    const playersContainer = document.getElementById('resultsPlayers');
    const countsBox = document.getElementById('resultsCounts');

    if (countsBox) countsBox.innerHTML = `${filteredTimes.length} time(s) • ${filteredPlayers.length} jogador(es)`;

    if (teamsContainer) renderizarTimes(teamsContainer, filteredTimes);
    if (playersContainer) renderizarJogadores(playersContainer, filteredPlayers);
  }
});

// --- comportamentos adicionais: preencher index a partir de window.dados e busca limpa ---
document.addEventListener('DOMContentLoaded', () => {
  // preencher index automaticamente
  if (window.dados) {
    const sBadge = document.getElementById('seasonBadge');
    const hTitle = document.getElementById('heroTitle');
    const hDesc = document.getElementById('heroDesc');
    const champ = document.getElementById('championValue');
    const mvp = document.getElementById('mvpValue');
    const btnEd = document.getElementById('btnEdicoes');

    if (sBadge) sBadge.textContent = window.dados.site.temporadaBadge || sBadge.textContent;
    if (hTitle) hTitle.textContent = window.dados.site.heroTitulo || hTitle.textContent;
    if (hDesc) hDesc.textContent = window.dados.site.heroDescricao || hDesc.textContent;
    if (champ) champ.textContent = window.dados.destaque?.campeao || champ.textContent;
    if (mvp) mvp.textContent = window.dados.destaque?.mvp || mvp.textContent;
    if (btnEd) btnEd.onclick = () => window.location.href = (window.dados.site.verEdicoesHref || 'pages/edicoes.html');

    // estatísticas dinâmicas
    const statsGrid = document.getElementById('statsGrid') || document.querySelector('.stats-grid');
    if (statsGrid && Array.isArray(window.dados.estatisticas)) {
      statsGrid.innerHTML = window.dados.estatisticas.map(s => `
        <div class="stat-card">
          <div class="stat-icon">${s.icone}</div>
          <div class="stat-label">${s.label}</div>
          <div class="stat-number">${s.numero}</div>
          <div class="stat-desc">${s.desc}</div>
        </div>
      `).join('');
    }

    // renderizar times/jogadores se as funções existirem
    const cardsContainer = document.querySelector('.cards-grid') || document.getElementById('cardsGrid');
    if (cardsContainer && typeof renderizarTimes === 'function') {
      renderizarTimes(cardsContainer, window.dados.times);
    }
    const playersContainer = document.querySelector('.players-grid');
    if (playersContainer && typeof renderizarJogadores === 'function') {
      renderizarJogadores(playersContainer, window.dados.jogadores);
    }
  }

  // busca: permitir submit normal (navegar para pages/search.html) sem avisos/overlays
  const form = document.getElementById('searchForm');
  const input = document.getElementById('searchInput');
  if (form) {
    form.addEventListener('submit', (ev) => {
      // se o form tem action definida (index.html tem action="pages/search.html"), permitir comportamento normal
      // não mostrar overlays/avisos indesejados
      // se desejar comportamento inline, remova action do form e a lógica já existente fará o filtro
      // aqui deixamos o envio padrão para pages/search.html?q=...
    });
  }

  // comportamento na página de resultados (pages/search.html?q=...)
  const params = new URLSearchParams(window.location.search);
  const qParam = params.get('q');
  if (qParam) {
    const q = qParam.trim();
    const resultsHeader = document.getElementById('searchHeader');
    if (resultsHeader) resultsHeader.textContent = `Resultados para: "${q}"`;

    // usa window.dados para filtrar
    if (window.dados) {
      const filteredTimes = window.dados.times.filter(t => {
        const txt = `${t.nome} ${t.jogadores.join(' ')} ${t.emoji}`.toLowerCase();
        return txt.includes(q.toLowerCase());
      });

      const filteredPlayers = window.dados.jogadores.filter(j => {
        const txt = `${j.nome} ${j.time}`.toLowerCase();
        return txt.includes(q.toLowerCase());
      });

      const teamsContainer = document.getElementById('resultsTeams');
      const playersContainer = document.getElementById('resultsPlayers');
      const countsBox = document.getElementById('resultsCounts');

      if (countsBox) countsBox.innerHTML = `${filteredTimes.length} time(s) • ${filteredPlayers.length} jogador(es)`;
      if (teamsContainer && typeof renderizarTimes === 'function') renderizarTimes(teamsContainer, filteredTimes);
      if (playersContainer && typeof renderizarJogadores === 'function') renderizarJogadores(playersContainer, filteredPlayers);
    }
  }
});

// --- TENTAR CARREGAR DADOS DO MOCKAPI E RE-RENDERIZAR ---
async function carregarDadosDaMockApi(baseUrl) {
  // Exemplo de baseUrl: 'https://63c1xxxxxx.mockapi.io/api/v1'
  if (!baseUrl) return false;
  try {
    const [timesRes, playersRes] = await Promise.all([
      fetch(`${baseUrl}/times`),
      fetch(`${baseUrl}/jogadores`)
    ]);
    if (!timesRes.ok || !playersRes.ok) throw new Error('Resposta inválida da API');

    const times = await timesRes.json();
    const jogadores = await playersRes.json();

    // Normalizar estrutura mínima
    window.dados = window.dados || {};
    window.dados.times = Array.isArray(times) ? times : [];
    window.dados.jogadores = Array.isArray(jogadores) ? jogadores : [];

    // re-renderizar se funções existirem
    const cardsContainer = document.querySelector('.cards-grid') || document.getElementById('cardsGrid');
    const playersContainer = document.querySelector('.players-grid') || document.getElementById('resultsPlayers');
    if (cardsContainer && typeof renderizarTimes === 'function') renderizarTimes(cardsContainer, window.dados.times);
    if (playersContainer && typeof renderizarJogadores === 'function') renderizarJogadores(playersContainer, window.dados.jogadores);

    // atualizar página de resultados se estiver nela
    const params = new URLSearchParams(window.location.search);
    const qParam = params.get('q');
    if (qParam) {
      const q = qParam.trim().toLowerCase();
      const filteredTimes = window.dados.times.filter(t => (`${t.nome} ${(t.jogadores||[]).join(' ')} ${t.emoji||''}`).toLowerCase().includes(q));
      const filteredPlayers = window.dados.jogadores.filter(j => (`${j.nome} ${j.time||''}`).toLowerCase().includes(q));
      const teamsContainer = document.getElementById('resultsTeams');
      const playersContainer2 = document.getElementById('resultsPlayers');
      const countsBox = document.getElementById('resultsCounts');
      if (countsBox) countsBox.innerHTML = `${filteredTimes.length} time(s) • ${filteredPlayers.length} jogador(es)`;
      if (teamsContainer && typeof renderizarTimes === 'function') renderizarTimes(teamsContainer, filteredTimes);
      if (playersContainer2 && typeof renderizarJogadores === 'function') renderizarJogadores(playersContainer2, filteredPlayers);
    }

    return true;
  } catch (err) {
    console.warn('Falha ao carregar MockAPI:', err);
    return false;
  }
}

// Chamar a função no carregamento da página (substitua a URL abaixo pela do seu projeto MockAPI)
document.addEventListener('DOMContentLoaded', async () => {
  const MOCKAPI_BASE = 'https://YOUR_MOCKAPI_BASE.mockapi.io/api'; // <-- substitua aqui (sem barra final)
  await carregarDadosDaMockApi(MOCKAPI_BASE);
});
