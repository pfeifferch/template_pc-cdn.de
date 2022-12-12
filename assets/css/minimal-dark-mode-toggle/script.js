if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode";
} else {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "light-mode";
}

function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}
