window.addEventListener("scroll", function(e) {
    if (e.target.scrollingElement.scrollTop >= 250 && document.getElementById("main").scrollTop <= 250) {
        document.getElementById("main").scroll({top: e.target.scrollingElement.scrollTop-270, behavior: "auto"})
    }
    else if(e.target.scrollingElement.scrollTop >= 1300 && document.getElementById("main").scrollTop <= 1300) {
        document.getElementById("main").scroll({top: e.target.scrollingElement.scrollTop-900, behavior: "auto"})
        console.log(e.target.scrollingElement.scrollTop, document.getElementById("main").scrollTop)
    }

    if (e.target.scrollingElement.scrollTop <= 770 && document.getElementById("main").scrollTop <= 800) {
        document.getElementById("main").scroll({top: e.target.scrollingElement.scrollTop-350, behavior: "auto"})
    }

}, false);

let list = document.querySelectorAll('.ul-wrapper li')
const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

list.forEach((e) => {
    e.addEventListener('mouseover', () => {
        list.forEach((e) => {
            e.classList.remove('active')
        })
        e.classList.add('active')
    })
})

list.forEach((e) => {
    e.addEventListener('mouseout', () => {
        list.forEach((e) => {
            e.classList.remove('active')
        })
    })
    e.classList.remove('active')
})

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close_btn .addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})


