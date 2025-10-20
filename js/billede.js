const billeder = document.querySelectorAll(".skiftbart");

billeder.forEach((billede) => {
  billede.addEventListener("click", () => {
    const currentSrc = billede.src;
    const currentAlt = billede.alt;

    // Skift frem og tilbage mellem de to
    billede.src = billede.getAttribute("data-src");
    billede.alt = billede.getAttribute("data-alt");

    billede.setAttribute("data-src", currentSrc);
    billede.setAttribute("data-alt", currentAlt);
  });

  //   // Gem originalen så vi kan skifte tilbage
  //   billede.dataset.original = billede.src;
});
