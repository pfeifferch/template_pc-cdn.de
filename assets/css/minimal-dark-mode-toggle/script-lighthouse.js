function toggleDarkLight() {
  var body = document.getElementById("post-2");
  var currentClass = body.className;
  body.className = currentClass == "post-content post-2 page type-page status-publish hentry dark-mode" ? "post-content post-2 page type-page status-publish hentry light-mode" : "post-content post-2 page type-page status-publish hentry dark-mode";
}



