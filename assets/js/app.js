window.onscroll = function () {
    const header_nav = document.getElementById('header_top')
    const header_link = document.querySelectorAll('#link')
    if (document.documentElement.scrollTop > 100 ||document.body.scrollTop > 100){
        header_nav.classList.add("scroll_nav")
        header_link[0].classList.remove("active")
        header_link[0].classList.add("active-i")
        header_link[1].classList.add("header_link-color")
        header_link[2].classList.add("header_link-color")
        header_link[3].classList.add("header_link-color")
        header_link[4].classList.add("header_link-color")

       
        
    }
    else {
        header_nav.classList.remove("scroll_nav")
        header_link[0].classList.add("active")
        header_link[0].classList.remove("active-i")
        header_link[1].classList.remove("header_link-color")
        header_link[2].classList.remove("header_link-color")
        header_link[3].classList.remove("header_link-color")
        header_link[4].classList.remove("header_link-color")
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
    animateNumber(115, 9000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('transaction-count').innerText = formattedNumber
    })
  })
