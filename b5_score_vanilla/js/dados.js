// Dados centralizados: edite textos e caminhos de imagem aqui
const dados = {
  site: {
    titulo: "B5 Score",
    subtitle: "Estatísticas do BattleFive",
    temporadaBadge: "TEMPORADA 3 • 2025",
    heroTitulo: "BattleFive",
    heroDescricao: "Acompanhe as estatísticas completas do campeonato mais emocionante de FiveM",
    verEdicoesHref: "pages/edicoes.html"
  },
  destaque: {
    campeao: "Dragon Force",
    mvp: "PlayerPro"
  },
  estatisticas: [
    { icone: "🏆", label: "Total de Edições", numero: "3", desc: "Desde 2023" },
    { icone: "👥", label: "Times Participantes", numero: "6", desc: "+4 nesta temporada" },
    { icone: "⚡", label: "Partidas Realizadas", numero: "156", desc: "Dados da Temporada 3" },
    { icone: "📈", label: "Média de Abates/Partida", numero: "12.5", desc: "↑ 8% vs temporada anterior" }
  ],
  times: [
    {
      id: "dragon-force",
      nome: "Dragon Force",
      emoji: "🐉",
      subtitle: "2 títulos • 3 participações",
      jogadores: ["PlayerPro","GameMaster","SkillKing"],
      imagem: "assets/images/dragon.jpg"
    },
    {
      id: "wolf-pack",
      nome: "Wolf Pack",
      emoji: "🐺",
      subtitle: "1 título • 3 participações",
      jogadores: ["AlphaWolf","BetaStrike","GammaRush"],
      imagem: "assets/images/wolf.jpg"
    },
    {
      id: "lightning-strike",
      nome: "Lightning Strike",
      emoji: "⚡",
      subtitle: "0 títulos • 2 participações",
      jogadores: ["ThunderBolt","StormRider","VoltageX"],
      imagem: "assets/images/lightning.jpg"
    }
  ],
  jogadores: [
    { id: "playerpro", nome: "PlayerPro", time: "Dragon Force", avatar: "assets/images/playerpro.jpg", abates: 245, kd: 2.45 },
    { id: "alphawolf", nome: "AlphaWolf", time: "Wolf Pack", avatar: "assets/images/alphawolf.jpg", abates: 198, kd: 2.12 },
    { id: "thunderbolt", nome: "ThunderBolt", time: "Lightning Strike", avatar: "assets/images/thunderbolt.jpg", abates: 176, kd: 1.89 }
  ]
};

window.dados = dados;