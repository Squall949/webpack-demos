var $ = require("jquery");

document.write('<h2>Hello Webpack</h2>');

$("h2").click(function(){
	$(this).html("My name is Webber");
	require("./style.css")
});