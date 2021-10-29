window.onscroll = function () {
    const header_nav = document.getElementById('header_top')
    const header_link = document.querySelectorAll('#link')
    const menu_nav = document.querySelector('#nav-menu')
    if (document.documentElement.scrollTop > 200 ||document.body.scrollTop > 200){
        header_nav.classList.add("scroll_nav")
        header_link[0].classList.add("header_link-color")
        header_link[1].classList.add("header_link-color")
        header_link[2].classList.add("header_link-color")
        header_link[3].classList.add("header_link-color")
        header_link[4].classList.remove("active")
        header_link[4].classList.add("active-i")
        menu_nav.classList.add('menu_nav-color')
    }
    else {
        header_nav.classList.remove("scroll_nav")
        header_link[0].classList.remove("header_link-color")
        header_link[1].classList.remove("header_link-color")
        header_link[2].classList.remove("header_link-color")
        header_link[3].classList.remove("header_link-color")
        header_link[4].classList.add("active")
        header_link[4].classList.remove("active-i")
        menu_nav.classList.remove('menu_nav-color')
    }
}

const navMenu = document.querySelector('#nav-menu')
const mobileMenu = document.querySelector('#mobile-menu')
const subMenu = document.querySelector('#sub-menu')
const itemMenu = document.querySelector('#item-menu')

mobileMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show')
})

subMenu.addEventListener('click', () => {
  itemMenu.classList.toggle('show')
})