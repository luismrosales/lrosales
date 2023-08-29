const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    // add active class to clicked card
    const isCardActive = card.classList.contains("active");
    cards.forEach((otherCard, otherIndex) => {
      otherCard.classList.remove("active");
      otherCard.classList.remove("is-inactive");
      if (!isCardActive && index !== otherIndex) {
        otherCard.classList.add("is-inactive");
      }
    });
    if (!isCardActive) card.classList.add("active");
  });
});
