/* FORM EFFECTS */
const labels = document.querySelectorAll('.form-control label')
labels.forEach(label => {
    const delay = '0.3s'
    label.innerHTML = label.innerText.split('').map((letter, idx) => `<span style="transition-delay:${idx * 0.035}s";>${letter}</span>`).join('')

})

/* PAGE CHANGE */
function togglePageFlip(el) {
    setAllPagesBack();
    setClickedPageForward(el);
    el.classList.toggle('turn');
}

function setAllPagesBack() {
    const pages = document.getElementsByClassName("page");
    for (let i = 0; i < pages.length; i++) {
        pages[i].classList.remove('z-50');
    }
}

function setClickedPageForward(el) {
    el.classList.add('z-50');
}

/* PROJECTS */
const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('mouseover', () => {
        removeActiveClass()
        panel.classList.add('active')
    })
})

function removeActiveClass() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}