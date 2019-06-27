let navItem = document.querySelectorAll("nav a");
let randomNavId;

navItem.forEach(item => {
  item.addEventListener('mouseover', linkExchange)
})

function randomLocation() {
    return randomNavId = Math.round(Math.random() * (navItem.length - 1))   
}
function linkExchange(){
  randomLocation()
  if (this.innerHTML == navItem[randomNavId].innerHTML) randomLocation()
  let randomNav = navItem[randomNavId].innerHTML
  navItem[randomNavId].innerHTML = this.innerHTML
  this.innerHTML = randomNav
}