# B5 Score - Estatísticas do BattleFive

Um site completo de estatísticas do campeonato BattleFive, desenvolvido com **HTML, CSS e JavaScript puro** - código simples e iniciante, perfeito para aprender desenvolvimento web.

## 📁 Estrutura do Projeto

```
b5_score_vanilla/
├── index.html                 # Página inicial
├── css/
│   └── style.css             # Estilos CSS
├── js/
│   └── script.js             # Lógica JavaScript
├── pages/
│   ├── times.html            # Página de Times
│   ├── jogadores.html        # Página de Jogadores
│   ├── rankings.html         # Página de Rankings
│   ├── edicoes.html          # Página de Edições
│   └── curiosidades.html     # Página de Curiosidades
└── README.md                 # Este arquivo
```

## 🚀 Como Usar

### Opção 1: Abrir no Navegador
1. Extraia o arquivo ZIP
2. Abra o arquivo `index.html` em seu navegador
3. Pronto! O site está funcionando

### Opção 2: Usar um Servidor Local (Recomendado)

**Com Python 3:**
```bash
python -m http.server 8000
```

**Com Node.js (http-server):**
```bash
npx http-server
```

Depois acesse: `http://localhost:8000`

## 📚 O Que Você Vai Aprender

Este projeto é perfeito para estudantes de ADS porque demonstra:

### HTML
- ✅ Estrutura semântica
- ✅ Formulários e inputs
- ✅ Navegação entre páginas
- ✅ Organização de conteúdo

### CSS
- ✅ Flexbox e Grid
- ✅ Responsividade (Mobile First)
- ✅ Variáveis CSS
- ✅ Transições e animações
- ✅ Media queries

### JavaScript
- ✅ Manipulação do DOM
- ✅ Eventos (click, keypress)
- ✅ Arrays e objetos
- ✅ Funções reutilizáveis
- ✅ Filtros e ordenação
- ✅ Busca em tempo real

## 🎨 Páginas do Site

### 1. **Página Inicial (index.html)**
- Hero section com informações do campeonato
- Estatísticas gerais
- Melhores times
- Melhores jogadores

### 2. **Times (pages/times.html)**
- Lista de todos os times
- Informações de cada time
- Jogadores principais

### 3. **Jogadores (pages/jogadores.html)**
- Lista de todos os jogadores
- Estatísticas individuais (Kills, K/D)
- Time de cada jogador

### 4. **Rankings (pages/rankings.html)**
- Top 10 Kills
- Top 10 K/D Ratio
- Ranking de Times

### 5. **Edições (pages/edicoes.html)**
- Histórico de todas as temporadas
- Campeão e MVP de cada edição
- Estatísticas por edição

### 6. **Curiosidades (pages/curiosidades.html)**
- Fatos interessantes do campeonato
- Filtros por categoria
- Histórias memoráveis

## 💡 Funcionalidades

- ✅ **Navegação responsiva** - Menu adaptável para mobile
- ✅ **Busca funcional** - Buscar times e jogadores
- ✅ **Filtros** - Filtrar curiosidades por categoria
- ✅ **Dados dinâmicos** - Todos os dados em JavaScript
- ✅ **Design responsivo** - Funciona em desktop, tablet e mobile
- ✅ **Código limpo** - Fácil de entender e modificar

## 🔧 Como Modificar os Dados

Todos os dados estão em `js/script.js` na variável `dados`. Você pode:

### Adicionar um novo time:
```javascript
{
    id: 7,
    nome: 'Seu Time',
    emoji: '🎮',
    titulos: 0,
    participacoes: 1,
    jogadores: ['Jogador1', 'Jogador2', 'Jogador3'],
    kills: 500,
    mortes: 300,
    winRate: 50.0
}
```

### Adicionar um novo jogador:
```javascript
{ 
    id: 11, 
    nome: 'Seu Nome', 
    time: 'Seu Time', 
    kills: 100, 
    mortes: 50, 
    kd: 2.0, 
    mvp: 0 
}
```

## 📱 Responsividade

O site é totalmente responsivo:
- **Desktop**: Todas as funcionalidades visíveis
- **Tablet**: Layout adaptado
- **Mobile**: Menu hambúrguer, cards em coluna única

## 🎯 Dicas para Aprender

1. **Estude o HTML** - Veja como a página está estruturada
2. **Entenda o CSS** - Modifique cores, tamanhos, espaçamentos
3. **Explore o JavaScript** - Mude os dados, crie novos filtros
4. **Experimente** - Adicione novas funcionalidades!

## 📝 Exemplos de Modificações

### Mudar a cor principal:
No `css/style.css`, altere:
```css
--primary-color: #4f46e5; /* Mude para outra cor */
```

### Adicionar uma nova página:
1. Crie um novo arquivo HTML em `pages/`
2. Copie a estrutura de outra página
3. Adicione o link no menu do `index.html`

### Criar um novo filtro:
No `js/script.js`, crie uma função similar a `filtrarCuriosidades()`

## 🚀 Próximos Passos

Depois de entender este projeto, você pode:
- Adicionar um backend com Node.js/Express
- Conectar a um banco de dados
- Implementar autenticação
- Fazer deploy na web

## 📞 Suporte

Se tiver dúvidas:
1. Verifique o código comentado
2. Consulte a documentação do HTML/CSS/JavaScript
3. Teste no navegador e use o DevTools (F12)

## 📄 Licença

Este projeto é livre para uso educacional.

---

**Desenvolvido para aprender desenvolvimento web com HTML, CSS e JavaScript puro! 🎓**
