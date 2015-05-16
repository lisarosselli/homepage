/*
 *
 */


var oh = document.getElementById('oh');

if (oh.getContext) {
	var ctx = oh.getContext('2d');
/*
	ctx.fillStyle = 'rgb(200,0,0)';
	ctx.fillRect(10,10,50,50);
	ctx.clearRect(25, 25, 15, 15);
*/
	
	//var circle = new Path2D();
	//circle.arc(25, 35, 15, 0, 2 * Math.PI);

	ctx.strokeStyle = "red";
	ctx.beginPath;
	
	//ctx.stroke(circle);

}

function convertToRadians(degrees) {
        return ((Math.PI/180) * degrees);
}

var inter = setInterval(bFun, 50);

var a = 0;

function bFun() {
	if (a > 330) {
		//ctx.endPath();
		clearInterval(inter);
		return;
	}
	var f = 30;
	var x = 50;
	var y = 50;
	var r = 25;
	var sA = convertToRadians(a);
	var eA = convertToRadians(a + f);
	//console.log(sA, eA);
	//arc(x, y, radius, startAngle, endAngle, anticlockwise)
	//Draws an arc which is centered at (x, y) position 
	//with radius r starting at startAngle and ending at endAngle 
	//going in the given direction indicated by anticlockwise 
	//(defaulting to clockwise).
	ctx.arc(x, y, r, sA, eA, false);
	ctx.stroke();
	a += f;
}

function cFun() {

}

/*
for(var i = 0; i < 4; i++)
{
      for(var j = 0; j < 3; j++)
      {
        ctx.beginPath();
        var x = 25+j*50; // x coordinate
        var y = 25+i*50; // y coordinate
        console.log(x, y);
        var radius = 20; // Arc radius
        var startAngle = 0; // Starting point on circle
        var endAngle = Math.PI+(Math.PI*j)/2; // End point on circle
        console.log(endAngle);
        var anticlockwise = i%2==0 ? false : true; // clockwise or anticlockwise

        ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

        if (i>1){
          ctx.fill();
        } else {
          ctx.stroke();
        }
      }
    }
*/
