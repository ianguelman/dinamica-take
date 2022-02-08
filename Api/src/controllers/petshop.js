const { response } = require("express");

let agendamentos = [
  { date: "09/02", periodo: "manhã", marcado: false },
  { date: "10/02", periodo: "tarde", marcado: false },
  { date: "12/02", periodo: "manhã", marcado: false },
];

module.exports.marcarHorario = (req, res, next) => {
  //INSERE NO BANCO  
  agendamentos.forEach((obj) => {
    if(req.body.date === obj.date){
        obj.marcado = true
        res.status(200).send("marcado, nos vemos lá");
    }
  });  
  res.status(200).send("Não Conseguimos marcar, sentimos muito :(");
};

module.exports.verificarHorario = (req, res, next) => {
  //RETORNA HORÁRIOS DISPONÍVEIS

  let livres = [];

  agendamentos.forEach((horario) => {
    if (!horario.marcado) {
      livres.push(horario);
    }
  });

  res.status(200).send(livres);
};
