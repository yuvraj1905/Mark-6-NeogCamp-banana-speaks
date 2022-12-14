var btnTranslate = document.querySelector("#translate-text-btn");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(input) {
  return serverUrl + "?" + "text=" + input;
}
function errorHandler(error) {
  console.log("error occured", error);
  alert("Something wrong with server , Please try after sometime.");
}

function clickHandler() {
  var inputText = txtInput.value;
  fetch(getTranslationUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}
btnTranslate.addEventListener("click", clickHandler);
