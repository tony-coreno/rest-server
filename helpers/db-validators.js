const Role = require("../models/role");
const Usuario = require('../models/usuario')
const esRoleValido = async (rol = "") => {
  const existeRol = await Role.findOne({ rol });
  if (!existeRol) {
    throw new Error(`El rol ${rol}, no esta permitido en la BD`);
  }
};

const emailExiste = async( correo= "") => {
  //Verificar si el correo existe

  const existeEmail = await Usuario.findOne({ correo });
  if (existeEmail) {
    // return res.status(400).json({
    //   msg: "El correo ha sido registrado",
    // });
    throw new Error(`El correo: ${correo}, se encuentra registrado`)
  }
};

module.exports = {
  esRoleValido,
  emailExiste
};
