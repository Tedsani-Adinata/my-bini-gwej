const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const video = card.querySelector("video");

  if (!video) {
    return;
  }

  const playVideo = () => {
    video.play().catch(() => {
      // Some browsers may block playback until the user interacts with the page.
    });
  };

  const resetVideo = () => {
    video.pause();
    video.currentTime = 0;
  };

  card.addEventListener("mouseenter", playVideo);
  card.addEventListener("focusin", playVideo);
  card.addEventListener("mouseleave", resetVideo);
  card.addEventListener("focusout", resetVideo);
});
