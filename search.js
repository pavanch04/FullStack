window.book = function(e) {
    e.preventDefault();
    const search = document.getElementById('search');
    const searchTerm = search.value;
    const api = "AIzaSyDjVg1Ghczc6Ot0cVm_WH7pYCW6es_OGhw";
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&fields=items(volumeInfo(title,authors,imageLinks,industryIdentifiers,categories))&$key=${api}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const books = data.items;
        const bookapi = document.getElementById("bookapi");
        bookapi.innerHTML = "";

        if(!books) {
            bookapi.textContent = `No books Found!`;
            return;
        }
        books.forEach(book => {
            console.log(books);
            const title = book.volumeInfo.title;
            const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown';
            const imageLink = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : '/images/book.png';
            const isbnArray = book.volumeInfo.industryIdentifiers ? book.volumeInfo.industryIdentifiers || [] : null;
            const isbn10 = book.volumeInfo.industryIdentifiers ? isbnArray[0].identifier : null;
            const isbn13 = book.volumeInfo.industryIdentifiers ? isbnArray[1].identifier : null;
            const categories = book.volumeInfo.categories ? book.volumeInfo.categories.join(', ') : 'Genres not available';
            console.log(isbnArray)
            console.log(isbn10)

            const bookElement = document.createElement("div");
            bookElement.setAttribute("id","bookElement")
            const imageElement = document.createElement("div");
            imageElement.setAttribute("id","imageElement");
            const detailsElement = document.createElement("div");
            detailsElement.setAttribute("id","detailsElement")
            const seperator = document.createElement("hr");
            const read = document.createElement("button");
            read.innerHTML = "Read me";
            read.setAttribute("data-isbn13",isbn13);

            read.onclick = function() {
                const exportIsbn = this.getAttribute("data-isbn13");
                window.location.href = `store.html?isbn13=${exportIsbn}`;
            }
            imageElement.innerHTML = `<img src="${imageLink}" alt="${title}">`
            detailsElement.innerHTML = 
                                        `<h3>Title: ${title}</h3>
                                        <p>Authors: ${authors}</p>
                                        <p>ISBN 10: ${isbn10}</p>
                                        <p>ISBN 13: ${isbn13}</p>
                                        <p>Genres: ${categories}</p>`;
            detailsElement.appendChild(read);
            bookElement.appendChild(imageElement);
            bookElement.appendChild(detailsElement);
            bookapi.appendChild(bookElement);
            bookapi.appendChild(seperator);
        });
    })
    .catch(error => console.log(error))
}