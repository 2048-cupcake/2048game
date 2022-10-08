var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if(this.readyState == 4 && this.status == 200) {
var response = JSON.parse(xhttp.responseText);
var user = response.user;
var showdata = "";
for (var i = user.length - 1; i >1; i--){
showdata += ' <a href=' + user[i].websiteurl + ' target=\"_blank\">';  
showdata += '<div class="item">';
showdata += '<div><img src="' + user[i].image  + '"    alt="' + user[i].gamename + '" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" width="400" height="400" loading="lazy"> </div>';
showdata += '<div>' + user[i].gamename  + '</div>';
showdata += '</div>';
showdata += '</a>';}
document.write(showdata);}}; 
var _0x7e15=["\x47\x45\x54","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x32\x30\x34\x38\x2D\x63\x75\x70\x63\x61\x6B\x65\x2E\x67\x69\x74\x68\x75\x62\x2E\x69\x6F\x2F\x32\x30\x34\x38\x67\x61\x6D\x65\x2F\x6A\x73\x6F\x6E\x2F\x73\x70\x65\x63\x69\x61\x6C\x67\x61\x6D\x65\x2E\x6A\x73\x6F\x6E","\x6F\x70\x65\x6E","\x73\x65\x6E\x64"];xhttp[_0x7e15[2]](_0x7e15[0],_0x7e15[1],false);xhttp[_0x7e15[3]]()
