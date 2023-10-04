const modal = document.querySelector('.modal')
const loginBtn = document.querySelector('.login-btn')
const closeBtn = document.querySelector('.close')

// When Login btn is clicked, than will run the function called openModal
loginBtn.addEventListener('click', openModal)

// When closed button is clicked, its gonna call closeModal
closeBtn.addEventListener('click', closeModal)

// Modal closes when user clicks outside of modal window
window.addEventListener('click', outsideClick)

function openModal() {
    modal.style.display = 'block'
}

function closeModal() {
    modal.style.display = 'none'
}

function outsideClick(e) {
    if(e.targer == modal) {
        closeModal()
    }
}
