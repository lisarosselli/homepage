/*
 * A jumble of canvas code.
 *
 * @author L.Rosselli
 *
 */

function convertToRadians(degrees) {
	return ((Math.PI/180) * degrees);
};

function randomRadian() {
	var twoRan = Math.random() * 2;
	return (Math.PI * twoRan);
}

function randomRgb() {
	return Math.floor(Math.random() * 255);
}

function Circle() {

	var c = document.getElementById('c');

	var ctx = (c.getContext) ? c.getContext('2d') : null;
	ctx.clearRect(55, 0, 100, 100);

	var createCircle = function() {
		var r = 45; //radius
		var h = 155; // x circle center
		var k = 50; // y circle center

		var i = setInterval(outlineCircle, 50);

		ctx.strokeStyle = 'red';
		ctx.beginPath();

		var a = 0;

		function outlineCircle() {
			if (a > 330) {
				clearInterval(i);
				a = 0;
				ctx.closePath();
				var rA = randomRadian();
				var x2 = r * Math.cos(rA) + h;
				var y2 = r * Math.sin(rA) + k;
				ctx.moveTo(x2, y2);
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

			if (a < 125) {
				//ctx.beginPath();
				var rA = randomRadian()
				var x2 = (r * Math.cos(rA) + h);
				var y2 = (r * Math.sin(rA) + k);
				//ctx.strokeStyle = 'rgb(' +
				//		randomRgb() + ', ' +
				//		randomRgb() + ', ' +
				//		randomRgb() + ')';
				ctx.lineTo(x2, y2);
				ctx.stroke();
				//ctx.closePath();
				++a;
			} else {
				clearInterval(i);
			}
			
		}

	};

	return {
		createCircle: createCircle,
		get context() {
			return ctx;
		}
	};

};

window.onload = function() {
	var c = new Circle();
	c.createCircle();
}