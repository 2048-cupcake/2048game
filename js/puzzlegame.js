var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
	    var response = JSON.parse(xhttp.responseText);
		var user = response.user;
		var showdata = "";
				for(var i = 1; i < 11; i++) {
                 // for(var i = 0; i < user.length; i++) {
                  //for (var i = user.length - 1; i >= 0; i--){
					//showdata += ' <div id=' + user[i].url + ' class="userpost">';
		           // showdata += '<div>';

//showdata += '<div class="main-container">';
//showdata += '<ul class="grid-wrapper">';
showdata += '<li><a href="' + user[i].websiteurl + '"   target="_blank" data-overlay-text="' + user[i].gamename + '"  class="overlay-container" >	<img src="' + user[i].image + '"  class="overlay-img"   alt="2048 Classic"> </a>';    //<h2 class="gamename">'+user[i].gamename+ '</h2>';  
  
  
 showdata += ' </li>';
//showdata += '</ul>';
//showdata += '</div>';
					//showdata += '</div>';
					//showdata += '</div>';
								
									
							}
							document.write(showdata);
						}
					}; 
//var _0x69c6=["\x47\x45\x54","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x63\x72\x69\x70\x74\x2E\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x6D\x61\x63\x72\x6F\x73\x2F\x73\x2F\x41\x4B\x66\x79\x63\x62\x79\x6F\x37\x51\x4A\x37\x48\x4F\x4A\x55\x4B\x4E\x45\x77\x54\x45\x36\x36\x71\x42\x33\x73\x64\x58\x2D\x31\x65\x31\x78\x54\x66\x50\x55\x55\x64\x62\x6A\x34\x58\x70\x53\x2D\x6F\x63\x47\x76\x4D\x76\x33\x37\x59\x70\x36\x47\x62\x4B\x43\x78\x62\x69\x73\x6E\x48\x66\x66\x31\x2F\x65\x78\x65\x63","\x6F\x70\x65\x6E","\x73\x65\x6E\x64"];xhttp[_0x69c6[2]](_0x69c6[0],_0x69c6[1],false);xhttp[_0x69c6[3]]()

 xhttp.open("GET", "https://2048-cupcake.github.io/2048game/json/puzzlegame.json", false);		
         xhttp.send(); 
