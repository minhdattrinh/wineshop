window.onscroll = function () {
    const header_nav = document.getElementById('header_top')
    const header_link = document.querySelectorAll('#link')
    const menu_nav = document.querySelector('#nav-menu')
    if (document.documentElement.scrollTop > 100 ||document.body.scrollTop > 100){
        header_nav.classList.add("scroll_nav")
        header_link[0].classList.remove("active")
        header_link[0].classList.add("active-i")
        header_link[1].classList.add("header_link-color")
        header_link[2].classList.add("header_link-color")
        header_link[3].classList.add("header_link-color")
        header_link[4].classList.add("header_link-color")
        menu_nav.classList.add('menu_nav-color')

       
        
    }
    else {
        header_nav.classList.remove("scroll_nav")
        header_link[0].classList.add("active")
        header_link[0].classList.remove("active-i")
        header_link[1].classList.remove("header_link-color")
        header_link[2].classList.remove("header_link-color")
        header_link[3].classList.remove("header_link-color")
        header_link[4].classList.remove("header_link-color")
        menu_nav.classList.remove('menu_nav-color')
    }
}


function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
    const startTime = performance.now()
    function updateNumber(currentTime) {
      const elapsedTime = currentTime - startTime
      if (elapsedTime > duration) {
        callback(finalNumber)
      } else {
        const rate = elapsedTime / duration
        const currentNumber = Math.round(rate * finalNumber)
        callback(currentNumber)
        requestAnimationFrame(updateNumber)
      }
    }
    requestAnimationFrame(updateNumber)
  }

  document.addEventListener('DOMContentLoaded', function () {
    animateNumber(115, 5000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('transaction-count').innerText = formattedNumber
    })
  })


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


// fix ip
document.addEventListener("touchstart", function() {},false);
// Login


