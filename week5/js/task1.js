window.onload=function(){ 

var task1 = { render: function(){ 

 document.getElementById("screenX").textContent = window.screenX;
 document.getElementById("screenY").textContent = window.screenY;
 document.getElementById("screenWidth").textContent = window.innerWidth;
 document.getElementById("screenHeight").textContent = window.innerHeight;
 document.getElementById("location").textContent = window.location;   

},
resize: function(){


	window.addEventListener("resize", this.render);
},
devInfo: function(){


	var btnDev = document.getElementById("dev-info");
	btnDev.addEventListener("click", function() {
		//add your code here to display developer info in 'p' block
		var devInfo = "<br>Michael Kwok<br>";
			devInfo += "IT Student<br>";
			devInfo += "<a href = 'https://github.com/mk2380' target='_blank'>www.github.com/mk2380</a>"
			document.getElementById("dev-info-container").innerHTML = devInfo;		
		
	});
}


}; 

task1.render();
task1.resize();
task1.devInfo();

};// end on load event

