var $ = require("jquery");

$(function(){
	$("button").click(function(){
	require("./main2.js");
	});
	
	$("img").click(function(){
		$(this).attr("src",require("file?name=google-[hash:6].[ext]!./big.jpg"));
	});
});

document.write('<h1>Hello World</h1>');
