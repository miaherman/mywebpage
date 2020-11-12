const coll = document.getElementsByClassName("foldout");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
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
function blooming() {
  var image = document.getElementById('myImage');
  if (image.src.match("lime-blob")) {
    image.src = "/images/pattern.png"
  } else {
    image.src = "/images/lime-blob.png";
  }    
} */