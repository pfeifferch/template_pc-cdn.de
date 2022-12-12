if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  var post2 = document.getElementById("post-2");
  var currentClass = post2.className;
  post2.className = currentClass == "post-content post-2 page type-page status-publish hentry dark-mode";
} else {
  var post2 = document.getElementById("post-2");
  var currentClass = post2.className;
  post2.className = currentClass == "post-content post-2 page type-page status-publish hentry light-mode";
}

function toggleDarkLight() {
  var post2 = document.getElementById("post-2");
  var currentClass = post2.className;
  post2.className = currentClass == "post-content post-2 page type-page status-publish hentry dark-mode" ? "post-content post-2 page type-page status-publish hentry light-mode" : "post-content post-2 page type-page status-publish hentry dark-mode";
}




