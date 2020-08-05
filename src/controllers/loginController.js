const loginController = {};

loginController.inicio = (req,res) => {
    res.render('login');
}
loginController.validar = (req,res) => {
    req.getConnection((err,conn) => {
        var correo =conn.query('SELECT usuario.usuario FROM usuario WHERE cc_usuario = 1');
        console.log(correo);
    })
}

module.exports = loginController;