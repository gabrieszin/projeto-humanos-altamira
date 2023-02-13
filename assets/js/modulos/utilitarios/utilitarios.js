function comparaNomes(a, b){
  const primeiro = a.nome.toLowerCase();
  const segundo = b.nome.toLowerCase();
  
  if(primeiro < segundo){
    return -1;
  }
  
  if(primeiro > segundo){
    return 1;
  }
  
  return 0;
}

function comparaNumero(a, b){
  
  const primeiro = parseInt((a.nome.split(' - '))[0]);
  const segundo = parseInt((b.nome.split(' - '))[0]);
  
  if(primeiro < segundo){
    return -1;
  }
  
  if(primeiro > segundo){
    return 1;
  }
  
  return 0;
}

function comparaNumeroDescrescente(a, b){
  const primeiro = parseInt((a.nome.split(' - '))[0]);
  const segundo = parseInt((b.nome.split(' - '))[0]);
  
  if(primeiro > segundo){
    return -1;
  }
  
  if(primeiro < segundo){
    return 1;
  }
  
  return 0;
}

const isEmpty = (valor) => {
  if(typeof valor == 'string'){
    return valor == undefined || valor == null || valor.length <= 0;
  }else{
    return valor == undefined || valor == null
  }
}

function zeroEsquerda(quantidadeZeros, valor){
  let zeros;
  
  for(let i = 0; i < quantidadeZeros; i++){
    zeros == null ? zeros = "0" : zeros = zeros + "0";
  }
  return (zeros + valor).slice(-quantidadeZeros);
}

export{
  comparaNomes,
  comparaNumero,
  comparaNumeroDescrescente,
  isEmpty,
  zeroEsquerda
}