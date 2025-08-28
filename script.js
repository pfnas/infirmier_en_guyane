document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel-wrapper");

  carousels.forEach(carousel => {
    const mainImage = carousel.querySelector(".displayed-img");
    const thumbs = carousel.querySelectorAll(".thumb");
    const prevBtn = carousel.querySelector(".nav.left");
    const nextBtn = carousel.querySelector(".nav.right");

    let currentIndex = 0;

    // fonction mise à jour
    function updateImage(index) {
      const newSrc = thumbs[index].getAttribute("src");
      const newAlt = thumbs[index].getAttribute("alt");
      mainImage.setAttribute("src", newSrc);
      mainImage.setAttribute("alt", newAlt);
    }

    // événements flèches
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + thumbs.length) % thumbs.length;
      updateImage(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % thumbs.length;
      updateImage(currentIndex);
    });

    // événements clic sur miniature (même si elles sont cachées)
    thumbs.forEach((thumb, index) => {
      thumb.addEventListener("click", () => {
        currentIndex = index;
        updateImage(currentIndex);
      });
    });
  });
});
