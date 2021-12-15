function rain() {
    let amount = 700
    let body = document.querySelector('body')
    let i = 0
    while (i < amount) {
        let drop = document.createElement('i')

        let size = Math.random() * 5
        let posX = Math.floor(Math.random() * window.innerWidth)
        let delay = Math.random() * -20
        let duration = Math.random() * 5


        drop.style.width = 0.2 + size + 'PX'
        drop.style.left = posX + 'PX'
        drop.style.animationDelay = delay + 's'
        drop.style.animationDuration = 1 + duration + 's'
        body.append(drop)
        i++
    }
}
rain()