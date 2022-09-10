function toggleDarkLight() {
/*
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
*/



var content = document.getElementById("primary");
  var currentClass = content.className;
  content.className = currentClass == "content-area dark-mode" ? "content-area light-mode" : "content-area dark-mode";


}
