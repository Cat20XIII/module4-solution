// helloSpeaker.js
(function (window) {
  var helloSpeaker = {}; // Crée un objet helloSpeaker

  // Définit la fonction speak sur l'objet helloSpeaker
  helloSpeaker.speak = function (name) {
    var greeting = "Hello";
    console.log(greeting + " " + name);
  };

  // Expose l'objet helloSpeaker à la portée globale
  window.helloSpeaker = helloSpeaker;
})(window);
