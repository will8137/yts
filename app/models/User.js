var mongoose = require('mongoose');
var pass = require('pwd');

var UserSchema = new mongoose.Schema({
	firstName:  String,
	lastName:   String,
	email:      String,
	_salt:       String,
	_hash:       String,
	_isLoggedIn: Boolean,
	_authKey: 	String,
    _avatar: String,
    _avatarThumbnail: String
});

UserSchema.statics.register= function(userData, done) {
	var password = userData.password;
	console.log(password)
	User = this;
	pass.hash(password, function(err, salt, hash){
		if(err) throw err;
		User.create({
			firstName:  userData.firstName,
			lastName:  	userData.lastName,
			email:      userData.email,
			_salt:      salt,
			_hash:      hash
		}, function(err, user){
			if(err) throw err;
			// if (err) return done(err);
			done(null, user);
		})
	})
}

var User = mongoose.model("User", UserSchema);

module.exports = User;