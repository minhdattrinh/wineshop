window.onscroll = function () {
    const header_nav = document.getElementById('header_top')
    const header_link = document.querySelectorAll('#link')
    if (document.documentElement.scrollTop > 200 ||document.body.scrollTop > 200){
        header_nav.classList.add("scroll_nav")
        header_link[0].classList.add("header_link-color")
        header_link[1].classList.remove("active")
        header_link[1].classList.add("active-i")
        header_link[2].classList.add("header_link-color")
        header_link[3].classList.add("header_link-color")
        header_link[4].classList.add("header_link-color")

       
        
    }
    else {
        header_nav.classList.remove("scroll_nav")
        header_link[0].classList.remove("header_link-color")
        header_link[1].classList.add("active")
        header_link[1].classList.remove("active-i")
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
      document.getElementById('year-count').innerText = formattedNumber
    })
    animateNumber(3000, 7000, 0, function (number) {
        const formattedNumber = number.toLocaleString()
        document.getElementById('customer-count').innerText = formattedNumber
    })

    animateNumber(115, 7000, 0, function (number) {
        const formattedNumber = number.toLocaleString()
        document.getElementById('years-count').innerText = formattedNumber
      })
      
    animateNumber(100, 7000, 0, function (number) {
        const formattedNumber = number.toLocaleString()
        document.getElementById('kind-count').innerText = formattedNumber
    })
    animateNumber(40, 7000, 0, function (number) {
        const formattedNumber = number.toLocaleString()
        document.getElementById('branches-count').innerText = formattedNumber
    })
  })
