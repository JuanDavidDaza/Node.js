const { frutas, dinero } = require("./frutas.js");

const cowsay = require("cowsay");

console.log(cowsay.say({
    text:"I'm a moooodule",
    e:"oO",
    T:"U "
}));
frutas.forEach((item) => {
  console.count(item);
});
console.log(dinero);
