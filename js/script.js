function adicionarEventos() {

  const botoesTeclado = document.querySelector(".conteiner-teclado");
  const display = document.querySelector(".conteiner-display");
  const botao = document.querySelector(".conteiner-botao");



  const mostrarValores = (event) => {

    const valor = event.target;
    const valorBotao = valor.textContent;
    const valorDisplay = display.textContent;
    display.textContent = valorBotao;
    valorDisplay == 0 ? display.textContent = valorBotao : display.textContent = valorDisplay + valorBotao;

  };



  botoesTeclado.addEventListener('click', mostrarValores);
  // botoesTeclado.addEventListener('click', limparVisor);

}
window.addEventListener('load', adicionarEventos);

// CLEAR

const limparVisor = () => {
  //limpa o visor
  window.location.reload();
}


// +
const somar = (num1, num2) => {
  //recebe dois valores, subtrai o primeiro pelo segundo e retorna o resultado
  var resultado = num1 + num2;
  return resultado;
}

/*

// ÷
function dividir( num1, num2 ) {
    //recebe dois valores divide o primeiro pelo segundo e retorna o resultado
    var resultado = num1 / num2 ;
    return resultado;

}

// X
function multiplicar( num1, num2 ) {
    //recebe dois valores, multiplica o primeiro pelo segundo e retorna o resultado
    var resultado = num1 * num2 ;
    return resultado;
}

// -
function subtrair( num1, num2 ) {
    //recebe dois valores, subtrai o primeiro pelo segundo e retorna o resultado
    var resultado = num1 - num2 ;
    return resultado;
}


// =
function igual( valor ) {
    //recebe o retorno de uma operação de dois valores e printa o resultado no visor
    return resultado;
}
*/