// document.querySelector('.spoiler__title').addEventListener('click', function () {
//     this.classList.toggle('active')
//     console.log('click')
// })
document.querySelectorAll('.spoiler__title').forEach(spoiler=> {
    spoiler.addEventListener('click', function () {
        this.classList.toggle('active')
        console.log('click')
    })
})
