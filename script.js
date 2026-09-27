// ===============================
// Wedding Memories Website
// ===============================

// ---------- Gallery ----------
const galleryItems = document.querySelectorAll(".photo-card");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");
const prevPhoto = document.getElementById("prevPhoto");
const nextPhoto = document.getElementById("nextPhoto");
const photoCounter = document.getElementById("photoCounter");

let currentPhoto = 0;

function showPhoto(index) {
  currentPhoto = (index + galleryItems.length) % galleryItems.length;

  const image = galleryItems[currentPhoto].querySelector("img");

  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;

  photoCounter.textContent =
    `${currentPhoto + 1} / ${galleryItems.length}`;

  lightbox.classList.add("show");
  lightbox.setAttribute("aria-hidden", "false");
}

galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    showPhoto(index);
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.classList.remove("show");
  lightbox.setAttribute("aria-hidden", "true");
});

prevPhoto.addEventListener("click", () => {
  showPhoto(currentPhoto - 1);
});

nextPhoto.addEventListener("click", () => {
  showPhoto(currentPhoto + 1);
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.classList.remove("show");
    lightbox.setAttribute("aria-hidden", "true");
  }
});

document.addEventListener("keydown", (event) => {
  if (!lightbox.classList.contains("show")) return;

  if (event.key === "Escape") {
    lightbox.classList.remove("show");
    lightbox.setAttribute("aria-hidden", "true");
  }

  if (event.key === "ArrowLeft") {
    showPhoto(currentPhoto - 1);
  }

  if (event.key === "ArrowRight") {
    showPhoto(currentPhoto + 1);
  }
});


// ---------- Wedding Music ----------
const weddingAudio = new Audio("Audio.mp3");

weddingAudio.loop = true;

const musicButton = document.getElementById("musicBtn");
const musicIcon = document.getElementById("musicIcon");
const musicText = document.getElementById("musicText");

musicButton.addEventListener("click", async () => {

  if (weddingAudio.paused) {

    try {
      await weddingAudio.play();

      musicIcon.textContent = "❚❚";
      musicText.textContent = "Pause Music";

    } catch (error) {

      console.error("Music error:", error);

      alert("Music could not play. Please check that Audio.mp3 is inside the music folder.");

    }

  } else {

    weddingAudio.pause();

    musicIcon.textContent = "♪";
    musicText.textContent = "Play Music";
  }
});


// ---------- Floating Hearts ----------
function createHeart() {

  const heart = document.createElement("div");

  heart.className = "floating-heart";
  heart.textContent = "♥";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration =
    (5 + Math.random() * 5) + "s";

  heart.style.fontSize =
    (12 + Math.random() * 18) + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 900);