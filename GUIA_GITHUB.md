# Guia: Como Conectar seu Projeto ao GitHub

## Pré-requisitos
1. Ter uma conta no GitHub (se não tiver, crie em: https://github.com)
2. Ter o Git instalado no seu computador

## Passo a Passo

### 1. Verificar se o Git está instalado
Abra o PowerShell ou Terminal e digite:
```bash
git --version
```
Se aparecer um número de versão, está instalado. Se não, baixe em: https://git-scm.com/downloads

### 2. Inicializar o repositório Git (se ainda não foi feito)
No terminal, navegue até a pasta do projeto e execute:
```bash
cd "c:\Users\masas\Downloads\site guizin 2-20251119T224155Z-1-001\site guizin 2"
git init
```

### 3. Configurar seu nome e email no Git (se ainda não configurou)
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"
```

### 4. Adicionar todos os arquivos ao Git
```bash
git add .
```

### 5. Fazer o primeiro commit
```bash
git commit -m "Primeiro commit: projeto Site Guizin"
```

### 6. Criar um repositório no GitHub
1. Acesse https://github.com e faça login
2. Clique no botão "+" no canto superior direito
3. Selecione "New repository"
4. Escolha um nome para o repositório (ex: "site-guizin")
5. **NÃO** marque "Initialize this repository with a README" (já temos arquivos)
6. Clique em "Create repository"

### 7. Conectar o repositório local ao GitHub
Após criar o repositório no GitHub, você verá uma página com instruções. Use o comando que aparece lá, ou execute:

```bash
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
```
(Substitua SEU_USUARIO pelo seu nome de usuário e SEU_REPOSITORIO pelo nome que você escolheu)

### 8. Renomear a branch principal (se necessário)
```bash
git branch -M main
```

### 9. Enviar o código para o GitHub
```bash
git push -u origin main
```

Você será solicitado a fazer login no GitHub. Siga as instruções na tela.

## Comandos Úteis para o Futuro

### Ver o status das alterações
```bash
git status
```

### Adicionar arquivos modificados
```bash
git add .
```

### Fazer commit das alterações
```bash
git commit -m "Descrição do que foi alterado"
```

### Enviar alterações para o GitHub
```bash
git push
```

### Baixar alterações do GitHub
```bash
git pull
```

## Dúvidas Comuns

**Q: E se eu já tiver um repositório Git inicializado?**
R: Pule o passo 2 e vá direto para o passo 6.

**Q: Como saber se já está conectado?**
R: Execute `git remote -v` para ver os repositórios remotos configurados.

**Q: E se der erro de autenticação?**
R: O GitHub não aceita mais senhas. Você precisará usar um Personal Access Token:
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token
3. Marque a opção "repo"
4. Use o token como senha quando for solicitado

