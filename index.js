// Definire un array di oggetti; ogni oggetto rappresenta un film o serie tv, che è caratterizzato da: title, year, genre, rating, type (movie o tv), seasons (solo per serie tv).
const moviesAndSeries = [
  {
    title: 'The Matrix',
    year: 1999,
    genre: 'Action',
    rating: 8.7,
    type: 'movie'
  },
  {
    title: 'Game of Thrones',
    year: 2011,
    genre: 'Fantasy',
    rating: 9.2,
    type: 'tv',
    seasons: 8
  },
  {
    title: 'The Lord of the Rings',
    year: 2001,
    genre: 'Fantasy',
    rating: 8.8,
    type: 'tv',
    seasons: 8
  },
  {
    title: 'The Hobbit',
    year: 2013,
    genre: 'Fantasy',
    rating: 8.9,
    type: 'tv',
    seasons: 7
  }
];

// Creare una classe Movie che contenga le informazioni sopra indicate.
// Entrambe le classi dovranno avere un metodo toString() che ritorni una stringa con i dati del film, tipo:
class Movie {
  constructor(title, year, genre, rating) {
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.rating = rating;
    this.type = 'movie';
  }
  toString() {
    return `${this.title} è un film di genere ${this.genre}. E' stato rilasciato nel ${this.year} ed ha un voto di ${this.rating} su 10.`;
  }
}
// Creare una classe TvSeries che estenda la classe Movie e ne aggiunga la proprietà seasons.
class TvSeries extends Movie {
  constructor(title, year, genre, rating, seasons) {
    super(title, year, genre, rating);
    this.seasons = seasons;
  }
  toString() {
    return `${this.title} è una serie TV di genere ${this.genre}. E' stata rilasciata nel ${this.year} ed ha un voto di ${this.rating} su 10.`;
  }
}


