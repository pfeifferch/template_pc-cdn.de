function toggleDarkLight() {  
var body = document.getElementById("body"); 
var currentClass = body.className;
body.className = currentClass == "dark-mode page-template-default page" ? "light-mode page-template-default page" : "dark-mode page-template-default page";

var contenttoggler = document.getElementById("contenttoggler"); 
var currentClass = contenttoggler.className;
contenttoggler.className = currentClass == "dark-mode entry-content page" ? "light-mode entry-content" : "dark-mode entry-content";

}
