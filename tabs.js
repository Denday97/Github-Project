var tabs = document.querySelectorAll('.tabs a')
for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function(e) {

        var li = this.parentNode
        var div = this.parentNode.parentNode.parentNode

        if(li.classList.contains('active')){
            return false
        }
    // on retir la classe active de l'onglet actif
        div.querySelector('.tabs .active').classList.remove('active')
        // j'ajoute la class active à l'onglet actuel
        li.classList.add('active')
        // on retire la class active sur le contenu actif
        div.querySelector('.tab-content.active').classList.remove('active')
        // j'ajoute la class active sur le contenu correspondant
        div.querySelector(this.getAttribute('href')).classList.add('active')
    })
}