$(document).ready(function() {
  var c = document.getElementById("board");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "#dedede";
  ctx.fillRect(0,0,300,300);
  ctx.moveTo(0, 100);
  ctx.lineTo(300, 100);
  ctx.stroke();
  ctx.moveTo(0, 200);
  ctx.lineTo(300, 200);
  ctx.stroke();
  ctx.moveTo(100, 0);
  ctx.lineTo(100, 300);
  ctx.stroke();
  ctx.moveTo(200, 0);
  ctx.lineTo(200, 300);
  ctx.stroke();
});
