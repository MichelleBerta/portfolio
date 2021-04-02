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
    console.log(container);
    darkMode = !darkMode;
    // If mode is dark, apply light background
    if (!darkMode) {
      container.classList.remove("dark");
      container.classList.add("bright");
    } else {
      //remove bright class//
      container.classList.remove("bright");
      container.classList.add("dark");
    }
  });
});

/*
}); //this needs to be put back on line 4 */
