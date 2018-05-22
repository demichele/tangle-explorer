var IOTA = require('iota.lib.js');

var iota = new IOTA({
    'host': 'http://173.212.193.59',
    'port': 14265
});

const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');


// Portada sin parametro
exports.get_address = function(req, res) {   
    

var address = req.body.address;

res.redirect('/address/'+address);



};



// Portada sin parametro
exports.solve_address = function(req, res) {   
    

var address = req.params.id;

    if(iota.utils.isBundle(address)){

    res.send('ES BUNDLE');    

    }else if(iota.valid.isHash(address)){
    

    var bundle = iota.api.getBundle(address);
    //var formatBundle =  iota.utils.extractJson(bundle);
   
    res.send('ES UN TX HASH: ' + formatBundle);   





    }else if(iota.valid.isAddress(address)){

    res.send('ES UNA ADDRESS');    

    }else{

    res.send('Ha ingresado un valor incorrecto');    

    }


//res.send('Buscar con la Address ' + address);

};