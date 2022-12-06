google.load("jquery", "1.3.1");
google.load("jqueryui", "1.7.0");
google.setOnLoadCallback(function()
{
	$(".polaroid").each(function (i) {
		var tempVal = Math.round(Math.random());
		if(tempVal == 1) {
			var rotDegrees = randomXToY(330, 360);
		} else {
			var rotDegrees = randomXToY(0, 30);
		}
		
		if(window.innerWidth == undefined) { 
			var wiw = 1000;
			var wih = 800;
		} else {
			var wiw = window.innerWidth;
			var wih = window.innerHeight;	
		}
		
		var cssObj = { 'left' : Math.random()*(wiw-400),
			'top' : Math.random()*(wih-400),
			'-webkit-transform' : 'rotate('+ rotDegrees +'deg)',
			'tranform' : 'rotate('+ rotDegrees +'deg)' };
		$(this).css(cssObj);
	});
	
	var zindexnr = 1;
	
	var dragging = false;
	
	$(".polaroid").mouseup(function(e){
		if(!dragging) {
			zindexnr++;
			var cssObj = { 'z-index' : zindexnr,
			'transform' : 'rotate(0deg)',
			'-webkit-transform' : 'rotate(0deg)' };
			$(this).css(cssObj);
		}
	});
	
	$(".polaroid").draggable({
		cursor: 'crosshair',
		start: function(event, ui) {
			dragging = true;
			zindexnr++;
			var cssObj = { 'box-shadow' : '#888 5px 10px 10px',
				'-webkit-box-shadow' : '#888 5px 10px 10px',
				'margin-left' : '-10px',
				'margin-top' : '-10px',
				'z-index' : zindexnr };
			$(this).css(cssObj);
		},
		stop: function(event, ui) {
			var tempVal = Math.round(Math.random());
			if(tempVal == 1) {
				var rotDegrees = randomXToY(330, 360);
			} else {
				var rotDegrees = randomXToY(0, 30);
			}
			var cssObj = { 'box-shadow' : '',
				'-webkit-box-shadow' : '',
				'transform' : 'rotate('+ rotDegrees +'deg)',
				'-webkit-transform' : 'rotate('+ rotDegrees +'deg)',
				'margin-left' : '0px',
				'margin-top' : '0px' };
			$(this).css(cssObj);
			dragging = false;
		}
	});
	
	function randomXToY(minVal,maxVal,floatVal) {
		var randVal = minVal+(Math.random()*(maxVal-minVal));
		return typeof floatVal=='undefined'?Math.round(randVal):randVal.toFixed(floatVal);
	}
	
});