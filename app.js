var translatebtn=document.querySelector("#translate-button");
var txtInput=document.querySelector("#txt-translate");
var outputDiv=document.querySelector("#output");



var serverURL="https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(input){
 return serverURL + "?" + "text="+ input
}

function errorHandler(error)
{
 console.log("error occured", error);
 alert("Sorry! Try after sometime.")

}

function clickHandler()
{
var inputText=txtInput.value;

fetch(getTranslationURL(inputText))
 .then(response => response.json())
 .then(json =>
 {

  var translatedText=json.contents.translated;
  outputDiv.innerText=translatedText;

 })
.catch(errorHandler)
};

translatebtn.addEventListener("click", clickHandler)