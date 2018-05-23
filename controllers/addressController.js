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
    

    //var bundle = iota.api.getBundle(address);
    //var formatBundle =  iota.utils.extractJson(bundle);
   
    //res.send('ES UN TX HASH: ');   
    iota.api.getLatestInclusion(address, function(error, success) {
        
        if (error) {
            console.error(error);
        } else {
            res.send(success); 
        }
    
    })




    }else if(iota.valid.isAddress(address)){

    // Address must be converted from sting to Array
    var ad = [address];
    
    iota.api.getBalances(ad, 100, function(error, success) {
        
        if (error) {
            console.error(error);
        } else {
            //console.error(success); 
            
            // Get Balance
            global.balance = success['balances'].toString();

        }
    
    })

    
    iota.api.findTransactionObjects({'addresses': ad}, function(error, success) {
        
        if (error) {
            console.error(error);
        } else {
            //console.error(success); 
            global.txs = success;

            global.num = success.length;





        }
    
    })
    
    // Render View
    //res.send('El balance es: ' + balance + 'i');
    res.render('results', { balance: global.balance, address : address, num_txs: global.num, txs: global.txs });




    }else{

    res.send('Ha ingresado un valor incorrecto');    

    }


//res.send('Buscar con la Address ' + address);

};