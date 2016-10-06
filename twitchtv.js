$(document).ready(function(){
	var coders = ["ESL_SC2","freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","brunofin","comster404"];
	
	coders.forEach(function(item){
		$.getJSON('https://api.twitch.tv/kraken/streams/' + item + '?callback=?', function(data) {
            console.log(item, data);
			if(data.stream){
				    //console.log(item, "ONLINE");
					$('#online').append("<a href =" + data.stream.channel.url + ">" + item + "</a></p><img src=" + data.stream.preview.small + "</img><br><p>" + data.stream.channel.status + "</p>").show();
				} else {
					//console.log(item, "OFFLINE");
					$('#offline').append("<div>" + item + "</div>").show();
				}
			if(data.hasOwnProperty("error")){
				$('#unknown').append("<p><span id='alert'>!</span>" + data.message + "<p>").show();

			}
		});

		
	});	
	  
	  
	  
	
});
