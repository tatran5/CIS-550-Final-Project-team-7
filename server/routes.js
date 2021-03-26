const config = require('./db-config.js');
const mysql = require('mysql');

config.connectionLimit = 10;
const connection = mysql.createPool(config);

/* -------------------------------------------------- */
/* ------------------- Route Handlers --------------- */
/* -------------------------------------------------- */


/* ---- Q1a (Dashboard) ---- */
// Equivalent to: function getTop20Keywords(req, res) {}
const getTop20Keywords = (req, res) => {
  const query = `
    SELECT kwd_name
    FROM movie_keyword
    GROUP BY kwd_name
    ORDER BY COUNT(*) DESC
    LIMIT 20;
  `

  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
      res.json(rows)
    }
  });
};


/* ---- Q1b (Dashboard) ---- */
const getTopMoviesWithKeyword = (req, res) => {
  const query = `
    SELECT DISTINCT title, rating, num_ratings
    FROM  movie_keyword NATURAL JOIN movie
    WHERE kwd_name = '${req.params.keyword}'
    ORDER BY rating DESC, num_ratings DESC
    LIMIT 10;
  `
  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err)
    else {
      res.json(rows)
    }
  });
};


/* ---- Q2 (Recommendations) ---- */
const getRecs = (req, res) => {
  const query = `
    WITH cast_in_req AS (
      SELECT DISTINCT cast_id
      FROM cast_in NATURAL JOIN movie
      WHERE title = '${req.params.movie}'
    ) 
    SELECT DISTINCT title, movie_id, rating, num_ratings
    FROM cast_in
    NATURAL JOIN cast_in_req
    NATURAL JOIN movie
    WHERE title != '${req.params.movie}'
    GROUP BY title, movie_id, rating, num_ratings
    ORDER BY COUNT(cast_id) DESC, rating DESC, num_ratings DESC
    LIMIT 10;
  `
  
  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err)
    else {
      res.json(rows)
    }
  });
};


/* ---- Q3a (Best Movies) ---- */
const getDecades = (req, res) => {
  const query = `
    SELECT DISTINCT FLOOR(release_year DIV 10) * 10 AS decade
    FROM movie
    ORDER BY decade;
  `
  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err)
    else {
      res.json(rows)
    }
  });
};


/* ---- (Best Movies) ---- */
const getGenres = (req, res) => {
  const query = `
    SELECT name
    FROM genre
    WHERE name <> 'genres'
    ORDER BY name ASC;
  `;

  connection.query(query, (err, rows, fields) => {
    if (err) console.log(err);
    else res.json(rows);
  });
};


/* ---- Q3b (Best Movies) ---- */
const bestMoviesPerDecadeGenre = (req, res) => {
  //  A best movie M is defined to be a movie where the rating of M must be larger
  // than the average rating of each genre M belongs to for that given decade.
  //  The user selects the decade as 2010 and genre as Action. Consider Avengers: Age of Ultron ,
  // which is an action movie released in 2015. Avengers: Age of Ultron also belongs to the genres
  // Adventure and Sci-Fi. In the decade 2010, the average rating for the Action genre was 5.80,
  // Adventure was 6.03, and Sci-Fi was 5.54. Avengers: Age of Ultron had a rating of 7, which
  // means that it should be returned in the query since its own rating was larger than the rating of
  // each of the genres it belongs to for that decade.
  //  Now consider another movie 009 Re: Cyborg which is also a movie that was released in the
  // decade 2010 (in 2012) and belongs to the Action genre. 009 Re: Cyborg also belongs to the
  // genres Animation and Sci-Fi. In the decade 2010, the average rating for the Action genre was
  // 5.80, Animation was 6.69, and Sci-Fi was 5.54. 009 Re: Cyborg had a rating of 6, which means
  // it should not be returned, since it does not have a higher rating than the Animation genre for the
  // decade 2010.
  const decade = req.params.decade
  const genre = req.params.genre
  console.log(`decade ${decade}`)
  console.log(`genre ${genre}`)

  // First get average rating per genre in decade using WITH
  const query = `
    WITH avg_rating_per_genre_in_decade AS (
      SELECT genre_name, AVG(rating) AS avg_rating
      FROM movie_genre mg JOIN movie m ON mg.movie_id = m.movie_id
      WHERE m.release_year >= ${decade} AND m.release_year < ${decade} + 10  
      GROUP BY mg.genre_name
    ), better_than_avg_movie_in_genre AS (
      SELECT m.title, m.movie_id, m.release_year, m.rating, mg.genre_name
      FROM movie_genre mg
      JOIN movie m ON mg.movie_id = m.movie_id
      JOIN avg_rating_per_genre_in_decade ar ON mg.genre_name = ar.genre_name
      WHERE m.rating > ar.avg_rating AND (m.movie_id) IN (
        SELECT movie_id
        FROM movie_genre NATURAL JOIN movie
        WHERE genre_name = '${genre}'
      )
    ), genre_count_per_movie AS (
      SELECT movie_id, COUNT(genre_name) AS genre_count
      FROM movie_genre
      GROUP BY movie_id
    )
    SELECT title, movie_id, rating
    FROM better_than_avg_movie_in_genre NATURAL JOIN genre_count_per_movie
    WHERE release_year >= ${decade} AND release_year < ${decade} + 10 
    GROUP BY title, movie_id, rating, genre_count
    HAVING COUNT(genre_name) = genre_count
    ORDER BY title
    LIMIT 100
  `;

  connection.query(query, (err, rows, fields) => {
    if (err) console.log(err);
    else res.json(rows);
  });
};

module.exports = {
	getTop20Keywords: getTop20Keywords,
	getTopMoviesWithKeyword: getTopMoviesWithKeyword,
	getRecs: getRecs,
  getDecades: getDecades,
  getGenres: getGenres,
  bestMoviesPerDecadeGenre: bestMoviesPerDecadeGenre
};