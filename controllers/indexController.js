
//Get Home Page
exports.index = function(req, res) {

    //res.send('NOT IMPLEMENTED: Homepage');
    res.render('index', { title: 'Express' });
    
};

