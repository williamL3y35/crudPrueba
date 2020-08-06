const loginController = {};

loginController.inicio = (req,res) => {
    res.render('login');
}
loginController.validar = (req,res) => {
    var usuariotemp = req.body.usuario;
    var contraseñatemp = req.body.contraseña_usuario;
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM usuario WHERE usuario.usuario = ? AND usuario.contraseña_usuario = ?', [usuariotemp, contraseñatemp] , (err, correos) =>{
            if(correos.length>0){
                res.redirect('/user');
                console.log('usuario y contraseña coinciden');
            }else{
                res.redirect('/');
                console.log('no coinciden');
            }
            
        })
        
    })
}

module.exports = loginController;