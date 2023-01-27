//Creamos la constante para requerir la libreria de JWT
const jwt = require("jsonwebtoken");

//Exportamos el modulo. Usando el req,res que se usa con los enpoints. En este caso,
//tambien el "next".
module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");

  //Aqui marcamos que si la peticion no viene con el header --!token-- marque error.
  //Enviando un json con mensaje de error.
  if (!token) {
    return res.status(401).json({
      msg: "No hay token, permiso no válido",
    });
  }

  //En el caso de que si lo tenga, se hara un happy path, con try-catch.
  try {
    const openToken = jwt.verify(token, process.env.SECRET);
    //Con la funcion de verify, del token que tiene si empata con la cadena/palabra
    //puesta en el .env. Ya que funciona se req.user y puede consumir el endpoint.
    req.user = openToken.user;

    next();
  } catch (error) {
    //Marcamos de nuevo en caso de qe haya un error.
    res.status(404).json({
      msg: "Hubo un error",
      error,
    });
  }
};
