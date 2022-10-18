const meMoi = {
  name: "Frédéric L",
  campus: "Marseille",
};
var cowsay = require("cowsay");

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
