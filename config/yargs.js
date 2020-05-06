const options = {
  base: {
    demand: true,
    alias: "b",
  },
  limite: {
    alias: "l",
    default: 10,
  },
};

const argv = require("yargs")
  .command("listar", "print in console lol", options)
  .command("crear", "genera fichero de tabla", options)
  .help().argv;

module.exports = {
    argv
}
