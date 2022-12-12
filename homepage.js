window.onload = addListeners();
console.log("js works")
function addListeners() {
    console.log("loaded")
  document.getElementById('worldMap').addEventListener('mousedown', mouseDown, false);
  window.addEventListener('mouseup', mouseUp, false);

}

function mouseUp() {
  window.removeEventListener('mousemove', divMove, true);
}

function mouseDown(e) {
    console.log("pressed the div");
  window.addEventListener('mousemove', divMove, true);
}

function divMove(e) {
  var div = document.getElementById('worldMap');
  div.style.position = 'absolute';
  div.style.top = e.clientY + 'px';
  div.style.left = e.clientX + 'px';
}
