
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.annonce-btn').addEventListener('click', () => {
        const form = document.querySelector('#heraut-form')
        form.style.display = "block";
        form.scrollIntoView({behavior: 'smooth'})
    })

    getCharacterPathProgress()
})