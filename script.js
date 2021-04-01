$(document).ready(function () {
  $(".carousel").carousel();
  $(".collapsible").collapsible();

  // Access toggle switch HTML element
  var themeSwitcher = document.querySelector("#theme-switcher");
  var container = document.querySelector(".container");

  // Set default mode to dark...this is changed
  var darkMode = true;

  // Listen for a click event on toggle switch
  themeSwitcher.addEventListener("click", function () {
    darkMode = !darkMode;
    // If mode is dark, apply light background
    if (!darkMode) {
      container.setAttribute("class", "bright");
    } else {
      //remove bright class//
      container.removeAttribute("class", "bright");
    }
  });
});

/*
}); //this needs to be put back on line 4 */
