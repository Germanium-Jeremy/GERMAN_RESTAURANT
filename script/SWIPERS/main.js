// SEARCH
const searchButton = document.getElementById('search-button')
      searchClose = document.getElementById('search-close')
      searchContent = document.getElementById('search-content')

// MENU SHOW
// Validate if constant exists
if(searchButton){
    searchButton.addEventListener('click', () =>{
        searchContent.classList.add('show-search')
    })
}

// MENU HIDDEN
// Validate if constant exists
if(searchClose){
    searchClose.addEventListener('click', () =>{
        searchContent.classList.remove('show-search')
    })
}

// LOGIN
const loginButton = document.getElementById('login-button')
      loginClose = document.getElementById('login-close')
      loginContent = document.getElementById('login-content')

// MENU SHOW
// Validate if constant exists
if(loginButton){
    loginButton.addEventListener('click', () =>{
        loginContent.classList.add('show-login')
    })
}

if(loginClose){
    loginClose.addEventListener('click', () =>{
        loginContent.classList.remove('show-login')
    })
}

// ADD SHADOW HEADER
const shadowHeader = () => {
    const header = document.getElementById('header')
    //When the scroll is greater than 50 viewport height, add the
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/* HOME SWIPER */
let swiperHome = new Swiper('.home--swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerview: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
    }
})

// SCIENTISTS / FEATURED SWIPER
let swiperScientists = new Swiper('.scientists--swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerview: 'auto',
    centeredSlides: 'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        1150: {
            slidesPerview: 3,
            centeredSlides: false,
        }
    }
})

// NEW SWIPER
let swiperAthletes = new Swiper('.athletes--swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerview: 'auto',

    breakpoints: {
        1150: {
            slidesPerview: 2,
        }
    }
})

// TESTIMONY SWIPER
let swiperTestimonial = new Swiper('.testimonial--swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerview: 'auto',
    centeredSlides: 'auto',

    breakpoints: {
        1150: {
            slidesPerview: 3,
            centeredSlides: false,
        }
    }
})

//SHOW SCROLL UP
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is higher than 350 viewport height, and the ...
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
        const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionClass = document.querySelector('.nav--menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// DARK LIGHT THEME
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun' //This will be the icon of sun you just put in

//Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//We obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun' //This will be the icon of sun and moon you just put in

//We validate if the user previously chose a topic
if (selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)//Same as here icon
}

//Activate / Deactivate theme with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //We save the theme and current icon
    //const getCurrentTheme: () => "dark" | "light"
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

//SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home--data, .scientists--container, .athletes--container, 
            .join--data, .testimonial--container, .footer`)
sr.reveal(`.home--images`, {delay: 600})
sr.reveal(`.great--card`, {interval: 100})
sr.reveal(`.poloticians--data`, {origin: 'left'})
sr.reveal(`.poloticians--images`, {origin: 'right'})

//   ==== Download the last swiper js on 1h 57min