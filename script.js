document.querySelectorAll('.gallery-container').forEach((container) => {
  const mainImg = container.querySelector('.displayed-img');
  const thumbs = container.querySelectorAll('.thumb');
  const leftBtn = container.querySelector('.nav.left');
  const rightBtn = container.querySelector('.nav.right');

  let currentIndex = 0;

  const updateImage = (index) => {
    const selectedThumb = thumbs[index];
    if (selectedThumb) {
      mainImg.src = selectedThumb.src;
      container.querySelector('.thumb.active')?.classList.remove('active');
      selectedThumb.classList.add('active');
      currentIndex = index;
    }
  };

  // Click on thumbnail
  thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => updateImage(index));
  });

  // Navigation buttons
  leftBtn?.addEventListener('click', () => {
    const newIndex = (currentIndex - 1 + thumbs.length) % thumbs.length;
    updateImage(newIndex);
  });

  rightBtn?.addEventListener('click', () => {
    const newIndex = (currentIndex + 1) % thumbs.length;
    updateImage(newIndex);
  });

  // Init
  updateImage(0);
});
