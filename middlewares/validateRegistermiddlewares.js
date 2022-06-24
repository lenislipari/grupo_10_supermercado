const path = require('path');
const {
    body
  } = require('express-validator');
  
  
  
  const validations = [
    body('nombreYApellido').notEmpty().withMessage('Debe agregar nombre y apellido'),
    body('usuario').notEmpty().withMessage('Debe agregar un nombre de usuario'),
    body('password').notEmpty().withMessage('Debe ingresar una contraseña').bail()
    .custom((value, {
      req
    }) => {
      let contraseña = req.body.password;
      let repeat = req.body["repeat-password"];
  
      if (contraseña != repeat) {
        throw new error('Las contraseñas deben coincidir')
      }
      return true;
    }),
    body('pais').notEmpty().withMessage('Debe agregar un país'),
    body('direccion').notEmpty().withMessage('Debe agregar una dirección'),
    body('terminos').notEmpty().withMessage('Debe aceptar los términos y condiciones'),
    body('fotoPerfil').custom((value, {
      req
    }) => {
      let file = req.file;
      let acceptedExtensions = ['.jpg', '.JPEG', '.JPG', '.PNG', '.png', '.gif'];
  
      if (!file) {
        throw new Error('Debes subir una imágen')
      } else {
        let fileExtension = path.extname(file.originalname);
        if (!acceptedExtensions.includes(fileExtension)) {
          throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`)
        }
      }
      return true;
    })
  
  ]
  
  module.exports = validations 