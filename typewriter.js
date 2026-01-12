function startTypewriter(text) {
  let i = 0;
  let speed = 50;
  let target = document.getElementById("typewriter");

  function typing() {
    if (i < text.length) {
      target.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}
