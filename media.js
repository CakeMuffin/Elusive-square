var move_box = document.getElementById('move_box');
var position_x = 400;
var position_y = 400;
var points = 0;
var level = 0;
var x_time = 50;
var y_time = 50;
move_box.style.left = position_x + 'px';
move_box.style.top = position_y + 'px';
var click = document.getElementById("start")


click.onclick = function start() {
  click.style.display = 'none';
//function setCookie() {
//  document.cookie = "name=oeschger";
//}
document.cookie = "name=oeschger";
//function alertCookie() {
//  alert(document.cookie);
//}


//The function of generating random numbers in the range for random coordinates.
  function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var t_x = setInterval(move_x, x_time); //Launch functions with random coordinates and moving the "box" element in x axle.
  var t_y = setInterval(move_y, y_time); //Launch functions with random coordinates and moving the "box" element in y axle.


//The function of moving the element "box" in x axie. 
  function move_x() {
    if (position_x >= 800 || position_x <= 0) {
      clearInterval(t_x);
      clearInterval(t_y);
      points = 0;
      move_box.style.pointerEvents = 'none';
      click.style.display = 'block';
      position_x = 400;
    } else if (position_x >= 400) {
      position_x += 1;
      move_box.style.left = position_x + 'px';
      move_box.style.pointerEvents = 'unset';
    } else {
      position_x -= 1;
      move_box.style.left = position_x + 'px';
      move_box.style.pointerEvents = 'unset';
    }
  }

//The function of moving the element "box" in y axie.
  function move_y() {
    if (position_y >= 800 || position_y <= 0) {
      clearInterval(t_x);
      clearInterval(t_y);
      points = 0;
      move_box.style.pointerEvents = 'none';
      click.style.display = 'block';
      position_y = 400;
    } else if (position_y >= 400) {
      position_y += 1;
      move_box.style.top = position_y + 'px';
      move_box.style.pointerEvents = 'unset';
    } else {
      position_y -= 1;
      move_box.style.top = position_y + 'px';
      move_box.style.pointerEvents = 'unset';
    }
  }

//Constantly check position of "move_box" and reset timer to stop animation wen hit borders.
  move_box.onclick = function() {
    document.getElementById('points').value = points;
    document.getElementById('level').value = level;
    console.log(points);
    
    setInterval(move_z, 1);

    function move_z() {
      if (position_y >= 800 || position_y <= 0 || position_x >= 800 || position_x <= 0) {
        clearInterval(t_x);
        clearInterval(t_y);
      }
    }

    var n = getRandomInRange(50, 750);
    var m = getRandomInRange(50, 750);
    move_box.style.left = n + 'px';
    move_box.style.top = m + 'px';

    position_x = n;
    position_y = m;

    //score system
    switch (points) {
      case 0: // level 1
        level = 1;
        points += 1;
        x_time = 45;
        y_time = 45;
        clearInterval(t_x);
        clearInterval(t_y);
        var t_x = setInterval(move_x, x_time);
        var t_y = setInterval(move_y, y_time);
        break;

      case 5: // level 2
        level = 2;
        points += 1;
        x_time = 38;
        y_time = 38;
        clearInterval(t_x);
        clearInterval(t_y);
        var t_x = setInterval(move_x, x_time);
        var t_y = setInterval(move_y, y_time);
        break;

      case 10: // level 3
        level = 3;
        points += 1;
        x_time = 35;
        y_time = 35;
        clearInterval(t_x);
        clearInterval(t_y);
        var t_x = setInterval(move_x, x_time);
        var t_y = setInterval(move_y, y_time);
        break;

      case 15: // level 4
        level = 4;
        points += 1;
        x_time = 28;
        y_time = 28;
        clearInterval(t_x);
        clearInterval(t_y);
        var t_x = setInterval(move_x, x_time);
        var t_y = setInterval(move_y, y_time);
        break;

      case 20: // level 5
        level = 5;
        points += 1;
        x_time = 25;
        y_time = 25;
        clearInterval(t_x);
        clearInterval(t_y);
        var t_x = setInterval(move_x, x_time);
        var t_y = setInterval(move_y, y_time);
        break;

      case 25: // level 6
        level = 6;
        points += 1;
        x_time = 22;
        y_time = 22;
        clearInterval(t_x);
        clearInterval(t_y);
        var t_x = setInterval(move_x, x_time);
        var t_y = setInterval(move_y, y_time);
        break;

      case 30: // level 7
        level = 7;
        points += 1;
        x_time = 18;
        y_time = 18;
        clearInterval(t_x);
        clearInterval(t_y);
        var t_x = setInterval(move_x, x_time);
        var t_y = setInterval(move_y, y_time);
        break;

      case 35: // level 8
        level = 8;
        points += 1;
        x_time = 15;
        y_time = 15;
        clearInterval(t_x);
        clearInterval(t_y);
        var t_x = setInterval(move_x, x_time);
        var t_y = setInterval(move_y, y_time);
        break;

      case 40: // level 9
        level = 9;
        points += 1;
        x_time = 8;
        y_time = 8;
        clearInterval(t_x);
        clearInterval(t_y);
        var t_x = setInterval(move_x, x_time);
        var t_y = setInterval(move_y, y_time);
        break;

      case 45: // level 10
        level = 10;
        points += 1;
        x_time = 3;
        y_time = 3;
        clearInterval(t_x);
        clearInterval(t_y);
        var t_x = setInterval(move_x, x_time);
        var t_y = setInterval(move_y, y_time);
        break;

     default:
       points +=1;
       break;
    }
  }
}