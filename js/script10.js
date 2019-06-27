let imageArr = document.querySelectorAll("img");
imageArr.forEach( item =>{
  item.addEventListener('mouseover', markImage);
  item.addEventListener("mouseout", imageNormal)
})

function markImage() {
  this.classList.add("mark-image")
}
function imageNormal() {
  this.classList.remove("mark-image")
}