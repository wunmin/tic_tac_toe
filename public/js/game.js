$(document).ready(function() {

  function DrawBoard(){
    var canvas = document.getElementById("board");
    var context = canvas.getContext("2d");
    // Fill big box with background color
    context.fillStyle = "#dedede";
    context.fillRect(0,0,300,300);

    // Draw border for smaller internal boxes
    context.beginPath();
    context.moveTo(0, canvas.height/3);
    context.lineTo(canvas.height, canvas.height/3);
    context.stroke();
    context.moveTo(0, canvas.height/3*2);
    context.lineTo(canvas.height, canvas.height/3*2);
    context.stroke();
    context.moveTo(canvas.height/3, 0);
    context.lineTo(canvas.height/3, canvas.height);
    context.stroke();
    context.moveTo(canvas.height/3*2, 0);
    context.lineTo(canvas.height/3*2, canvas.height);
    context.stroke();
  };

  function Box(){
    var canvas = document.getElementById("board");
    var context = canvas.getContext("2d");
    this.drawO = function(coordX,coordY){
      var centerX = (coordX * 100) + canvas.width/6
      var centerY = (coordY * 100) + canvas.height/6
      var radius = 30;
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      context.stroke();
    }

    this.drawX = function(coordX, coordY){
      var positionX = coordX * 100 + 20;
      var positionY = coordY * 100 + 20;
      context.moveTo(positionX, positionY);
      context.lineTo(positionX + 60, positionY + 60);
      context.stroke();
      context.moveTo(positionX + 60, positionY);
      context.lineTo(positionX, positionY + 60);
      context.stroke();
    };
  };

  function Game(){
    this.turn = function(){
      var player = document.getElementById("player").getAttribute('value');
      var turn = document.getElementById("turn").getAttribute('value');
      if (player != turn) {
        $("#board").unbind("click");
      }
      else {
        $("#board").bind("click");
      }
    }
  }


  $("#board").click(function(event){
    event.preventDefault();
    var x = Math.floor((event.clientX - 200)/100);
    var y = Math.floor((event.clientY - 100)/100);
    var coor = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("demo").innerHTML = coor;
    var box = new Box();

    var playerNum = document.getElementById("player").getAttribute('value');
    if (playerNum === "1"){
      box.drawO(x,y);
    }
    else {
      box.drawX(x,y);
    }
    $.ajax({
      url: "/next_player",
      method: POST,
      data: playerNum.to_json,
    });
  });

  var game = new Game();
  game.turn();
  DrawBoard();

});
