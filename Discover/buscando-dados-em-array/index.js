/**
 * # Buscando e contatndo dados em arrays
 *
 * baseado no array de livros por categora abaixo, faço os seguintes desafios
 *
 *  - contar o numero de categorias e o numero de livros em cada categoria
 *  - contar o numero de autores
 *  - mostrar livros do autor auguto cury
 *  - transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autos.
 */

const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "george S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaky e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocial",
    books: [
        {
          title: "Você é Insubstituível",
          author: "Augusto Cury",
        },
        {
          title: "ansiedade - como enfrentar o mal do século",
          author: "Augusto Cury",
        },
        {
          title: "Os 7 hábitos das pessoas altamente eficazes",
          author: "Stephen R. Covey",
        },
      ],
  },
  {
    category: "Thriller",
    books: [
        {
            title: "It a coisa",
            author: "Stephen King",
        },
        {
            title: "O Iluminado",
            author: "Stephen King",
        },
        {
            title: "Zona morta",
            author: "Stephen King",
        },
    ],
  },
];

const totalCategories = booksByCategory.length
console.log(totalCategories)

for (const category of booksByCategory) {
    console.log("Total de livros da categoria: ", category)
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];

    for (const category of booksByCategory) {
        for (const book of category.books) {
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }

    console.log("Total de autores: " + authors.length)
}

countAuthors()


function booksOfAuthor(author) {
    let books = [];

    for (const category of booksByCategory) {
        for (const book of category.books) {
            if (book.author === author) {
                books.push(book.title)
            }
        }
    }

    console.log(`livros do autor ${author}, ${books.join(", ")}`)
}
booksOfAuthor('Stephen King')