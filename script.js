/** Gets buttonID from HTML */
const fold = document.getElementsByClassName("foldout");
let i;

/** For loop for buttons that fold out when clicked */
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

/** 
function imageframe() {
  let image = document.getElementById('myImage');
  if (image.src.match("lime-blob")) {
    image.src = "/images/pattern.png"
  } else {
    image.src = "/images/lime-blob.png";
  }    
} */