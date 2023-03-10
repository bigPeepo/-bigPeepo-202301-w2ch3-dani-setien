const SpeechRecognition = webkitSpeechRecognition;
const SpeechGrammarList = window.webkitSpeechGrammarList;
const SpeechRecognitionEvent = webkitSpeechRecognitionEvent;

const recognition = new SpeechRecognition();

recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

document.body.onclick = function () {
  recognition.start();
  console.log("Ready");
};

recognition.onresult = function (event) {
  console.log("Confidence: " + event.results[0][0].confidence);
  console.log(event.results[0][0].transcript);

  document.getElementById("text-input").innerHTML =
    event.results[0][0].transcript;
};

recognition.onspeechend = function () {
  recognition.stop();
};
