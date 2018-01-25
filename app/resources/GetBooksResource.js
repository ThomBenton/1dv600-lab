(function () {
  'use strict'

  let LibraryDAO = require('../dao/LibraryDAO')
  let Book = require('../dao/Books')

  module.exports = function (callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)
    const Patriot = new Book(1, 'Patriot Game', 'Tom Clancy', 'Thriller', '1990-01-01', 300, 'In the right place at the wrong time')
    const Population = new Book(2, 'Remnant Population', 'Elisabeth Moon', 'Sci-Fi', '1983-04-12', 150, 'I will stay when all leaves')
    const Pride = new Book(3, 'Pride, Predjudice and Zombies', 'Jane Austen', 'Thriller - Comedy', '2015-01-01', 180, 'Who will stand up to the crowd')

    const list = [Patriot, Population, Pride]
    console.log(list)
  }
}())
