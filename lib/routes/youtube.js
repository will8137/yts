var YouTube = require('youtube-node');

var youTube = new YouTube();

//Set your key here
youTube.setKey('AIzaSyDk14DL8dgHKwg1KZbQkf3BmTvh_y6DhPE');

module.exports = function(app){

    app.get('/api/youtube/search', function(req, res) {

      youTube.search(req.query['query'], 2, function(error, result) {
        if (error) {
          res.json(error);
        }
        else {
          res.json(result);
        }
      });
    });

    app.get('/api/yt/convert', function(req, res) {

    });

    
}