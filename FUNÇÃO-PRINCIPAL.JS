const iniciarJogo = (palavra, tentativas = 6) =>({
    palavra: palavra.toUpperCase(),
    letrascertas:[],
    letraserradas:[],
    tentativasrestantes: tentativas,
    status: 'jogando'
})

const contemLetra = (str, letra, i = 0) => {
  if (i >= str.length) return false;
  if (str[i] === letra) return true;
  return contemLetra(str, letra, i + 1);
}

const verificarVitoria = (jogo) => {
  if (jogo.palavra.length === jogo.letrascertas.length) {
    jogo.status = 'vitoria';
  }
}   

const verificarDerrota = (jogo) => {
  if (jogo.tentativasrestantes <= 0) {
    jogo.status = 'derrota';
  }
}

const adicionarLetraCerta = (jogo, letra) => {
  if (!contemLetra(jogo.palavra, letra)) return;
  if (contemLetra(jogo.letrascertas, letra)) return;

  jogo.letrascertas.push(letra);
  verificarVitoria(jogo);
}

const adicionarLetraErrada = (jogo, letra) => {
  if (contemLetra(jogo.palavra, letra)) return;
  if (contemLetra(jogo.letraserradas, letra)) return;

  jogo.letraserradas.push(letra);
  jogo.tentativasrestantes--;
  verificarDerrota(jogo);
}

const adicionarLetra = (jogo, letra) => {
  if (jogo.status !== 'jogando') return;

  if (contemLetra(jogo.palavra, letra)) {
    adicionarLetraCerta(jogo, letra);
  } else {
    adicionarLetraErrada(jogo, letra);
  }
}