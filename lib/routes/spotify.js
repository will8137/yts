var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
  clientId : '305a86c8df7f422d9d7ac7984927a325',
  clientSecret : '',
  redirectUri : 'localhost:8137/api/spotify/test'
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant()
  .then(function(data) {
    console.log('The access token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);

    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);
  }, function(err) {
        console.log('Something went wrong when retrieving an access token', err);
  });

module.exports = function(app){

    app.get('/api/spotify/getPlaylist', function(req, res) {
    	spotifyApi.getPlaylistTracks('walter8137', '4UqJdNT8uWXRRiOavCV97y', {limit: 50}, function(err, data){
    		if(err) return res.json(err);
    		return res.json(data.body);
    	});
    });
    
}