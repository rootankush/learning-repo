function flipCoin(){
  const coinImages = document.getElementById("coinImages");
  const coinFace = document.getElementById("coinFace");
  const face = Math.floor(Math.random() * 2);

  let imageHTML = "";
    if (face === 0) {
      imageHTML = `<img src="src/images/heads.png" alt="Heads">`;
      coinFace.textContent = "Heads";
  } else {
    imageHTML = `<img src="src/images/tails.png" alt="Tails">`;
    coinFace.textContent = "Tails";
  }

  coinImages.innerHTML = imageHTML;
}
