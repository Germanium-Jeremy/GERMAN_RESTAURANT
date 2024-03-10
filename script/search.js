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