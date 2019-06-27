let logo = document.querySelector(".logo > a"),
    srcNetworksArr = ['https://www.instagram.com','https://vk.com','https://ok.ru','https://twitter.com','https://www.facebook.com','https://www.whatsapp.com'] ;

    logo.addEventListener('click', randomNetworks);

    function randomNetworks() {
       indexNetworks = Math.round(Math.random()*(srcNetworksArr.length - 1))
       logo.src = srcNetworksArr[indexNetworks]
       window.open(logo.src,'_blank')
    }
    