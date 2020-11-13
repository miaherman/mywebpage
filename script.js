/** Gets buttonID from HTML */
const fold = document.getElementsByClassName("foldout");
let i;

/** Loop for buttons that fold out when clicked */
for (i = 0; i < fold.length; i++) {
  fold [i].addEventListener("click", function () {
    this.classList.toggle("active");
    const content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    }
    else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}