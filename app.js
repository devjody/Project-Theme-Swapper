const themes = document.querySelectorAll(".theme");

themes.forEach((divTheme) => {
  divTheme.addEventListener("click", (event) => {
    themes.forEach((resetAllDiv) => {
      resetAllDiv.style.width = "3vw";
    });
    event.target.style.width = "91vw";
  });
});
