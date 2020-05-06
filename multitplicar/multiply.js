const fs = require("fs");
const colors = require("colors");

let listarTabla = (base, limite = 10) => {
  for (let i = 1; i <= limite; i++) {
    let times = base * i;

    console.log(`${base}*${i}= ${times}`);
  }
};

let createFile = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`turns out "${base}" isnt number y'all`);
      return;
    }

    let data = "";

    for (let i = 1; i <= limite; i++) {
      let times = base * i;

      data += `${base}*${i}= ${times}\n`;
    }

    fs.writeFile(`ficheros/tabla-${base}`, data, (err) => {
      if (err) reject(err);
      else resolve(`tabla-${base}.txt`);

      console.log(`el chivu tabla-${base}.txt was created sucksesfuly`);
    });
  });
};

module.exports = {
  createFile,
  listarTabla,
};
