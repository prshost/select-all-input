let all = document.querySelector('.all')
let del = document.querySelectorAll('.delete')
let allDel = document.querySelector('.all-del')

all.addEventListener('click', (e) => {
    del.forEach( item => {
        if ( item.checked ) {
            item.checked = false
            allDel.classList.remove('show')
        } else {
            item.checked = true
            allDel.classList.add('show')
        }
        
    })
})