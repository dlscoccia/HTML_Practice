/* FORM EFFECTS */
const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    const delay = '0.3s'
    label.innerHTML = label.innerText.split('').map((letter, idx) => `<span style="transition-delay:${idx * 0.035}s";>${letter}</span>`).join('')

})