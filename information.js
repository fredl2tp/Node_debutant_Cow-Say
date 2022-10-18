//objet avec mon nom et mon campus
const meMoi = {
  name: "Frédéric L",
  campus: "Marseille",
};

var cowsay = require("cowsay");

//export de l'objet
module.exports = {
  cowsay,
};

console.log(
  cowsay.say({
    text: meMoi.name + " à " + meMoi.campus,
    e: "oO",
    T: " U",
  })
);
