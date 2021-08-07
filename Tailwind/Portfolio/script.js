/* NAVBAR EFFECT */
const header = document.querySelector('.header')
const hero = document.querySelector('#hero')
const about = document.querySelector('#about')
const projects = document.querySelector('#projects')
const articles = document.querySelector('#articles')
const contact = document.querySelector('#contact')
const navItems = document.querySelectorAll('.nav-item')
const aboutLimit = hero.offsetHeight - 150
const projectsLimit = aboutLimit + about.offsetHeight
const contactLimit = projectsLimit + projects.offsetHeight + articles.offsetHeight
window.addEventListener('scroll', fixNav)

function fixNav() {
    if (window.scrollY > '100') {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
    if (window.scrollY > aboutLimit && window.scrollY < projectsLimit) {
        navItems[0].classList.add('current')
    } else {
        navItems[0].classList.remove('current')
    }
    if (window.scrollY > projectsLimit && window.scrollY < contactLimit) {
        navItems[1].classList.add('current')
    } else {
        navItems[1].classList.remove('current')
    }
    if (window.scrollY > contactLimit) {
        navItems[2].classList.add('current')
    } else {
        navItems[2].classList.remove('current')
    }
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

/* FORM EFFECTS */
const labels = document.querySelectorAll('.form-control label')
labels.forEach(label => {
    const delay = '0.3s'
    label.innerHTML = label.innerText.split('').map((letter, idx) => `<span style="transition-delay:${idx * 0.035}s";>${letter}</span>`).join('')

})

/* FOOTER CREDITS */
const btn = document.querySelector('.btn-credits')
btn.addEventListener('click', () => {
    btn.classList.toggle('show')
})