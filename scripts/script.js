// Descrição
// Boas vindas ao primeiro desafio!

// Durante estas duas semanas, vamos trabalhar em uma aplicação que criptografa textos, assim você poderá trocar mensagens secretas com outras pessoas que saibam o segredo da criptografia utilizada.

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

// Requisitos:
// - Deve funcionar apenas com letras minúsculas
// - Não devem ser utilizados letras com acentos nem caracteres especiais
// - Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

// Por exemplo:
// "gato" => "gaitober"
// gaitober" => "gato"

// A página deve ter campos para inserção do texto a ser criptografado ou descriptografado, e a pessoa usuária deve poder escolher entre as duas opções
// O resultado deve ser exibido na tela.

// A fazer:

// estilo da pagina,
// tratamento de erros

const encodeMap = {
  'e': 'enter',
  'i': 'imes',
  'a': 'ai',
  'o': 'ober',
  'u': 'ufat'
};

const decodeMap = {
  'enter': 'e',
  'imes': 'i',
  'ai': 'a',
  'ober': 'o',
  'ufat': 'u'
};

function mapCharacter(char, isEncoding) {

  if (isEncoding) {
    return encodeMap[char] || char;
  }else {
    return decodeMap[char] || char;
  }
  
}

function encodeText() {
  let inputText = document.getElementById("inputText").value.toLowerCase();

  if (inputText.length === 0) {
    document.getElementById("outputText").value = '';
    return;
  }
 
  let resultText = '';

  for (let i = 0; i < inputText.length; i++) {
    const char = inputText[i];
    resultText +=mapCharacter(char, true);
  }
   
  document.getElementById("outputText").value = resultText;
}

function decodeText() {
  let inputText = document.getElementById("inputText").value;

  if (inputText.length === 0) {
    document.getElementById("outputText").value = '';
    return;
  }

  let resultText = inputText;

  // Substituir cada padrão de codificação pelo caractere original
  Object.keys(decodeMap).sort((a, b) => b.length - a.length).forEach(key => {
    let regex = new RegExp(key, 'g');
    resultText = resultText.replace(regex, decodeMap[key]);
  });

  document.getElementById("outputText").value = resultText;
}


function returnToInputText() {

  let outputTextElement = document.getElementById('outputText');
  let outputText = outputTextElement.value
  let inputText = document.getElementById('inputText');

  inputText.value = outputText;  
  outputTextElement.value = ''
 

}

function clear() {
  inputText = document.getElementById("inputText");
  outputText = document.getElementById('outputText');
  inputText.value = '';
  outputText.value = '';

}

document.getElementById('encodeButton').addEventListener('click', encodeText);
document.getElementById('decodeButton').addEventListener('click', decodeText);
document.getElementById('clearButton').addEventListener('click', clear);
document.getElementById('returnToInputText').addEventListener('click', returnToInputText);
