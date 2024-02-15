
const searchInput = document.getElementById('searchInput')
const bookList = document.getElementById('bookList')
let lastSearchTerm = ''
let isSearchResultsDisplayed = false

// verificar búsqueda anterior en localStorage al cargar la página
window.addEventListener('load', function () {
    const storedSearchTerm = localStorage.getItem('lastSearchTerm')
    if (storedSearchTerm) {
        lastSearchTerm = storedSearchTerm
        searchInput.value = lastSearchTerm
        searchBooks()
    }
})

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
            localStorage.setItem('lastSearchTerm', lastSearchTerm) // para guardar búsqueda en localStorage

            // Limpiamos la lista de libros antes de agregar los nuevos
            bookList.innerHTML = ''

            // Iteramos sobre los libros utilizando un bucle for
            for (let i = 0; i < data.items.length; i++) {
                const book = data.items[i]
                const li = document.createElement('li')
                li.innerHTML = `
                  <h3>${book.volumeInfo.title}</h3>
                  <p class="book-info">Autor: ${book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Desconocido'}</p>
                  <p class="book-info">Editorial: ${book.volumeInfo.publisher || 'Desconocido'}</p>
                  <p class="book-info">Fecha de Publicación: ${book.volumeInfo.publishedDate || 'Desconocida'}</p>
                  <p class="book-info">Descripción: ${book.volumeInfo.description || 'No hay descripción disponible.'}</p>
                  <p class="book-info"><a href="${book.volumeInfo.infoLink}" target="_blank">Más información y compra</a></p>
                `
                bookList.appendChild(li)
            }

            isSearchResultsDisplayed = true
            showSuggestions(data.items)
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
      <p class="book-info"><a href="${book.volumeInfo.infoLink}" target="_blank">Más información y compra</a></p>
    `
        bookList.appendChild(li)
    })
}

// Mostrar sugerencias de dónde conseguir o comprar los libros
function showSuggestions(books) {
    const suggestionsContainer = document.createElement('div')
    suggestionsContainer.classList.add('suggestions')

    const suggestionTitle = document.createElement('h2')
    suggestionTitle.textContent = '¿Dónde conseguir estos libros?'

    const suggestionList = document.createElement('ul')

    books.forEach(book => {
        const suggestionItem = document.createElement('li')
        suggestionItem.innerHTML = `<a href="${book.volumeInfo.infoLink}" target="_blank">${book.volumeInfo.title}</a>`
        suggestionList.appendChild(suggestionItem)
    })

    suggestionsContainer.appendChild(suggestionTitle)
    suggestionsContainer.appendChild(suggestionList)

    bookList.appendChild(suggestionsContainer)
}

function showGoBackButton() {
    const goBackBtn = document.getElementById('goBackBtn')
    goBackBtn.style.display = 'block'
}

function hideGoBackButton() {
    const goBackBtn = document.getElementById('goBackBtn')
    goBackBtn.style.display = 'none'
}

// Agregar función para volver atrás
function goBack() {
    if (isSearchResultsDisplayed) {
        isSearchResultsDisplayed = false
        bookList.innerHTML = ''
        hideGoBackButton()
        searchInput.focus()
    } else {
        window.history.back()
    }
}
