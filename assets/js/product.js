window.onscroll = function () {
    const header_nav = document.getElementById('header_top')
    const header_link = document.querySelectorAll('#link')
    const menu_nav = document.querySelector('#nav-menu')
    if (document.documentElement.scrollTop > 200 ||document.body.scrollTop > 200){
        header_nav.classList.add("scroll_nav")
        header_link[0].classList.add("header_link-color")
        header_link[1].classList.add("header_link-color")
        header_link[2].classList.remove("active")
        header_link[2].classList.add("active-i")
        header_link[3].classList.add("header_link-color")
        header_link[4].classList.add("header_link-color")
        menu_nav.classList.add('menu_nav-color')

    }
    else {
        header_nav.classList.remove("scroll_nav")
        header_link[0].classList.remove("header_link-color")
        header_link[1].classList.remove("header_link-color")
        header_link[2].classList.add("active")
        header_link[2].classList.remove("active-i")
        header_link[3].classList.remove("header_link-color")
        header_link[4].classList.remove("header_link-color")
        menu_nav.classList.remove('menu_nav-color')
    }
}

// fix ip
document.addEventListener("touchstart", function() {},false);

// add, minus quantity

function add() {
    const t = document.getElementById('quantity').value;
        document.getElementById('quantity').value = parseInt(t)+1;
        
}

function minus() {
    const t = document.getElementById('quantity').value;
    if( parseInt(t) > 1)
        document.getElementById('quantity').value = parseInt(t)-1;
        
}
