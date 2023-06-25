/*filters tabs*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc => {
            /*tc = tabcontent*/
            tc.classList.remove('filtersActive')
        })
        target.classList.add('filtersActive')
    })
})
/*dark light theme*/

/*scroll reveal animation*/