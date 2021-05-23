const { validationResult } = require("express-validator");

const validarCampos = (req, res, next) => {
  const errors = validationResult(req); //Se valida los errores capturados vienen en req
  if (!errors.isEmpty()) {
    return res.status(400).json(errors); //SI hay errores retornalos
  }
  next();
};


module.exports = {
    validarCampos
};