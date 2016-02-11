var User = require('../../app/models/user');

module.exports = function(app){
	// Get all users
    app.get('/api/users', function(req, res) {
    	var users = User.find({}, function(err, data) {
    		if(err) res.json({error: err, _statusCode: 401});
    		return res.json(data)
    	});
        
    });
}