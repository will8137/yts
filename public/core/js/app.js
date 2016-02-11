console.log("Welcome to the front end");


$(function(){
	$('#wrapper').append('<div class="tracks" style="width: 48%; float: left; height: '+$(window).height()+'px; overflow: scroll;"></div><div class="video" style="position: relative; width: 48%; float: right; height: '+$(window).height()+'px;"></div>');

	$.get('api/spotify/getPlaylist', function(data){
		var tracks = data.items;

		_.each(tracks, function(data, index){
			var trackName = data.track.name;
			var artistName = data.track.artists[0].name;
			if(index === 0){
				var userName = data.added_by.id;
				console.log(userName)
				$('.tracks').prepend('<h1>'+userName+'\'s playlist</h1><hr style="margin: 5px 0px">')
			}
			
			$('.tracks').append("<div style='display: inline-block'>"+trackName+" </div><div style='padding: 5px; display: inline-block'> by "+artistName+" </div><button class='search' style='display: inline-block' data-query='"+trackName+" "+artistName+"'>Load</button><br>");
		});

		$('.search').on('click', function(event){
			var query = $(event.currentTarget).data('query');
			console.log(query);
			$('.video').empty();
			$('.video').append('Loading....');
			$.ajax({
			  url: 'api/youtube/search',
			  data: {query: query},
			  success: function(data){
			  	$('.video').empty();
				$('.video').append('<iframe style="position: absolute; top: 50%; margin-top: -155px;" width="560" height="315" src="https://www.youtube.com/embed/'+data.items[0].id.videoId+'" frameborder="0" allowfullscreen></iframe>');
			  },
			  dataType: "json"
			});
		});

	});
})





