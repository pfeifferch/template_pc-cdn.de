function toggleDarkLight() {
/*
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
*/
var content = document.getElementById("page");
  var currentClass = content.className;
  content.className = currentClass == "hfeed site dark-mode" ? "hfeed site light-mode" : "hfeed site dark-mode";

var content = document.getElementById("primary");
  var currentClass = content.className;
  content.className = currentClass == "content-area dark-mode" ? "content-area light-mode" : "content-area dark-mode";

var content = document.getElementById("entry-title");
  var currentClass = content.className;
  content.className = currentClass == "entry-title dark-mode" ? "entry-title light-mode" : "entry-title dark-mode";


// ISE: Alle Elemente toggeln (mehrere Einträge mit selber ID)
const collection = document.getElementsByClassName("ise-entry-title");
let numb = collection.length;
for (i = 0; i < collection.length; i++) {
//alert(collection[i]);
var currentClass = collection[i].className;

collection[i].className = currentClass == "entry-title dark-mode" ? "entry-title light-mode" : "entry-title dark-mode"; 
}



}


