(function () {
  var toggle = document.querySelector(".nav-check");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) toggle.checked = false;
    });
  }

  var dialog = document.querySelector(".lightbox");
  if (!dialog || !dialog.showModal) return;

  var frameImage = dialog.querySelector("img");
  var caption = dialog.querySelector(".lightbox-caption");

  document.querySelectorAll("a.zoom").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var image = link.querySelector("img");
      frameImage.src = link.getAttribute("href");
      frameImage.alt = image ? image.alt : "";
      caption.textContent = link.getAttribute("data-caption") || (image ? image.alt : "");
      if (link.getAttribute("data-wide") === "true") {
        frameImage.classList.add("is-wide");
        frameImage.style.width = (image ? image.naturalWidth || image.width : 1200) + "px";
      } else {
        frameImage.classList.remove("is-wide");
        frameImage.style.width = "";
      }
      dialog.showModal();
    });
  });

  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) dialog.close();
  });

  var closeButton = dialog.querySelector(".lightbox-close");
  if (closeButton) {
    closeButton.addEventListener("click", function () {
      dialog.close();
    });
  }
})();
