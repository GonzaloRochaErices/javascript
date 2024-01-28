
const searchInput = document.getElementById('searchInput')
const bookList = document.getElementById('bookList')
const goBackBtn = document.getElementById('goBackBtn')
let lastSearchTerm = ''
let isSearchResultsDisplayed = false

// agregamos un evento para escuchar las teclas presionadas

searchInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        searchBooks()
    }
})

async function searchBooks() {
    const searchTerm = searchInput.value.trim()

    if (searchTerm !== '') {
        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
            const data = await response.json()

            lastSearchTerm = searchTerm
            displayBooks(data.items)
            isSearchResultsDisplayed = true
            showGoBackButton()
        } catch (error) {
            console.error('Error fetching books:', error)
        }
    }
}

function displayBooks(books) {
    bookList.innerHTML = ''

    books.forEach(book => {
        const li = document.createElement('li')
        li.innerHTML = `
      <h3>${book.volumeInfo.title}</h3>
      <p class="book-info">Autor: ${book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Desconocido'}</p>
      <p class="book-info">Editorial: ${book.volumeInfo.publisher || 'Desconocido'}</p>
      <p class="book-info">Fecha de Publicación: ${book.volumeInfo.publishedDate || 'Desconocida'}</p>
      <p class="book-info">Descripción: ${book.volumeInfo.description || 'No hay descripción disponible.'}</p>
    `
        bookList.appendChild(li)
    })
}

function showGoBackButton() {
    goBackBtn.style.display = 'block'
}

function goBack() {
    if (isSearchResultsDisplayed) {
        searchInput.value = lastSearchTerm;
        searchBooks()
        isSearchResultsDisplayed = false
        goBackBtn.style.display = 'none'
    }
}
