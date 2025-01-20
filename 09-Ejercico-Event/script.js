/* Referencia */

const emojiCursor = document.querySelector(".emoji-cursor");

/* Detectamos el evento movimiento del mouse */

document.addEventListener("mousemove" , (e) => {
  /* console.log(e.clientX);
  console.log(e.clientY); */

  let mouseX = e.clientX;
  let mouseY = e.clientY;

  emojiCursor.style.left = `${mouseX}px` ;
  emojiCursor.style.top = `${mouseY}px` ;
} );

/* console.log(emojiCursor.style); */

document.addEventListener("keydown" , (e) => {
  /* console.log(e.key); */

  switch (e.key) {
      case "1":
        emojiCursor.textContent = "🤬";
        break;
      case "2":
        emojiCursor.textContent = "😵";
      case "3":
        emojiCursor.textContent = "😴";
      case "4":
        emojiCursor.textContent = "😖";
      default:
        emojiCursor.textContent = "👿";
  }
} );

