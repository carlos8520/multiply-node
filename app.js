const argv = require("./config/yargs").argv;
const colors = require("colors");

const { createFile, listarTabla } = require("./multitplicar/multiply");

let comando = argv._[0];

switch (comando) {
  case "listar":
    listarTabla(argv.base, argv.limite);
    break;
  case "crear":
    createFile(argv.base, argv.limite)
      .then((archivo) => console.log(`Archivo creado: ${archivo.green}`))
      .catch((err) => console.log(err));
    break;
  default:
    console.log("comando desconocido");
}

//console.log(argv.base);

//let params = argv[2];
//let base = params.split("=")[1];
