var id;

function startAnimation() {
  var box = document.getElementById("box");
  var distance = document.getElementById("distance").value;
  var degrees = document.getElementById("degrees").value;
  var pos = 0;
  var rotation = 360;
  id = setInterval(frame, 5);
  function frame() {
    if (pos == distance) {
      clearInterval(id);
    } else {
      pos++;
      box.style.left = pos + "px";
      box.style.transform = "rotate("+ degrees * rotation + "deg)";
    }
  }
}