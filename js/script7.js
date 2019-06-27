let arrDropdown = document.querySelectorAll("#dropdown");
let arrSection = document.querySelectorAll("[data-arr='arr']");
let blockId;

arrDropdown.forEach( (item, i) => {
    item.onclick = () => {
        scrollRandom(i)
    }
})

function scrollRandom(i) {
    randomBlock();
    if (arrSection[blockId].offsetTop < arrDropdown[i].offsetTop) {
        randomBlock();
    }
    let y = arrSection[blockId].offsetTop;
    window.scrollTo(0,y)
}

function randomBlock() {
    return blockId = Math.round( Math.random() * (arrSection.length - 1))
}
