var box = document.getElementById('move_box');
var position_x = 400;
var position_y = 400;
box.style.left = position_x+'px';
box.style.top = position_y+'px';
var click = document.getElementById("start")
click.onclick = function start (){
	click.setAttribute("disabled", "disabled");
	click.style.display = 'none';



//The function of generating random numbers in the range, is used in the setInterval method and in the function of random coordinates.
function getRandomInRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var x_time = getRandomInRange(1, 15);
var y_time = getRandomInRange(1, 15);
	var t_x = setInterval(move_x, x_time);//Launch functions with random coordinates and moving the "box" element in x axle.
	var t_y = setInterval(move_y, y_time);//Launch functions with random coordinates and moving the "box" element in y axle.


//The function of moving the element "box" in x axie.
function move_x() {
	if (position_x >= 800 || position_x <= 0) {
		clearInterval(t_x);
		clearInterval(t_y);
		click.removeAttribute('disabled');
		box.style.pointerEvents = 'none';
		click.style.display = 'block';
		position_x = 400;
	}else if (position_x >= 400) {
		position_x += 1;
		box.style.left = position_x+'px';
		box.style.pointerEvents = 'unset';
	}else {
		position_x -= 1;
		box.style.left = position_x+'px';
		box.style.pointerEvents = 'unset';
	}
}

//The function of moving the element "box" in y axie.
function move_y() {
	if (position_y >= 800 || position_y <= 0) {
		clearInterval(t_x);
		clearInterval(t_y);
		click.removeAttribute('disabled');
		box.style.pointerEvents = 'none';
		click.style.display = 'block';
		position_y = 400;
	}else if (position_y >= 400) {
		position_y += 1;
		box.style.top = position_y+'px';
		box.style.pointerEvents = 'unset';
	}else {
		position_y -= 1;
		box.style.top = position_y+'px';
		box.style.pointerEvents = 'unset';
	}
}

//The function of random coordinates.
box.onclick = function (){

	var n = getRandomInRange(1, 799);
	var m = getRandomInRange(1, 799);
	box.style.left = n+'px';
	box.style.top = m+'px';

	position_x = n;
	position_y = m;
}

}
