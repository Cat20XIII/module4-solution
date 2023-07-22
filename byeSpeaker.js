// byeSpeaker.js
(function (window) {
  var byeSpeaker = {}; // Crée un objet byeSpeaker

  // Définit la fonction speak sur l'objet byeSpeaker
  byeSpeaker.speak = function (name) {
    var greeting = "Good Bye";
    console.log(greeting + " " + name);
  };

  // Expose l'objet byeSpeaker à la portée globale
  window.byeSpeaker = byeSpeaker;
})(window);
