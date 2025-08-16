const iniciarJogo = (palavra, tentativas = 6) =>({
    palavra: "BANANA",
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




