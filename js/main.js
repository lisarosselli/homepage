/*
 * A jumble of canvas code.
 *
 * @author L.Rosselli
 *
 */

function convertToRadians(degrees) {
	return ((Math.PI/180) * degrees);
}

function randomRadian() {
	var twoRan = Math.random() * 2;
	return (Math.PI * twoRan);
}

function randomRgb() {
	return Math.floor(Math.random() * 255);
}

function Circle() {
	var c = document.getElementById('c');

	$(c).addClass('animated bounceInUp');

	$(c).click(function(e) {
		console.log(e);
		console.log(_complete);
	});

	var ctx = (c.getContext) ? c.getContext('2d') : null;

	var _complete = false;

	var createCircle = function() {
		var r = 45; //radius
		var h = 155; // x circle center
		var k = 50; // y circle center
		var prevPoint = {};

		var i = setInterval(outlineCircle, 30);

		//ctx.strokeStyle = 'red';
		ctx.strokeStyle = 'rgb(' +
			randomRgb() + ', ' +
			randomRgb() + ', ' +
			randomRgb() + ')';
		ctx.beginPath();

		var a = 0;

		function outlineCircle() {
			if (a > 330) {
				clearInterval(i);
				ctx.closePath();
				a = 0;
				
				var rA = randomRadian();
				var x2 = r * Math.cos(rA) + h;
				var y2 = r * Math.sin(rA) + k;
				prevPoint.x = x2;
				prevPoint.y = y2;
				ctx.moveTo(x2, y2);
				ctx.beginPath();

				i = setInterval(scratchIn, 70);
				return;
			}

			var f = 30;
			var sA = convertToRadians(a);
			var eA = convertToRadians(a + f);

			ctx.arc(h, k, r, sA, eA, false);
			ctx.stroke();

			a += f;
		}


		function scratchIn() {
			//Given a radius length r and an angle t 
			//in radians and a circle's center (h,k)
			//float x = r*cos(t) + h;
			//float y = r*sin(t) + k;
			var rA;
			var x2;
			var y2;

			if (a < 100) {
				//ctx.beginPath();

				//rA = randomRadian();
				//x2 = (r * Math.cos(rA) + h);
				//y2 = (r * Math.sin(rA) + k);
				//ctx.moveTo(x2, y2);

				rA = randomRadian();
				x2 = (r * Math.cos(rA) + h);
				y2 = (r * Math.sin(rA) + k);
				ctx.lineTo(x2, y2);

				//prevPoint.x = x2;
				//prevPoint.y = y2;

				//ctx.strokeStyle = 'rgb(' +
				//		randomRgb() + ', ' +
				//		randomRgb() + ', ' +
				//		randomRgb() + ')';

				
				ctx.stroke();
				//ctx.closePath();
				++a;
			} else {
				_complete = true;
				clearInterval(i);
			}
			
		}

	};

	return {
		createCircle: createCircle,
		get complete() {
			return _complete;
		}
	};

}

function cueByline() {
	function showByline() {
		var byline = document.getElementById('byline');
		$(byline).fadeIn();
	}
	var tid = setTimeout(showByline, 2500);
}

function cueLinks() {
	function showLinks() {
		var links = document.getElementById('links');
		$(links).fadeIn();
	}
	var tid = setTimeout(showLinks, 4500);
}

window.onload = function() {
	var c = new Circle();
	c.createCircle();
	cueByline();
	cueLinks();
};