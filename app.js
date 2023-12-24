let popitBtns = document.querySelectorAll('.popit-button');

popitBtns.forEach(popitBtn => {
    popitBtn.addEventListener('click', () => {
        popitBtn.classList.toggle('active');
    })
})