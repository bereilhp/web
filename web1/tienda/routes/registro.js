var express = require('express');
var router = express.Router();
const users = require('../users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('registro.ejs', { title: 'Armazón', user: req.session.user});
});

router.post("/",function(req, res, next) {

  const user = req.body.user;
  const pass = req.body.pass; //agarrar name de input
  const pass1 = req.body.pass1;

  if(pass === pass1){
    if(pass.length == 8 ){

    
    users.register(user,pass,function(){
      console.log("Se registro con exito");
    })

    req.session.message = "Welcome";
    res.redirect("/restricted");

  }else {
    req.session.error = "sdfsdnfjsdfijj"
    res.redirect("/registro");
  }
} else {
  req.session.error = "La contraseña no coincide"
  res.redirect("/registro");
}

});


  

module.exports = router;