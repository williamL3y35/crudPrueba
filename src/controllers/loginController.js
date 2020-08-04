const loginController = {};

loginController.inicio = (req,res) => {
    res.render('login');
}

module.exports = loginController;