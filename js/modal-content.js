
  var link = document.querySelector(".search-btn");
  var popup = document.querySelector(".modal-content");
  var close = document.querySelector(".search-form-btn");
  var form = popup.querySelector("form");

 link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
 });

 form.addEventListener("submit", function(event) {
 event.preventDefault();
});

 close.addEventListener("click", function(event) {
  event.preventDefault();
  if (popup.classList.contains("modal-content-show")) {
  popup.classList.remove("modal-content-show");
   }
 });

 var html = document.documentElement;
 html.className = html.className.replace("no-js","js");
