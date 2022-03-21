(function() {

    /* lorsque l'on clique sur un onglet
    on retire la class active de l'onglet 
    j'ajoute la class active à l'onglet actuel

    on retire la class active sur le contenu actif
    j'ajoute la class active sur le contenu correspondant à mon clic */

    var afficherOnglet = function(a, animations) {
        if(animations === undefined) {
            animations = true
        }
            var li = a.parentNode
            var div = a.parentNode.parentNode.parentNode
            var activeTab = div.querySelector('.tab-content.active') // contenu actif
            var aAfficher = div.querySelector(a.getAttribute('href')) // contenu à afficher
    
            if(li.classList.contains('active')){
                return false
            }

            div.querySelector('.tabs .active').classList.remove('active')
            li.classList.add('active')


            if (animations) {
                activeTab.classList.add('fade')
            activeTab.classList.remove('in')
            var transitionend = function() {
                this.classList.remove('fade')
                this.classList.remove('active')
                debugger
                aAfficher.classList.add('active')
                aAfficher.classList.add('fade')
                aAfficher.offsetWidth
                aAfficher.classList.add('in')
                activeTab.removeEventListener('transitionend', transitionend)
                activeTab.removeEventListener('webKitTransitionEnd', transitionend)
                activeTab.removeEventListener('oTransitionEnd', transitionend)
            }
            activeTab.addEventListener('transitionend', transitionend)
            activeTab.addEventListener('webKitTransitionEnd', transitionend)
            activeTab.addEventListener('oTransitionEnd', transitionend)
            } else {
                aAfficher.classList.Add('active')
                activeTab.classList.remove('active')
            }
            // on ajoute la classe fade sur l'élément actif
            // a la fin de l'animation 
            // on retire la class fade et active
            // on ajoute la class fade et active a l'élément à afficher
            // on ajoute la class in
    
    }
    
    
    
    
    var tabs = document.querySelectorAll('.tabs a')
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function(e) {
            afficherOnglet(this)
    
        })
    }
    
    /* je récupère le hash
    ajouter la class active sur le lien href="hash"
    retirer la class active sur les autres onglets
    afficher / masquer les contenus */
    
    var hashChange = function(e) {
        var hash = window.location.hash
        var a = document.querySelector('a[href="' + hash + '"]')
        if (a !== null && !a.parentNode.classList.contains('active')) {
        afficherOnglet(a, e !== undefined)
    
        }
    }

    window.addEventListener('hashchange', hashChange)
    hashChange()


})()